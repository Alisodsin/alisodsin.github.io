let elTarget = document.body.querySelector("#chat_logs_container"),
    messagedFs = new Set(),
    messagedMs = new Set(),
    kashida = "ـ",
    hardSpace = "\u00A0",
    input = document.querySelector("#main_input_box").children[0],
    resala = document.getElementsByClassName("i_btm fa fa-envelope")[0],
    targetElement = document.getElementById('notify_private'),
    observerr = new MutationObserver(privo),
    msg = (new Date().getHours() >= 2 && new Date().getHours() <= 14) ? "صباح الخير" : "مساء الخير",
    msg2 = "انا على 35 سنه من المنصوره, ممكن نتعرف",
    observer = new MutationObserver(async function () {
        let last10 = [...fms].reverse().filter(x => x.parentElement.innerText.includes("زائر")).slice(0, 10);
        let user = new User(last10[0]?.innerText, last10[0]?.getAttribute("data-uid"))
        if (females.size) {
            users[user.name] = user;
            await doit(user);
        }
        else {
            for (let i = 0; i < last10.length; i++) {
                if (!users[last10[i].innerText]) {
                    let user = new User(last10[i].innerText, last10[i].getAttribute("data-uid"));
                    users[user.name] = user;
                    await doit(user);
                }
            }
        }
    }),
    fms = document.getElementsByClassName("username bcolor23"),
    privateBox = document.querySelector("#private_box"),
    privateBoxObserver = new MutationObserver(e => {
        if (e[0].target.style.display == "block" && button.innerText == "N") {
            button.click();
        }
    }),
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
    zozo = new Map(),
    testFset = new Set(),
    privt = $("#private_box")[0],
    closo = document.getElementById("private_close"),
    users = {};

