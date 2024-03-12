let elTarget = document.body.querySelector("#chat_logs_container");
let messagedFs = new Set();
let messagedMs = new Set();
let resala = document.getElementsByClassName("i_btm fa fa-envelope")[0];
let targetElement = document.getElementById('notify_private');
let observerr = new MutationObserver(privo);
let msg = (new Date().getHours() >= 2 && new Date().getHours() <= 14) ? "صباح الخير" : "مساء الخير"
let msg2 = "انا على 35 سنه من المنصوره, ممكن نتعرف"

let observer = new MutationObserver(doit);
let fms = document.getElementsByClassName("username bcolor23");
let list = document.createElement("ol");
let button = document.createElement("button");
let button0 = document.createElement("button");
let button1 = document.createElement("button");
let style = document.createElement("style");
let buttonsContainer = document.createElement("div");
let msgList = document.getElementsByClassName("ulist_name gprivate")
let males = new Set();
let females = new Set();
let gotmsg = new Set();
let sentHimBefore = new Set();
let namesSource = document.createElement("ol");
let framo = document.createElement("iframe");
let parentDiv = document.createElement("div");
let zozo = new Map();
let testFset = new Set();
let privt = $("#private_box")[0];
let closo = document.getElementById("private_close")
framo.src = "https://99f2537e-72f2-4e73-9898-cc9c6e98f207-00-aoo727xiohcd.janeway.replit.dev/";
parentDiv.id = "conto";
let users = {};


class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    get hasPast() {
        return sentHimBefore.has(this.id)
    }
    makePast() {
        if (sentHimBefore.has(this.id)) {
            return "user has a past"
        }
        sentHimBefore.add(this.id)
        localStorage.sent = [...sentHimBefore].join();
        return "usert past made"
    }
    get isSessionRecordInFemales() {
        return messagedFs.has(this.id)
    }
    get isSessionRecordInMales() {
        return messagedMs.has(this.id)
    }
    get IsFemale1() {
        return checkForFemaleName(this.name, females);
    }
    get IsFemale2() {
        return checkForFemaleName(this.name, testFset);
    }
    sessionRecordinFemales() {
        messagedFs.add(this.id)
    }
    sessionRecordinMales() {
        messagedMs.add(this.id)
    }
    get isZozed() {
        return zozo.has(this.name)
    }
    zozit() {
        if (zozo.has(this.name)) {
            return "user is already zozed"
        }
        zozo.set(this.name, this.id)
    }
}
function sendMsg(idd, msgg) {
    return fetch("system/private_process.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: `target=${idd}&content=${msgg}&token=${utk}`
    })
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function doit() {
    let lastF = fms[fms.length - 1]
    let user = new User(lastF.innerText, lastF.getAttribute("data-uid"))
    users[user.name] = user;
    if (!user.isSessionRecordInFemales && lastF.parentElement.innerText.includes("زائر") && user.IsFemale1) {
        user.sessionRecordinFemales();
        let li = document.createElement("li");
        if (user.hasPast) {
            li.style.color = "green"
        }
        else {
            await sendMsg(user.id, msg);
            user.makePast()
        }
        console.log(user.name);
        li.innerText = user.name;
        li.style.width = "fit-content"
        li.onclick = user.openP
        li.setAttribute("data_gid", user.id)
        li.onclick = function () {
            if (privt.style.display == "none") {
                oh();
                openPrivate(user.id, user.name)
                showPrivateAd()
                privReload = 1
                lastPriv = 0
                chat_reload(true);
            }
            else {
                if (document.querySelector(".bellips").innerText == this.innerText) {
                    closo.click();
                }
                else {
                    closo.click();
                    sleep(500).then(_ => { this.click() })
                }
            }
        }
        li.style.width = "fit-content"
        li.style.cursor = "pointer"
        list.appendChild(li);
        li.scrollIntoView();
    }
    else if (!user.isSessionRecordInMales && !user.isSessionRecordInFemales && !user.isZozed && lastF.parentElement.innerText.includes("زائر")) {
        if (user.IsFemale2) {
            user.zozit();
            console.log(zozo);
        }
        else {
            user.sessionRecordinMales();
            let li = document.createElement("li")
            li.innerText = user.name;
            li.style.width = "fit-content"
            namesSource.append(li)
            li.scrollIntoView()
        }
    }
}
async function privo() {
    if (privt.style.display == "none") {
        oh();
        $.post('system/box/private_notify.php', {
            token: utk,
        }, function (response) {
            let ele = (new DOMParser()).parseFromString(response, "text/html").body.querySelector(".ulist_container").children[0].children[1]
            let idd = ele.getAttribute("data")
            openPrivate(idd, ele.getAttribute("value"))
            showPrivateAd()
            privReload = 1
            lastPriv = 0
            chat_reload(true)
            if (!gotmsg.has(idd)) {
                gotmsg.add(idd)
                sendMsg(idd, msg2).then(_ => {
                    let name = document.querySelector(".bellips").innerText;
                    if (users[name]) {
                        let lio = document.querySelector(`[data_gid="${users[name].id}"]`)
                        let message = document.querySelector(".target_private").innerText
                        lio.innerHTML = `<bdi>${name}</bdi> ⏪ <bdi style="color:white">${message}</bdi>`
                        list.append(lio);
                    }
                    return sleep(3000)
                }).then(_ => closo.click())
            }
        });
    }

}
closo.onclick = _ => {
    no();
}
privt.style.display = "none"
buttonsContainer.id = "buttonsContainer"

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
button.style.padding = "4%"
button.style.backgroundColor = "green";

