//variables
let elTarget = document.body.querySelector("#chat_logs_container");
let messagedFs = new Set();
let messagedMs = new Set();
let resala = document.getElementsByClassName("i_btm fa fa-envelope")[0];
let targetElement = document.getElementById('notify_private');
let observerr = new MutationObserver(privo);
let msg = (new Date().getHours() >= 2 && new Date().getHours() <= 14) ? "صباح الخير" : "مساء الخير"
let imsg = msg;
let observer = new MutationObserver(msgSend);
let fms = document.getElementsByClassName("username bcolor23");
let list = document.createElement("ol");
let button = document.createElement("button");
let button0 = document.createElement("button");
let style = document.createElement("style");
let msgList = document.getElementsByClassName("ulist_name gprivate")
let males = new Set();
let females = new Set();
let namesSource = document.createElement("ol");
let framo = document.createElement("iframe");
let parentDiv = document.createElement("div");

let fmlgiturl = `https://raw.githubusercontent.com/Alisodsin/alisodsin.github.io/main/femaleNames.json`;
let mlsgiturl = 'https://raw.githubusercontent.com/Alisodsin/alisodsin.github.io/main/males.json';
framo.src = "https://99f2537e-72f2-4e73-9898-cc9c6e98f207-00-aoo727xiohcd.janeway.replit.dev/"; 
parentDiv.id = "conto";

//functions
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function msgSend() {

    let lastF = fms[fms.length - 1],
        name = lastF.innerText,
        id = lastF.getAttribute("data-uid");

    if (!messagedFs.has(id) && lastF.parentElement.innerText.includes("زائر") && checkForFemaleName(name, females)) {
        messagedFs.add(id);
        fetch("system/private_process.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: `target=${id}&content=${msg}&token=${utk}`
        }).then(_ => {
            console.log(name);
            let li = document.createElement("li");
            li.innerText = name;
            list.appendChild(li);
            li.scrollIntoView();
        }
        )
    }
    else if (!messagedMs.has(id) && !messagedFs.has(id) && lastF.parentElement.innerText.includes("زائر")) {
        messagedMs.add(id)
        let li = document.createElement("li")
        li.innerText = name;
        namesSource.append(li)
        li.scrollIntoView()
    }
}
async function privo() {
    oh();
    getPrivate();
    await sleep(2000);
    msgList[0].click();
}
//instructions 
observer.isConnectd = false;
observerr.isConnectd = false;
//

list.style.backgroundColor = "black"
list.style.color = "white";
// list.style.width = "70%";
// list.style.height = "15vh";
list.style.position = "relative";
// list.style.top = "10%";
// list.style.left = "0";
// list.style.fontSize = "small";
list.style.zIndex = "1";
list.style.overflow = "auto"
list.style.whiteSpace = "pre";
// list.style.position = "absolute"
// list.dir = "ltr";
list.id = "lista";
// list.style.direction = "ltr"
//
// button.style.position = "fixed";
// button.style.top = "10%";
// button.style.right = "50%";
// button.style.zIndex = "1";
button.style.padding = "5px"
button.style.borderRadius = "20%"
button.id = "butto";
button.innerText = "N"
button.style.position="absolute"
button.style.right="0"
button.style.top="0" 
button.style.padding= "5%"
// button0.style.position = "fixed";
// button0.style.top = "21.5%";
// button0.style.right = "50%";
// button0.style.zIndex = "1";
// button0.style.padding = "5px"
button0.style.borderRadius = "20%"
button0.id = "sw";
button0.innerText = "G"
button0.style.position="absolute"
button0.style.right="0"
button0.style.bottom="0%" 
button0.style.background = "green"
button0.style.padding= "5%"

//
namesSource.style.backgroundColor = "black"
namesSource.style.color = "white";
// namesSource.style.width = "70%";
// namesSource.style.height = "15vh";
// namesSource.style.position = "fixed";
// namesSource.style.top = "28%";
// namesSource.style.left = "0";
// namesSource.style.fontSize = "small";
// namesSource.style.zIndex = "1";
namesSource.style.overflow = "auto"
namesSource.style.whiteSpace = "pre";
// namesSource.dir = "ltr";
namesSource.id = "noto";
// namesSource.style.direction = "ltr"