async function getAllUsers() {
    return fetch("/system/action.php", {
        method: 'POST',
        body: new URLSearchParams({
            token: utk,
            get_userlist: "1"
        })
    })
}
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
        return zozo.has(this.name)
    }
    get gotMySecondMessage() {

        return gotmsg.has(this.id)

    }
    li(name = this.name, id = this.id) {
        let li = document.createElement("li")
        li.innerText = name;
        li.setAttribute("data_gid", id)
        li.onclick = function () {
            if (privt.style.display == "none") {
                openPrivateBox(id, name)
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
        return li;
    }
    sessionRecordinFemales() {
        messagedFs.add(this.id)
    }
    sessionRecordinMales() {
        messagedMs.add(this.id)
    }
    zozit() {
        if (zozo.has(this.name)) {
            return "user is already zozed"
        }
        zozo.set(this.name, this.id)
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
    let li = user.li()
    if (!user.hasPast && females.size && !user.isSessionRecordInFemales && !user.isZozed && user.isFemale1) {
        user.sessionRecordinFemales();
        await sendMsg(user.id, msg);
        user.makePast();
        list.appendChild(li);
    }
    else if (!user.isSessionRecordInMales && !user.isSessionRecordInFemales && !user.isZozed) {
        if (user.isFemale2) {
            user.zozit();
            li.style.color = user.hasPast ? "green" : "white";
            zozdiv.append(li);
        }
        else {
            user.sessionRecordinMales();
            li.onclick = _ => true;
            namesSource.append(li)

        }
    }
    else if (user.hasPast && user.isZozed) {
        li.style.color = "yellow"
        females.size ? list.append(li) : zozdiv.append(li)
        zozo.delete(user.name)
    }
    li.scrollIntoView();
}
async function privo() {
    $.post('system/box/private_notify.php', {
        token: utk,
    }, function (response) {
        let ele = (new DOMParser()).parseFromString(response, "text/html").body.querySelector(".ulist_container").children[0].children[1]
        let id = ele.getAttribute("data")
            , name = ele.getAttribute("value");
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
                    lio.innerHTML = `<bdi>${name}</bdi>${hardSpace} ⏪ ${hardSpace}<bdi style="color:white">${message}</bdi>`
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
    framo.src = "http://localhost:3000/";
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
    width: 40vw;
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
    justify-content: space-between;
    height:4%;
}
@media screen and (max-width:500px){
    #conto {
        width:53%;
    }
    #buttonsContainer {
        width:53%;
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
    document.querySelector(".modal_top_element.close_modal")?.click();
}
button0.onclick = function () {
    if (this.innerText == "G") {
        msg = "تتناكى صوت بعنف؟";
        msg2 = "جيتيسي,تيليجرام او جاستوك عندك ايه؟";
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
    if (str?.includes("|")) {
        return false
    }
    if (str?.includes(kashida)) {
        str = str.replaceAll(kashida, "")
    }

    if (set.has(str?.toLowerCase())) {
        return true
    }
    let words = str?.split(/[^\p{L}\p{N}]+/ug).filter(x => x)
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
    words = str?.split(/[^\p{L}]/ug).filter(x => x);
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
    words = str?.split(/(\b[\p{L}\p{M}]+\b|\u00A0|_|\s)/ug).filter(x => x)
    for (const word of words) {
        if (set.has(word.toLowerCase())) {
            return true;
        }
    }
    words = str?.split(/(?=[A-Z|\u00A0|_|\s])/ug).filter(x => x);
    for (const word of words) {
        if (set.has(word.toLowerCase())) {
            return true;
        }
    }
    if (/ة[^\u0020\u00A0]/.test(str)) {
        let stro = str?.replaceAll("ة", "ة ")
        words = stro.split(/\p{Emoji}|[^\p{L}]/ug).filter(x => x)
        for (const word of words) {
            if (males.has(word.toLowerCase())) {
                return false;
            }
            if (set.has(word)) {
                return true
            }
        }
    }
    if (/ء[^\u0020\u00A0]/.test(str)) {
        let stro = str?.replaceAll("ء", "ء ")
        words = stro.split(/\p{Emoji}|[^\p{L}]/ug).filter(x => x);
        for (const word of words) {
            if (males.has(word.toLowerCase())) {
                return false;
            }
            if (set.has(word)) {
                return true
            }
        }
    }
    if (/د[^\u0020\u00A0]/.test(str)) {
        let stro = str?.replaceAll("د", "د ")
        words = stro.split(/\p{Emoji}|[^\p{L}]/ug).filter(x => x);
        for (const word of words) {
            if (males.has(word.toLowerCase())) {
                return false;
            }
            if (set.has(word)) {
                return true
            }
        }
    }
    if (/^(ال|أل)/.test(str)) {
        let stro = str.replaceAll(/^(ال|أل)/ug, "")
        words = stro.split(/\p{Emoji}|[^\p{L}]/ug).filter(x => x)
        for (const word of words) {
            if (males.has(word.toLowerCase())) {
                return false;
            }
            if (set.has(word)) {
                return true
            }
        }
    }
    return false;
}
window.addEventListener('message', async function (event) {
    let [value, context, set] = event.data;
    if (context == "insert" && set == "females") {
        testFset.add(value)
        if (females.size) {
            females.add(value)
        }
        let ozy = [...namesSource.children];
        ozy.forEach(e => {
            if (users[e.innerText].isFemale2) {
                users[e.innerText].deleteMyLi();
                doit(users[e.innerText]);
            }
        })
    }
    else if (context == "delete" && set == "females") {
        females.delete(value)
        testFset.delete(value)
    }
    else if (context == "insert" && set == "males") {
        males.add(value)
    }

    else if (context == "delete" && set == "males") {
        males.delete(value)
    }
    if (males.size == 0) {
        if (context == "fall" && set == "females") {
            females = new Set(value);
            testFset = structuredClone(females);
        }
        else if (context == "mall" && set == "males") {
            males = new Set(value);
            if (localStorage.sent) {
                sentHimBefore = new Set(localStorage.sent.split(","));
            }
            if (localStorage.msgd) {
                gotmsg = new Set(localStorage.msgd.split(","))
            }
            observer.observe(elTarget, { childList: true, subtree: true, attributes: false, characterData: false });
            observerr.observe(targetElement, { attributes: true });
            button.click();
            let females = await getAllUsers();
            females = await females.json();
            females = females["online"].filter(e => e[4] == "2" && e[9][1] == "زائر")
            for (let female of females) {
                if (!users[female[1]]) {
                    let user = new User(female[1], female[0]);
                    users[female[1]] = user;
                    await doit(user);
                }
            }
            let zozoMsg = setInterval(async () => {
                if (zozo.size) {
                    let entry = [...zozo].at((Math.floor(Math.random() * zozo.size)));
                    let user = new User(entry[0], entry[1]);
                    if (!user.hasPast) {
                        document.querySelector(`[data_gid="${user.id}"]`).remove();
                        users[user.name] = user
                        await sendMsg(user.id, msg);
                        user.makePast();
                        doit(user);
                    }
                }
                else {
                    clearInterval(zozoMsg);
                }

            }, 60000)

        }
    }
});
instructions();    