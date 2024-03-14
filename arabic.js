let elTarget = document.body.querySelector("#chat_logs_container"),
    messagedFs = new Set(),
    messagedMs = new Set(),
    resala = document.getElementsByClassName("i_btm fa fa-envelope")[0],
    targetElement = document.getElementById('notify_private'),
    observerr = new MutationObserver(privo),
    msg = (new Date().getHours() >= 2 && new Date().getHours() <= 14) ? "صباح الخير" : "مساء الخير",
    msg2 = "انا على 35 سنه من المنصوره, ممكن نتعرف",
    observer = new MutationObserver(async function () {
        let lastF = fms[fms.length - 1];
        console.log(lastF.innerText);
        if (lastF.parentElement.innerText.includes("زائر")) {
            let user = new User(lastF.innerText, lastF.getAttribute("data-uid"))
            users[user.name] = user;
            doit(user);
        }
    }),
    fms = document.getElementsByClassName("username bcolor23"),
    list = document.createElement("ol"),
    zozdiv = document.createElement("ol"),
    button = document.createElement("button"),
    button0 = document.createElement("button"),
    button1 = document.createElement("button"),
    button2 = document.createElement("button"),
    button3 = document.createElement("button"),
    style = document.createElement("style"),
    buttonsContainer = document.createElement("div"),
    males = new Set(),
    females = new Set(),
    gotmsg = new Set(),
    sentHimBefore = new Set(),
    namesSource = document.createElement("ol"),
    framo = document.createElement("iframe"),
    parentDiv = document.createElement("div"),
    zozo = new Set(),
    testFset = new Set(),
    privt = $("#private_box")[0],
    closo = document.getElementById("private_close"),
    users = {};