button0.style.borderRadius = "20%"
button0.id = "sw";
button0.innerText = "G"
button0.style.background = "green"
button0.style.padding = "4%"



button1.style.borderRadius = "20%"
button1.id = "sizec";
button1.innerText = "S"
button1.style.background = "green"
button1.style.padding = "4%"


namesSource.style.backgroundColor = "black"
namesSource.style.color = "white";
namesSource.style.overflow = "auto"
namesSource.style.whiteSpace = "pre";
namesSource.id = "noto";

button0.onclick = function () {


    if (this.innerText == "G") {
        msg = "تتناكى صوت على جاتسىى,تاليجرام او جاستوك؟"
        msg2 = "ياﻻ على اخرى مولع"
        this.innerText = "B"
        this.style.backgroundColor = "red"
    }
    else {
        msg = (new Date().getHours() >= 2 && new Date().getHours() <= 14) ? "صباح الخير" : "مساء الخير"
        msg2 = "انا على 35 سنه من المنصوره, ممكن نتعرف؟"
        this.innerText = "G"
        this.style.backgroundColor = "green"

    }
}
button.onclick = function () {

    if (females.size) {
        females.clear()
        this.style.backgroundColor = "red";
        this.innerText = "F"
    }
    else {
        females = structuredClone(testFset)
        button.style.backgroundColor = "green"
        this.innerText = "N"

    }
}
button1.onclick = function () {

    if (this.innerText == "S") {

        parentDiv.style.display = "none"
        this.innerText = "H"
        this.style.backgroundColor = "red"
    }
    else {
        parentDiv.style.display = "flex"
        this.innerText = "S"
        this.style.backgroundColor = "green"
    }

}
style.textContent = `
::-webkit-scrollbar {
    width: 0px;
    height: 0px;
}
@media screen and (max-height:500px){
    #buttonsContainer{
        display:none !important;
    }
    #lista{
        display:none !important;
    }
    #noto{
        display:none !important;
    }
    #conto{
        height:70% !important; 
    } 
}
#conto { 
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 10%;
    width: 80vw;
    height:77%;
    left: 0px;
    margin: 0px;
    direction:ltr;
    z-index: 1;
    line-height:22px; 

}
#buttonsContainer {
    position: fixed;
    display: flex;
    top: 6%;
    width: 40vw;
    left: 0px;
    margin: 0px;
    direction: ltr;
    z-index: 1;
    justify-content:space-evenly;
    height:4%;
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
buttonsContainer.append(button, button0, button1)
parentDiv.append(list, framo, namesSource);
elTarget.append(buttonsContainer, parentDiv);
document.head.append(style);



function oh() {
    if (females.size) {
        button.click();

    }

}
function no() {
    if (!(females.size)) {
        button.click();
    }
}
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
    if (str.includes("ة")) {
        let stro = str.replaceAll("ة", "ة ")
        words = stro.split(/\s/);
        for (const word of words) {
            if (set.has(word.toLowerCase())) {
                return true;
            }
        }
    }
    if (str.includes("ء")) {
        let stro = str.replaceAll("ء", "ء ")
        words = stro.split(/\s/);
        for (const word of words) {
            if (set.has(word.toLowerCase())) {
                return true;
            }
        }
    }
    if (str.includes("د")) {
        let stro = str.replaceAll("د", "د ")
        words = stro.split(/\s/);
        for (const word of words) {
            if (set.has(word.toLowerCase())) {
                return true;
            }
        }
    }
    return false;
}
window.addEventListener('message', function (event) {
    let data = event.data;
    if (/inserted females/g.test(data[0])) {
        if (females.size) {
            females.add(data[1])
        }
        testFset.add(data[1])
    }
    else if (/deleted from females/g.test(data[0])) {
        females.delete(data[1])
        testFset.delete(data[1])
    }
    else if (/inserted males/g.test(data[0])) {
        males.add(data[1])
    }

    else if (/deleted from males/g.test(data[0])) {
        males.delete(data[1])
    }
    if (males.size == 0) {
        if (data[0] == "females") {
            females = data[1];
            testFset = structuredClone(data[1])
        }
        else if (data[0] == "males") {
            males = data[1];
            if (localStorage.sent) {
                sentHimBefore = new Set(localStorage.sent.split(","))
            }



            observer.observe(elTarget, { childList: true, subtree: true, attributes: false, characterData: false });
            observerr.observe(targetElement, { attributes: true });
        }
    }
    else {
        console.log("no way");
    }
});   