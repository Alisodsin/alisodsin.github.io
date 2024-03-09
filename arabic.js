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
            li.style.width="fit-content"
            li.scrollIntoView();
        }
        )
    }
    else if (!messagedMs.has(id) && !messagedFs.has(id) && lastF.parentElement.innerText.includes("زائر")) {
        messagedMs.add(id)
        let li = document.createElement("li")
        li.innerText = name;
        li.style.width="fit-content"
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
observer.isConnectd = false;
observerr.isConnectd = false;

list.style.backgroundColor = "black"
list.style.color = "white";
list.style.position = "relative";
list.style.zIndex = "1";
list.style.overflow = "auto"
list.style.whiteSpace = "pre";
list.id = "lista";

let divo = document.createElement("div")

button.style.borderRadius = "20%"
button.id = "butto";
button.innerText = "N"
button.style.position = "fixed"
button.style.right = "35%"
button.style.top = "10%"
button.style.padding = "2%"

button0.style.borderRadius = "20%"
button0.id = "sw";
button0.innerText = "G"
button0.style.position = "fixed"
button0.style.right = "35%"
button0.style.bottom = "65%"
button0.style.background = "green"
button0.style.padding = "2%"


namesSource.style.backgroundColor = "black"
namesSource.style.color = "white";
namesSource.style.overflow = "auto"
namesSource.style.whiteSpace = "pre";
namesSource.id = "noto";

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
    width: 65vw;
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
list.append(button,button0)
parentDiv.append(list, framo, namesSource);
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