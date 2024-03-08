//variables
let elTarget = document.body.querySelector("#chat_logs_container");
let messagedFs = new Set();
let resala = document.getElementsByClassName("i_btm fa fa-envelope")[0];
let targetElement = document.getElementById('notify_private');
let observerr = new MutationObserver(privo);
let msg = "تتناكى صوت؟"
let observer = new MutationObserver(msgSend);
let fms = document.getElementsByClassName("username bcolor23");
let list = document.createElement("ol");
let notfications = document.createElement("ol");
let style = document.createElement("style");
let msgList = document.getElementsByClassName("ulist_name gprivate")
let males = new Set();
let females = new Set();

let fmlgiturl = `https://raw.githubusercontent.com/Alisodsin/alisodsin.github.io/main/femaleNames.json`;
let mlsgiturl = 'https://raw.githubusercontent.com/Alisodsin/alisodsin.github.io/main/males.json';
//functions
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function connect(prm) {
    if (prm == 1 && !observer.isConnectd) {
        observer.observe(elTarget, { childList: true, subtree: true, attributes: false, characterData: false });
        observer.isConnectd = true;
        // console.log("observer 1 connected");
        let li = document.createElement("li");
        li.innerText = "observer 1 connected";
        notfications.append(li);
        li.scrollIntoView();
    }
    else if (prm == 2 && !observerr.isConnectd) {
        observerr.observe(targetElement, { attributes: true });
        observerr.isConnectd = true;
        // console.log("observer 2 connected");
        let li = document.createElement("li");
        li.innerText = "observer 2 connected";
        notfications.append(li);
        li.scrollIntoView();
    }
    else if (prm) {
        // console.log(`observer ${prm} is already connected`);
        let li = document.createElement("li");
        li.innerText = `observer ${prm} is already connected`;
        notfications.append(li);
        li.scrollIntoView();
    }
}
function disConnect(prm) {
    if (prm == 1 && observer.isConnectd) {
        observer.disconnect()
        observer.isConnectd = false;
        // console.log("observer 1 disconnected");
        let li = document.createElement("li");
        li.innerText = "observer 1 disconnected";
        notfications.append(li);
        li.scrollIntoView();

    }
    else if (prm == 2 && observerr.isConnectd) {
        observerr.disconnect()
        observerr.isConnectd = false;
        // console.log("observer 2 disconnected");
        let li = document.createElement("li");
        li.innerText = "observer 2 disconnected";
        notfications.append(li);
        li.scrollIntoView();
    }
    else if (prm) {
        // console.log(`observer ${prm} is already disconnected`);
        let li = document.createElement("li");
        li.innerText = `observer ${prm} is already disconnected`;
        notfications.append(li);
        li.scrollIntoView();
    }
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
            // console.log(name);
            let li = document.createElement("li");
            li.innerText = name;
            list.appendChild(li);
            li.scrollIntoView();
        }
        )
    }
}
async function privo() {
    disConnect(1);
    disConnect(2);
    await sleep(2000);
    getPrivate();
    await sleep(2000);
    msgList[0].click();
}
//instructions
observer.isConnectd = false;
observerr.isConnectd = false;

list.style.backgroundColor = "black"
list.style.color = "white";
list.style.width = "50%";
list.style.height = "15vh";
list.style.position = "fixed";
list.style.top = "10%";
list.style.left = "0";
list.style.fontSize = "small";
list.style.zIndex = "1";
list.style.overflow = "auto"
list.style.whiteSpace = "pre";
list.dir = "ltr";
list.id = "lista";

notfications.style.backgroundColor = "black"
notfications.style.color = "white";
notfications.style.width = "50%";
notfications.style.height = "15vh";
notfications.style.position = "fixed";
notfications.style.top = "30%";
notfications.style.left = "0";
notfications.style.fontSize = "small";
notfications.style.zIndex = "1";
notfications.style.overflow = "auto"
notfications.style.whiteSpace = "pre";
notfications.dir = "ltr";
notfications.id = "noto";




style.textContent = `
#lista > li {
    list-style: decimal;
    position : relative;
    left :-17px; 
}
#noto > li {
    list-style: decimal;
    position : relative;
    left :-17px; 
}
`
elTarget.append(list, notfications);
document.head.append(style);
list.onclick = _ => {
    connect(1);
    connect(2);
}
notfications.onclick = _ => {
    disConnect(1);
    disConnect(2);
}
$('.fa.fa-times').on('click', function () {
    connect(1);
    connect(2);
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
        if (notWanted.has(word.toLowerCase())) {
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
        if (notWanted.has(word.toLowerCase())) {
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
    connect(1);
    connect(2);
})();   