class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    get isFemale1() {
        return checkForFemaleName(this.name, females);
    }
    get isFemale2() {
        return checkForFemaleName(this.name, testFset);
    }
    get hasPast() {
        return sentHimBefore.has(this.id)
    }
    get isSessionRecordInFemales() {
        return messagedFs.has(this.id)
    }
    get isSessionRecordInMales() {
        return messagedMs.has(this.id)
    }
    get isZozed() {
        return zozo.has(this.id)
    }
    get gotMySecondMessage() {

        return gotmsg.has(this.id)

    }
    sessionRecordinFemales() {
        messagedFs.add(this.id)
    }
    sessionRecordinMales() {
        messagedMs.add(this.id)
    }
    zozit() {
        if (zozo.has(this.id)) {
            return "user is already zozed"
        }
        zozo.add(this.id)
    }
    makePast() {
        if (sentHimBefore.has(this.id)) {
            return "user has a past"
        }
        sentHimBefore.add(this.id)
        localStorage.sent = [...sentHimBefore].join();
        return "usert past made"
    }
    sendThisUerMySecondMessage() {
        return sendMsg(this.id, msg2).then(_ => {
            gotmsg.add(this.id)
            localStorage.msgd = [...gotmsg].join();
        })
    }
    deleteMyLi() {
        if (this.isSessionRecordInMales) {
            messagedMs.delete(this.id);
            document.querySelector(`[data_gid="${this.id}"]`).remove();
        }
    }
}
function sendMsg(id, msg) {
    return fetch("system/private_process.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: `target=${id}&content=${msg}&token=${utk}`
    })
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function doit(user) {
    if (!user.isSessionRecordInFemales && !user.isZozed && user.isFemale1) {
        user.sessionRecordinFemales();
        let li = document.createElement("li");
        if (user.hasPast) {
            li.style.color = "green"
        }
        else {
            await sendMsg(user.id, msg);
            user.makePast();
        }
        li.innerText = user.name;
        li.setAttribute("data_gid", user.id)
        li.onclick = function () {
            if (privt.style.display == "none") {
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
        list.appendChild(li);
        li.scrollIntoView();
    }
    else if (!user.isSessionRecordInMales && !user.isSessionRecordInFemales && !user.isZozed) {
        if (user.isFemale2) {
            user.zozit();
            let li = document.createElement("li")
            li.innerText = user.name;
            li.setAttribute("data_gid", user.id)
            li.onclick = function () {
                if (privt.style.display == "none") {
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
            li.style.color = user.hasPast ? "green" : "white";
            zozdiv.append(li);
            li.scrollIntoView();
        }
        else {
            user.sessionRecordinMales();
            let li = document.createElement("li")
            li.innerText = user.name;
            li.setAttribute("data_gid", user.id)
            namesSource.append(li)
            li.scrollIntoView()
        }
    }

}
async function privo() {
    $.post('system/box/private_notify.php', {
        token: utk,
    }, function (response) {
        let ele = (new DOMParser()).parseFromString(response, "text/html").body.querySelector(".ulist_container").children[0].children[1]
        let id = ele.getAttribute("data")
        let name = ele.getAttribute("value");
        openPrivate(id, name)
        showPrivateAd()
        privReload = 1
        lastPriv = 0
        chat_reload(true)
        if (!users[name]) {
            users[name] = new User(name, id);
        }
        if (!users[name].gotMySecondMessage) {
            users[name].sendThisUerMySecondMessage().then(_ => {
                users[name].makePast();
                let lio = document.querySelector(`[data_gid="${users[name].id}"]`)
                if (lio) {
                    let message = document.querySelector(".target_private").innerText
                    lio.innerHTML = `<bdi>${name}</bdi> ⏪ <bdi style="color:white">${message}</bdi>`
                    list.append(lio);
                }
                return sleep(3000)
            }
            ).then(_ => closo.click())
        }
    });
}
function instructions() {
    parentDiv.id = "conto"
    framo.src = "https://99f2537e-72f2-4e73-9898-cc9c6e98f207-00-aoo727xiohcd.janeway.replit.dev/";
    privt.style.display = "none"
    buttonsContainer.id = "buttonsContainer"
    list.id = "lista";
    zozdiv.id = "zoza";
    zozdiv.style.display = "none"
    button.id = "butto";
    button.innerText = "N"
    button0.id = "sw";
    button0.innerText = "G"
    button1.id = "sizec";
    button1.innerText = "S"
    namesSource.id = "noto";
    button2.id = "obs";
    button2.innerText = "O"
    button3.id = "past"
    button3.innerText = "clr"
    buttonsContainer.append(button, button0, button1, button2, button3);
    parentDiv.append(list, zozdiv, framo, namesSource);
    elTarget.append(buttonsContainer, parentDiv);
    style.textContent = `
li {
    width: fit-content;
    cursor: pointer;
}
#lista,#zoza { 
    background-color: black;
    color: white;
    position: relative;
    z-index: 1;
    overflow: auto;
    white-space: nowrap;
}
#zoza{
    background-color:rgb(83,28,28);
}
#butto,
#sw,
#sizec,#obs,#past{
    border-radius: 20%;
    background-color: green;
    width:18%;  
}
#noto {
    background-color: black;
    color: white;
    overflow: auto;
    white-space: nowrap;
}
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
    #zoza{
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
    width: 30vw;
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
    width: 30vw;
    left: 0px;
    margin: 0px;
    direction: ltr;
    z-index: 1;
    justify-content: space-between;
    height:4%;
}
@media screen and (max-width:500px){
    #conto {
        width:70%;
    }
    #buttonsContainer {
        width:70%;
    }
}
#conto > * {
    flex: 1;
    margin: 0;
    font-size: small;
}
*{
    scrollbar-width:none !important;
}
#lista> li {
    list-style: decimal;
}
#zoza >li{
    list-style: decimal;
} 
#noto > li {
    list-style: decimal;
}
`
    document.head.append(style);
}
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
        list.style.display = "none"
        zozdiv.style.display = "";
    }
    else {
        females = structuredClone(testFset)
        button.style.backgroundColor = "green"
        this.innerText = "N"
        list.style.display = ""
        zozdiv.style.display = "none";

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
button2.onclick = function () {
    let butstr = this.innerText;
    if (butstr.startsWith("O")) {
        this.innerText = "o"
        this.style.backgroundColor = "red"
        observer.disconnect()
    }
    else {
        this.innerText = "O";
        this.style.backgroundColor = "green";
        observer.observe(elTarget, { childList: true, subtree: true, attributes: false, characterData: false });
    }
}
button3.onclick = async function () {
    sentHimBefore.clear();
    localStorage.sent = "";
    gotmsg.clear();
    localStorage.msgd = "";
    this.innerText = "Done";
    this.style.backgroundColor = "red";
    await sleep(3000);
    this.innerText = "clr";
    this.style.backgroundColor = "green";
}
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
        let ozy = [...namesSource.children];
        ozy.forEach(e => {
            if (users[e.innerText].isFemale2) {
                users[e.innerText].deleteMyLi();
                doit(users[e.innerText]);
            }
        })
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
                sentHimBefore = new Set(localStorage.sent.split(","));
            }
            if (localStorage.msgd) {
                gotmsg = new Set(localStorage.msgd.split(","))
            }
            observer.observe(elTarget, { childList: true, subtree: true, attributes: false, characterData: false });
            observer.isConnected = true;
            observerr.observe(targetElement, { attributes: true });
        }
    }
});
instructions();    