// framo.style.width = "70%";
// framo.style.height = "30vh";
// framo.style.position = "fixed";
// framo.style.bottom = "15vh";
// framo.style.left = "0";
// framo.style.zIndex = "1";


button0.onclick = function () {
    if (this.innerText == "G") {
        msg = "تسمعى شخرتى وانا بنزلهم فى كسك يا منيوكتى؟"
        this.innerText = "B"
        this.style.backgroundColor = "red"
    }
    else {
        msg = imsg
        this.innerText = "G"
        this.style.backgroundColor = "green"

    }
}
style.textContent = `
::-webkit-scrollbar {
    width: 0px;
    height: 0px;
}
#conto { 
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 10%;
    width: 60vw;
    height: 75%;
    left: 0px;
    margin: 0px;
    direction:ltr;
    z-index: 1;

}
#conto > * {
    flex: 1;
    margin: 0;
    font-size: small;
}
*{
    scrollbar-width:none !important;
}
#lista > li {
    list-style: decimal;
    position : relative; 
}
#noto > li {
    list-style: decimal;
    position : relative; 

}
`
list.append(button, button0)
parentDiv.append(list, framo,namesSource);
elTarget.append(parentDiv);
document.head.append(style);
button.onclick = function () {
    if (observer.isConnectd && observerr.isConnectd) {
        observer.disconnect()
        observer.isConnectd = false
        observerr.disconnect()
        observerr.isConnectd = false
        this.style.backgroundColor = "red";
        this.innerText = "F"
    }
    else {
        observer.observe(elTarget, { childList: true, subtree: true, attributes: false, characterData: false });
        observer.isConnectd = true;
        observerr.observe(targetElement, { attributes: true });
        observerr.isConnectd = true;
        button.style.backgroundColor = "green"
        this.innerText = "N"

    }
}

function oh() {
    if (observer.isConnectd && observerr.isConnectd) {
        button.click();
    }
}
function no() {
    if (!(observer.isConnectd && observerr.isConnectd)) {
        button.click();
    }
}
$('.chat_head').on('click', function () {
    oh()
});
$('.fa.fa-times').on('click', function () {
    no()
});
function checkForFemaleName(str, set) {
    if (str.includes("|")) {
        return false
    }
    if (set.has(str.toLowerCase())) {
        return true
    }
    let words = str.split(/(\u00A0|_|\s)/)
    for (const word of words) {
        if (males.has(word.toLowerCase())) {
            return false;
        }
    }
    for (const word of words) {
        if (set.has(word.toLowerCase())) {
            return true;
        }
    }
    words = str.split(/[^\p{L}]/u);
    for (const word of words) {
        if (males.has(word.toLowerCase())) {
            return false;
        }
    }
    for (const word of words) {
        if (set.has(word.toLowerCase())) {
            return true;
        }
    }
    words = str.split(/(\b[\p{L}\p{M}]+\b|\u00A0|_|\s)/ug)
    for (const word of words) {
        if (set.has(word.toLowerCase())) {
            return true;
        }
    }
    words = str.split(/(?=[A-Z|\u00A0|_|\s])/);
    for (const word of words) {
        if (set.has(word.toLowerCase())) {
            return true;
        }
    }
    return false;
}
async function fetchJsons(url) {
    let x = await fetch(url);
    x = await x.text();
    return new Set(JSON.parse(decodeURIComponent(x)))
}
(async function () {
    females = await fetchJsons(fmlgiturl);
    males = await fetchJsons(mlsgiturl)
    observer.observe(elTarget, { childList: true, subtree: true, attributes: false, characterData: false });
    observer.isConnectd = true;
    observerr.observe(targetElement, { attributes: true });
    observerr.isConnectd = true;
    button.style.backgroundColor = "green";
    button.innerText = "N"

})();   