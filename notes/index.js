
function createCopyButton() {
    let copyButton = document.createElement("button");
    copyButton.textContent = "نسخ";
    copyButton.style.backgroundColor = "grey";
    // copyButton.style.color = "white";
    copyButton.style.padding = "10px 20px";
    // copyButton.style.border = "none";
    copyButton.style.cursor = "pointer";
    copyButton.style.fontSize = "16px";
    copyButton.style.marginTop = "10px";
    copyButton.onclick = function () {
        let text = this.previousElementSibling.innerText;
        navigator.clipboard.writeText(text).then(function () {
            alert("تم نسخ المحتوى إلى الحافظة!");
        });
    };
    return copyButton;
}
document.addEventListener("DOMContentLoaded", function () {
    let elements = document.querySelectorAll(".chat.assistant");
    elements.forEach(function (el) {
        let copyButton = createCopyButton();
        el.insertAdjacentElement("afterend", copyButton);
    });
}); 