// Pro Photo Cropper - Client Side Logic
document.addEventListener('DOMContentLoaded', () => {
    // UI Elements
    const uploadScreen = document.getElementById('upload-screen');
    const workspaceScreen = document.getElementById('workspace-screen');
    const fileInput = document.getElementById('file-input');
    const btnBrowse = document.getElementById('btn-browse');
    const btnPaste = document.getElementById('btn-paste');
    const btnCancel = document.getElementById('btn-cancel');
    const btnCopy = document.getElementById('btn-copy');
    const btnDownload = document.getElementById('btn-download');
    
    // Workspace Elements
    const canvasContainer = document.getElementById('canvas-container');
    const canvas = document.getElementById('image-canvas');
    const ctx = canvas.getContext('2d');
    const cropBox = document.getElementById('crop-box');
    const ratioBtns = document.querySelectorAll('.btn-tool');
    
    // State
    let imageObj = null;
    let canvasScale = 1; // display size / intrinsic size
    let cropRect = { x: 0, y: 0, w: 0, h: 0 };
    let currentRatio = null; // null means 'free'
    const MIN_CROP_SIZE = 40;

    // --- Upload Logic ---
    uploadScreen.addEventListener('click', (e) => {
        if (!e.target.closest('#btn-paste')) {
            fileInput.click();
        }
    });

    uploadScreen.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadScreen.classList.add('dragover');
    });

    uploadScreen.addEventListener('dragleave', () => {
        uploadScreen.classList.remove('dragover');
    });

    uploadScreen.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadScreen.classList.remove('dragover');
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            handleFile(e.dataTransfer.files[0]);
        }
    });

    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length) {
            handleFile(e.target.files[0]);
        }
    });

    btnPaste.addEventListener('click', async (e) => {
        e.stopPropagation();
        try {
            const clipboardItems = await navigator.clipboard.read();
            for (const item of clipboardItems) {
                const imageTypes = item.types.filter(type => type.startsWith('image/'));
                if (imageTypes.length > 0) {
                    const blob = await item.getType(imageTypes[0]);
                    handleFile(blob);
                    return;
                }
            }
            alert('No image found in clipboard.');
        } catch (err) {
            console.error(err);
            alert('Please allow clipboard access, or try pressing Ctrl+V directly.');
        }
    });

    document.addEventListener('paste', (e) => {
        if (!imageObj && e.clipboardData && e.clipboardData.items) {
            for (const item of e.clipboardData.items) {
                if (item.type.startsWith('image/')) {
                    const blob = item.getAsFile();
                    handleFile(blob);
                    break;
                }
            }
        }
    });

    function handleFile(file) {
        if (!file.type.startsWith('image/')) {
            alert('Please select a valid image file.');
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                imageObj = img;
                setupWorkspace();
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }

    // --- Editor Setup ---
    function setupWorkspace() {
        uploadScreen.classList.remove('active');
        workspaceScreen.classList.add('active');

        // Reset Ratio
        currentRatio = null;
        updateRatioUI('free');

        // Resize Canvas to fit container
        const containerW = canvasContainer.parentElement.clientWidth - 40; 
        const containerH = canvasContainer.parentElement.clientHeight - 40;
        
        const imgRatio = imageObj.width / imageObj.height;
        let displayW = containerW;
        let displayH = containerW / imgRatio;

        if (displayH > containerH) {
            displayH = containerH;
            displayW = displayH * imgRatio;
        }

        canvasScale = displayW / imageObj.width;
        
        canvasContainer.style.width = displayW + 'px';
        canvasContainer.style.height = displayH + 'px';
        canvas.width = displayW;
        canvas.height = displayH;
        
        ctx.drawImage(imageObj, 0, 0, displayW, displayH);

        // Initial crop center (80% of image)
        const initW = displayW * 0.8;
        const initH = displayH * 0.8;
        cropRect = {
            x: (displayW - initW) / 2,
            y: (displayH - initH) / 2,
            w: initW,
            h: initH
        };

        renderCropBox();
    }

    // --- Rendering ---
    function renderCropBox() {
        cropBox.style.left = `${cropRect.x}px`;
        cropBox.style.top = `${cropRect.y}px`;
        cropBox.style.width = `${cropRect.w}px`;
        cropBox.style.height = `${cropRect.h}px`;
    }

    // --- User Interaction Variables ---
    let isDragging = false;
    let isResizing = false;
    let activeHandle = null;
    let dragStartX = 0;
    let dragStartY = 0;
    let originalRect = {};

    // --- Interaction ---
    cropBox.addEventListener('mousedown', startInteraction);
    cropBox.addEventListener('touchstart', startInteraction, { passive: false });

    document.addEventListener('mousemove', handleInteraction);
    document.addEventListener('touchmove', handleInteraction, { passive: false });

    document.addEventListener('mouseup', endInteraction);
    document.addEventListener('touchend', endInteraction);

    function startInteraction(e) {
        if (!imageObj) return;
        
        const touch = e.type.includes('touch') ? e.touches[0] : e;
        if (e.target.classList.contains('handle')) {
            isResizing = true;
            activeHandle = e.target.dataset.handle;
        } else if (e.target.closest('#crop-box')) {
            isDragging = true;
        } else {
            return;
        }

        e.preventDefault();
        dragStartX = touch.clientX;
        dragStartY = touch.clientY;
        originalRect = { ...cropRect };
    }

    function handleInteraction(e) {
        if (!isDragging && !isResizing) return;
        e.preventDefault();

        const touch = e.type.includes('touch') ? e.touches[0] : e;
        const dx = touch.clientX - dragStartX;
        const dy = touch.clientY - dragStartY;

        if (isDragging) {
            let newX = originalRect.x + dx;
            let newY = originalRect.y + dy;

            // Constrain to canvas bounds
            newX = Math.max(0, Math.min(newX, canvas.width - cropRect.w));
            newY = Math.max(0, Math.min(newY, canvas.height - cropRect.h));

            cropRect.x = newX;
            cropRect.y = newY;
        } else if (isResizing) {
            performResize(dx, dy);
        }

        renderCropBox();
    }

    function performResize(dx, dy) {
        let newX = originalRect.x;
        let newY = originalRect.y;
        let newW = originalRect.w;
        let newH = originalRect.h;

        const adjustN = () => { newY = originalRect.y + dy; newH = originalRect.h - dy; };
        const adjustS = () => { newH = originalRect.h + dy; };
        const adjustW = () => { newX = originalRect.x + dx; newW = originalRect.w - dx; };
        const adjustE = () => { newW = originalRect.w + dx; };

        if (activeHandle.includes('n')) adjustN();
        if (activeHandle.includes('s')) adjustS();
        if (activeHandle.includes('e')) adjustE();
        if (activeHandle.includes('w')) adjustW();

        // Enforce aspect ratio
        if (currentRatio) {
            if (activeHandle === 'e' || activeHandle === 'w') {
                newH = newW / currentRatio;
                // keep top fixed
            } else if (activeHandle === 'n' || activeHandle === 's') {
                newW = newH * currentRatio;
                // keep left fixed
            } else {
                // Diagonal resizing
                if (Math.abs(dx) > Math.abs(dy)) { // Width drives
                    newH = newW / currentRatio;
                    if (activeHandle.includes('n')) newY = originalRect.y + (originalRect.h - newH);
                } else { // Height drives
                    newW = newH * currentRatio;
                    if (activeHandle.includes('w')) newX = originalRect.x + (originalRect.w - newW);
                }
            }
        }

        // Constraints and min sizes
        if (newW < MIN_CROP_SIZE) {
            newW = MIN_CROP_SIZE;
            if (activeHandle.includes('w')) newX = originalRect.x + originalRect.w - MIN_CROP_SIZE;
            if (currentRatio) newH = newW / currentRatio;
        }
        if (newH < MIN_CROP_SIZE) {
            newH = MIN_CROP_SIZE;
            if (activeHandle.includes('n')) newY = originalRect.y + originalRect.h - MIN_CROP_SIZE;
            if (currentRatio) newW = newH * currentRatio;
        }

        // Limit to Canvas bounds
        // If it hits bounds, we just cap width height and stop (breaking ratio slightly but keeps UI from breaking)
        if (newX < 0) { 
            newX = 0; 
            if(!currentRatio && activeHandle.includes('w')) newW -= newX; 
        }
        if (newY < 0) { 
            newY = 0; 
            if(!currentRatio && activeHandle.includes('n')) newH -= newY; 
        }
        if (newX + newW > canvas.width) { 
            newW = canvas.width - newX; 
            if(currentRatio) newH = newW / currentRatio; 
        }
        if (newY + newH > canvas.height) { 
            newH = canvas.height - newY; 
            if(currentRatio) newW = newH * currentRatio; 
        }

        cropRect.x = newX;
        cropRect.y = newY;
        cropRect.w = newW;
        cropRect.h = newH;
    }

    function endInteraction() {
        isDragging = false;
        isResizing = false;
        activeHandle = null;
    }

    // --- Toolbar Handlers ---
    ratioBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const ratioVal = btn.dataset.ratio;
            currentRatio = ratioVal === 'free' ? null : parseFloat(ratioVal);
            updateRatioUI(ratioVal);

            if (currentRatio) {
                // Apply ratio logic immediately to current crop box
                let rW = cropRect.w;
                let rH = cropRect.w / currentRatio;
                
                if (cropRect.y + rH > canvas.height) {
                    rH = canvas.height - cropRect.y;
                    rW = rH * currentRatio;
                }
                
                cropRect.w = rW;
                cropRect.h = rH;
                renderCropBox();
            }
        });
    });

    function updateRatioUI(selected) {
        ratioBtns.forEach(btn => {
            if (btn.dataset.ratio === selected) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    btnCancel.addEventListener('click', () => {
        workspaceScreen.classList.remove('active');
        uploadScreen.classList.add('active');
        fileInput.value = '';
        imageObj = null;
    });

    function getCroppedCanvas() {
        const trX = cropRect.x / canvasScale;
        const trY = cropRect.y / canvasScale;
        const trW = cropRect.w / canvasScale;
        const trH = cropRect.h / canvasScale;

        const outCanvas = document.createElement('canvas');
        outCanvas.width = trW;
        outCanvas.height = trH;
        const outCtx = outCanvas.getContext('2d');

        outCtx.drawImage(
            imageObj,
            trX, trY, trW, trH,
            0, 0, trW, trH
        );
        return outCanvas;
    }

    btnCopy.addEventListener('click', async () => {
        if (!imageObj) return;
        try {
            const outCanvas = getCroppedCanvas();
            outCanvas.toBlob(async (blob) => {
                if (!blob) return;
                try {
                    const item = new ClipboardItem({ 'image/png': blob });
                    await navigator.clipboard.write([item]);
                    const origText = btnCopy.innerText;
                    btnCopy.innerText = '✔️ Copied!';
                    setTimeout(() => { btnCopy.innerText = origText; }, 2000);
                } catch (err) {
                    console.error('Copy Failed', err);
                    alert('Your browser does not support direct copying, try the download feature instead.');
                }
            }, 'image/png', 1.0);
        } catch (err) {
            console.error(err);
        }
    });

    btnDownload.addEventListener('click', () => {
        if (!imageObj) return;
        const outCanvas = getCroppedCanvas();
        const link = document.createElement('a');
        link.download = 'pro-cropped-image.png';
        link.href = outCanvas.toDataURL('image/png', 1.0);
        link.click();
    });
});
