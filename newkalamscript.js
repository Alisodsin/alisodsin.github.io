Object.keys(parent.fwindowlist).forEach((x) => {
    if (x.includes("_0x") || x.includes("mynickpre") || x.includes("AF") || x.includes("gFV") || x.includes("canvas") || x.includes("getClient")) {
        parent.fwindowlist[x] = _ => { return true }
    }
});
let _fmain = parent.fmain,
    buttonContainers = document.createElement("div"),
    _fwindowlist = parent.fwindowlist,
    style = document.createElement("style"),
    input,
    myNick,
    R,
    msgAfter,
    user = 'alisodsin',
    repo = 'alisodsin.github.io',
    path = 'femaleNames.json',
    shrr,
    users,
    stream = {},
    framo,
    hrdspc = "\u00A0",
    ters,
    oldLength,
    condition = false,
    num = false,
    zozo = new Set(),
    togC,
    kalamngySend,
    num1 = 0,
    buttons,
    rooms = ["#مصر", "#رومانسية"],
    message1 = (new Date().getHours() >= 2 && new Date().getHours() <= 14) ? "صباح الخير" : "مساء الخير",
    message2 = "انا مهندس على 35 سنه من المنصوره",
    message3 = "ممكن نتعرف؟",
    message4 = "ممكن لو سمحتى تردى عليا ؟",
    regex = /onedaymothersaidgetupearlytogotoschool/,
    personsGotMyMsg1 = new Set(),
    femalesNames = new Set(),
    testSet,
    toggles = new Set(),
    roomName,
    addd,
    firstli,
    ol = document.createElement("ol"),
    ol1 = document.createElement("ol"),
    joiningPplClass,
    joinPerson,
    join,
    listTarget,
    patterns = [["^k$", /^Kalamngy_\d{4}$/], ["noPtrn", /onedaymothersaidgetupearlytogotoschool/], ["*[<=5]", /^.{1,6}$/], ["ar<=5", /^[\u0621-\u064A\xA0\x5F\0-9]{1,7}$/], ["*digts", /\d+$/], ["ar*", /^[\u0621-\u064A\xA0\x5F\0-9]+$/], ["*", /^.+$/], ["k|short", /(^.{1,5}$|^Kalamngy_)/i]],
    mainTarget,
    mainObserver = new MutationObserver(_ => {
        if (joiningPplClass.length >= 1) {
            joinPerson = [...joiningPplClass].at(-1);
            join = joinPerson?.innerText
            if ((!stream[join] && joinPerson.nextSibling.data.includes("Joine")) && (join in users) && (regex.test(join) || checkForFemaleName(join, testSet))) {
                doIt(join);
            }
        }
    }),
    listObserver = new MutationObserver((e) => {
        let addedNodes = e[0].addedNodes;
        let listPersonName = addedNodes[0]?.firstElementChild?.lastElementChild?.previousElementSibling?.innerText;
        if (typeof listPersonName == "string" && listPersonName != "x" && listPersonName != roomName && !personsGotMyMsg1.has(listPersonName) && !(/Guest/.test(listPersonName) || checkForFemaleName(listPersonName, femalesNames))) {
            kalamngySend(listPersonName, `/winclose ${listPersonName}`);
        }
        else {
            personsGotMyMsg1.forEach(name => {
                let regex = new RegExp(name + "\n!", "g");
                if (listTarget.innerText.match(regex)) {
                    stream[name].excuterObj.next();
                }
            })
        }
    }),
    objConfig = {
        childList: true,
        subtree: true,
        attributes: false,
        characterData: false
    },
    audio = new Audio("https://alisodsin.github.io/Short.mp3"),
    bll = new Audio("https://soundbible.com/mp3/A-Tone-His_Self-1266414414.mp3");
//functions
function runCode() {
    check = setInterval(_ => {
        if (Boolean(Object?.keys?.(_fwindowlist?.Witems)?.[1])) {
            roomName = Object.keys(_fwindowlist.Witems)[1];
            framo = document.createElement("iframe");
            framo.src = "https://alisodsin.github.io/addNames.html";
            framo.name = "child"
            mainTarget = _fmain.document.querySelector(".main-span");
            myNick = _fwindowlist.mynickname;
            joiningPplClass = _fmain.document.getElementsByClassName("main-nickg");
            listTarget = _fwindowlist.document.getElementById("windowlist");
            input = parent.fform.document.querySelector("#say");
            listObserver.observe(listTarget, objConfig);
            fform.onkeydown = keysHandelr;
            ters = fform.document.getElementsByTagName("img")[0]
            firstli = _fwindowlist.document.getElementsByClassName("wlist-chooser")
            _fmain.nickmenu = function () { return false }
            _fmain.document.getElementById("menu").remove();
            _fmain.document.getElementById("mainplusbtn").click();
            parent.fuserlist.document.querySelectorAll('.menu').forEach(menuElement => {
                menuElement.style.display = 'none';
            });
            parent.fuserlist.document.addEventListener('click', function (event) {
                if (event.target.matches('td')) {
                    let txt = event.target.innerText;
                    if (!personsGotMyMsg1.has(txt)) {
                        doIt(txt);
                    }
                }
            });
            ters.onclick = function name() {
                togleMessage();
            }
            parent.fform.addEventListener("contextmenu", function (e) {
                e.stopPropagation()
            }, true);
            _fmain.addEventListener("contextmenu", function (e) {
                e.stopPropagation()
            }, true);
            _fmain.samehh = _ => true;
            setInterval(function () {
                kalamngySend(roomName, `/clear ${roomName}`)
            }, 60000);
            buttonsCreator();
            input.placeholder = oldLength
            buttonContainers.style.position = "fixed";
            buttonContainers.style.display = "flex";
            buttonContainers.style.flexDirection = "column";
            buttonContainers.style.top = "0%";
            buttonContainers.style.width = "fit-content";
            buttonContainers.style.height = "100%";
            buttonContainers.style.justifyContent = "space-around";
            buttonContainers.style.flexWrap = "wrap";
            buttonContainers.id = "buttonContainers"

            style.textContent = `
            @media screen and (max-height:500px){
                #buttonContainers{
                    display:none !important;
                }
                #ol{
                    display:none !important;
                }
                #ol1{
                    display:none !important;
                }
            }
            .w3-display-middle{
                position:absolute;
                top:10%;
                left:80%;
                transform:translate(-50%,-50%);
                width:30vw;
                height:20vh;
            }
               `;
            ol.id = "ol";
            ol.style.background = "black";
            ol.className = "w3-display-middle";
            ol.style.borderRadius = "20%";
            ol.style.color = "white"
            ol.style.paddingTop = "5%"
            ol.style.overflow = "auto"
            ol.onclick = function name() {
                ol.style.display = "none";
                ol1.style.display = "block";
            }
            ol1.id = "ol1";
            ol1.style.background = "black";
            ol1.className = "w3-display-middle";
            ol1.style.color = "white"
            ol1.style.paddingTop = "5%"
            ol1.style.overflow = "auto"
            ol1.style.display = "none";
            ol1.onclick = function name() {
                ol1.style.display = "none";
                ol.style.display = "block";
            };
            framo.id = "biginput";
            framo.frameborder = "0";
            framo.className = "w3-display-middle";
            framo.style.border = "none";
            framo.style.display = "none";
            framo.style.top = "25%"
            framo.style.width = "45vw"
            framo.style.height = "60vw";
            framo.style.transform = "translate(-58%, -24%)";

            _fmain.document.body.append(buttonContainers, ol, ol1, framo);
            _fmain.document.head.append(style)
            _fmain.document.querySelector(".main-closepic").remove();
            _fmain.document.querySelector(".userlist-hiddeni").remove();
            _fmain.document.querySelector("#hidderbtn").style.display = "none";
            _fmain.document.querySelector("#mainplusbtn").remove();

            _fmain.addEventListener('message', function (event) {
                if (event.origin === 'https://alisodsin.github.io') {
                    let name = event.data.replace(/\s.{1,}/g, "");
                    if (event.data.includes("added")) {
                        femalesNames.addd(name);
                    }
                    else {
                        femalesNames.delete(name);
                        console.log(`${name} deleted from the set`);
                    }
                }
            });

            buttons = [...buttonContainers.children];
            addd = function (value) {
                if (this.has(value)) {
                    input.placeholder = `${value} is already in the set`;
                    console.log(`${value} is already in the set`);
                }
                else {
                    this.add(value)
                    input.placeholder = `${value} added to the set`;
                    console.log(`${value} added to the set`);
                    _fmain.document.getElementById("kokos").innerText = this.size - oldLength;
                }
            }
            Object.defineProperty(femalesNames, "addd", {
                value: addd,
                writable: false,
                configurable: false
            });
            R = _fwindowlist.document.getElementsByName("R")[0].value;
            kalamngySend = function (target, msg) {
                return fetch("https://www.kalamngychat.com/chat/client-perl.cgi", { method: "POST", headers: { "Content-type": "application/x-www-form-urlencoded" }, body: `item=say&cmd=say&say=${msg}&target=${target}&R=${R}&xmlhttp=1` });
            };

            (async () => {
                Object.keys(_fwindowlist.Witems[roomName].users).forEach(x => {
                    if (checkForFemaleName(x, femalesNames)) {
                        zozo.add(x);
                    }
                });
                await sleep(100);
                doIt(myNick);
                ol.click();
                mainObserver.observe(mainTarget, objConfig);
                setInterval(() => {
                    users = _fwindowlist?.Witems?.[roomName]?.users;
                    let behinedJoiner = _fwindowlist.Witems[rooms[0]]?.text?.filter(x => x?.includes("Joined"))?.at(-1)?.match(/<a.*>(.*)<\/a>/i)?.[1];
                    if (Boolean(users)) {
                        personsGotMyMsg1.forEach(name => {
                            if (!(name in users)) {
                                input.placeholder = `${name} quit`
                                block(name);
                            }
                        });
                        zozo.forEach(name => {
                            if (!(name in users)) {
                                zozo.delete(name);
                            }
                        });
                        if (num && _fwindowlist.currentwindow != roomName && behinedJoiner && !personsGotMyMsg1.has(behinedJoiner) && behinedJoiner in users && (regex.test(behinedJoiner) || checkForFemaleName(behinedJoiner, testSet))) {
                            doIt(behinedJoiner);
                        }
                    }
                }, 50);
                let prsntPplMsg = setInterval(_ => {
                    if (zozo.size < 1) {
                        clearInterval(prsntPplMsg);
                    }
                    else {
                        let name = [...zozo].at((Math.floor(Math.random() * zozo.size)));
                        doIt(name);
                    }

                }, 60000);
            })();
            clearInterval(check);
        }
    }, 100);
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function closeCurrentPerson() {

    if (_fwindowlist.currentwindow != roomName) {
        kalamngySend(_fwindowlist.currentwindow, `/winclose ${_fwindowlist.currentwindow}`)
    }
}
function changeMessage1() {
    message1 = prompt("Enter new message1", message1);
    message2 = prompt("Enter new message2", message2);
    message3 = prompt("Enter new message3", message3);
}
async function sentTwoMsgs() {
    if (_fwindowlist.currentwindow != roomName) {
        let personName = _fwindowlist.currentwindow;
        await kalamngySend(personName, "الو");
        kalamngySend(personName, "معايا؟");

    }
}
async function defineMySelf() {
    if (_fwindowlist.currentwindow != roomName) {
        let personName = _fwindowlist.currentwindow;
        await kalamngySend(personName, "انا مهندس على 35 سنه من المنصوره");
        kalamngySend(personName, "وانتى؟");
    }
}
async function restart() {
    await kalamngySend("Status", `/query Status`);
    await sleep(1000);
    _fwindowlist.reconnect();
}
async function sendMsgToMyself() {
    await kalamngySend(myNick, message1);
    await sleep(700)
    kalamngySend(myNick, `/winclose ${myNick}`);
}
function goToRoom() {
    kalamngySend(roomName, `/query ${roomName}`);
}

function block(x) {
    if (x != roomName && x != myNick && personsGotMyMsg1.has(x)) {
        if (x == _fwindowlist.currentwindow) {
            kalamngySend(x, `/winclose ${x}`)
        }
        personsGotMyMsg1.delete(x);
        _fmain.document.getElementById(stream?.[x]?.id1)?.remove();
        _fmain.document.getElementById(stream?.[x]?.id2)?.remove();
        clearTimeout(stream?.[x]?.timeout);
        delete stream[x]
    }
    else if ((x != roomName && x != myNick && !personsGotMyMsg1.has(x))) {
        kalamngySend(x, `/ignore ${x}`).then(_ => {
            kalamngySend(x, `/winclose ${x}`);
        })
    }
}

function closAll() {
    let sentme = Object.keys(parent.fwindowlist.Witems);
    for (let i = 0; i < sentme.length; i++) {
        if (/#|Status/i.test(sentme[i])) {
            continue
        }
        kalamngySend(sentme[i], `/winclose ${sentme[i]}`);
    }
}

function goToLogin() {
    open("https://alisodsin.github.io/kalamngy.html", "_self");
}

function efsl() {
    _fwindowlist.disconnected();
}

function togleMessage() {
    if (!toggles.has("dodend1")) {
        message1 = "انيكك صوت؟";
        message2 = "نتكلم جيتسى";
        message3 = "او تلجرام؟";
        message4 = "ما تردى عليا يا لبوتى"
        input.placeholder = `the bad message`;
        toggles.add("dodend1");
        msgAfter.click();
    }

    else if (!toggles.has("dodend2")) {
        message1 = (new Date().getHours() >= 2 && new Date().getHours() <= 14) ? "صباح الخير" : "مساء الخير";
        message2 = "تحبى نتعرف ";
        message3 = "بشكل محترم؟";
        message4 = "ارجو انك تردى عليا";
        input.placeholder = `good message2`;
        toggles.add("dodend2");
        msgAfter.click();
    }
    else {
        message1 = (new Date().getHours() >= 2 && new Date().getHours() <= 14) ? "صباح الخير" : "مساء الخير";
        message2 = "انا مهندس على 35 سنه من المنصوره";
        message3 = "ممكن نتعرف؟";
        message4 = "ممكن لو سمحتى تردى عليا ؟"
        input.placeholder = "good message1";
        toggles.delete("dodend1");
        toggles.delete("dodend2");
    }
}

function toggleButtons() {
    if (!toggles.has("ok2")) {
        for (let index = 0; index < buttons.length; index++) {
            if (buttons[index].innerText == "F13") {
                continue
            }
            buttons[index].style.display = "none";
        }
        toggles.add("ok2");
    }
    else {
        for (let index = 0; index < buttons.length; index++) {
            if (buttons[index].innerText == "F13") {
                continue
            }
            buttons[index].style.display = "inline";
        }
        toggles.delete("ok2")
    }
}
function toggleContainer() {

    if (ol.style.display == "block") {
        ol.style.display = "none";
        ol1.style.display = "block";
    }
    else if (ol1.style.display == "block") {
        ol1.style.display = "none";
        framo.style.display = "block";

    }
    else if (framo.style.display == "block") {
        framo.style.display = "none";
    }
    else {
        ol.style.display = "block"
    }
}
function buttonsCreator() {
    for (let index = 1; index <= 21; index++) {
        let button = document.createElement("button");
        button.innerText = `F${index}`;
        // button.style.width = "10%";
        switch (index) {
            case 1:
                button.style.background = "#4CAF50";
                button.style.color = "white";
                button.onclick = closeCurrentPerson;
                break;
            case 2:
                button.style.background = "#008CBA";
                button.style.color = "white";
                button.onclick = changeMessage1;
                break;
            case 3:
                button.style.background = "#00bcd4";
                button.onclick = sentTwoMsgs;
                break;
            case 4:
                button.style.background = "#673ab7";
                button.style.color = "white";
                button.onclick = defineMySelf;
                break;
            case 5:
                button.style.background = "#795548";
                button.style.color = "white";
                button.onclick = restart;
                break;
            case 6:
                button.style.background = "#8bc34a";
                button.onclick = sendMsgToMyself;
                break;
            case 7:
                button.style.background = "#e3516e";
                button.style.color = "#f7f3d7";
                button.onclick = goToRoom;
                break;
            case 8:
                button.style.background = "red";
                button.style.color = "white";
                button.onclick = _ => {
                    let str = _fwindowlist.currentwindow;
                    block(str);
                };
                break;
            case 9:
                button.style.background = "#6592cf";
                button.style.color = "#243d83";
                button.onclick = closAll;
                break;
            case 10:
                button.style.background = "#0b2429";
                button.style.color = "#f3ac3c";
                button.onclick = goToLogin;
                break;
            case 11:
                button.style.background = "#D65076";
                button.style.color = "white";
                button.onclick = efsl;
                break;
            case 12:
                button.style.background = "#009B77";
                button.style.color = "white";
                button.onclick = toggleContainer;
                togC = button;
                break;
            case 13:
                button.style.background = "#B565A7";
                button.style.color = "white";
                button.onclick = toggleButtons
                break;
            case 14:
                button.style.background = "#DD4124";
                button.style.color = "white";
                button.onclick = _ => _fwindowlist.hideuserlist();
                break;
            case 15:
                button.style.background = "#CD4124";
                button.style.color = "white";
                button.innerText = "Sv";
                button.onclick = sendBigData;
                break;
            case 16:
                button.style.background = "black";
                button.style.color = "white";
                button.innerText = "ptrn"
                button.onclick = changePattern;
                break;
            case 17:
                button.style.background = "black";
                button.style.color = "white";
                button.id = "togf";
                button.innerText = "on";
                button.onclick = toggleFemales;
                break;
            case 18:
                button.style.background = "black";
                button.style.color = "white";
                button.id = "kokos"
                button.innerText = "ad";
                button.onclick = addName;
                break;
            case 19:
                button.style.background = "black";
                button.style.color = "white";
                button.innerText = "cln"
                button.onclick = _ => {
                    femalesNames = removeMultiWordElements(femalesNames);
                    femalesNames.addd = addd
                };
                break;
            case 20:
                button.style.background = "black";
                button.style.color = "white";
                button.innerText = "sngl";
                button.onclick = function () {
                    if (!num) {
                        num = true;
                        this.innerText = "dbl"
                    }
                    else {
                        num = false;
                        this.innerText = "sngl"
                    }
                };
                break;
            case 21:
                button.style.background = "black";
                button.style.color = "white";
                button.innerText = "f";
                button.onclick = function () {
                    if (condition) {
                        condition = false;
                        this.innerText = "f";
                    }
                    else {
                        condition = true;
                        this.innerText = "t";
                    }

                };
                msgAfter = button;
                break;
        }
        button.style.border = "none"
        button.style.borderRadius = "40%"
        buttonContainers.append(button);
    }
}
function keysHandelr(e) {
    if (e.key == "F1") {
        closeCurrentPerson();
        e.preventDefault();
    }
    else if (e.key == "F2") {
        changeMessage1();
        e.preventDefault()
    }
    else if (e.key == "F3") {
        sentTwoMsgs();
        e.preventDefault()
    }
    else if (e.key == "F4") {
        defineMySelf();
        e.preventDefault()
    }
    else if (e.key == "F5") {
        restart();
        e.preventDefault();
    }
    else if (e.key == "F6") {
        sendMsgToMyself();
        e.preventDefault();
    }
    else if (e.key == "F7") {
        goToRoom();
        e.preventDefault();
    }
    else if (e.key == "F8") {
        block();
        e.preventDefault();
    }
    else if (e.key == "F9") {
        closAll();
        e.preventDefault();
    }
    else if (e.key == "F10") {
        goToLogin();
        e.preventDefault()
    }
    else if (e.key == "F11") {
        efsl();
        e.preventDefault()
    }
}
function changePattern() {
    if (num1 >= 8) {
        num1 = 0;
    }
    regex = patterns[num1][1];
    input.placeholder = patterns[num1][0];
    num1++;
}
_fmain.document.addEventListener('click', function (event) {
    if (event.target.matches('.main-nickg')) {
        let txt = event.target.innerText;
        if (!personsGotMyMsg1.has(txt)) {
            doIt(txt);
        }

    }
});
async function sendBigData() {
    let femalesNamesar = [...femalesNames];
    await fetch(`https://api.github.com/repos/${user}/${repo}/contents/${path}`, { method: 'PUT', headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${TOKEN}`, }, body: JSON.stringify({ message: 'Add new names', content: btoa(encodeURIComponent(JSON.stringify(femalesNamesar))), sha: shrr, }), });
    this.innerText = "done";

}
async function retrieveBigData() {
    let fetchedObject = await fetch(`https://api.github.com/repos/${user}/${repo}/contents/${path}`);
    let txt = await fetchedObject.text();
    let txtObject = JSON.parse(txt);
    shrr = txtObject.sha;
}
function checkForFemaleName(str, set) {
    if (str.includes("|")) {
        return false
    }
    if (set.has(str)) {
        return true
    }
    let words = str.split(/[^\p{L}]/u);
    for (const word of words) {
        if (set.has(word.toLowerCase())) {
            return true;
        }
    }
    words = str.split(/(\b[\p{L}\p{M}]+\b)/ug)
    for (const word of words) {
        if (set.has(word.toLowerCase())) {
            return true;
        }
    }
    if (/^[A-Z\W]+$/.test(str)) {
        return false
    }
    words = str.split(/(?=[A-Z])/);
    for (const word of words) {
        if (set.has(word.toLowerCase())) {
            return true;
        }
    }
    return false;
}
function toggleFemales() {
    if (!toggles.has("ok3")) {
        testSet = new Set();
        toggles.add("ok3");
        _fmain.document.getElementById("togf").innerText = "off"
    }
    else {
        testSet = femalesNames;
        toggles.delete("ok3")
        _fmain.document.getElementById("togf").innerText = "on"
    }
}
function addName() {
    let name = prompt();
    femalesNames.addd(name.toLowerCase());
}
function removeMultiWordElements(x) {
    const singleWordElements = new Set();
    for (const element of x) {
        if (!element.match(/[^\p{L}]/u)) {
            if (x.has(element)) {
                singleWordElements.add(element);
            }
        } else {
            let anyWordsExist = false;
            const words = element.split(/[^\p{L}]/u);
            for (const word of words) {
                if (x.has(word)) {
                    anyWordsExist = true;
                    break;
                }
            }
            if (!anyWordsExist) {
                singleWordElements.add(element);
            }
        }
    }
    return singleWordElements;
}
function generateRandomString() {
    var chars = "abcdefghijklmnopqrstuvwxyz";
    var randomString = "";
    for (var i = 0; i < 8; i++) {
        var randomIndex = Math.floor(Math.random() * chars.length);
        randomString += chars[randomIndex];
    }
    return randomString;
}

async function phpNames() {
    let fetched = await fetch(`https://php.alisaber1.repl.co`);
    let arr = await fetched.json();
    femalesNames = new Set(arr)
    femalesNames.delete(null);
    femalesNames.delete(undefined);
    femalesNames.delete("");
    femalesNames.addd = addd;
    testSet = femalesNames;
    oldLength = femalesNames.size;
    runCode();
}
async function* stramMsg(name) {
    await kalamngySend(name, message1);
    let li1 = document.createElement("li");
    li1.innerText = name;
    li1.style.cursor = "pointer";
    li1.style.width = "fit-content";
    try {
        li1.id = stream[name].id1
    } catch (error) {
        console.log(`error in id of  name ${name} and will be fixed instantely`);
        stream[name] = { timeout: (condition) ? setTimeout(() => { stream[name].excuterObj.next(true); }, 60000) : "", id1: generateRandomString(), id2: generateRandomString(), excuterObj: stramMsg(name) }
        li1.id = stream[name].id1
    }
    li1.style.color = (femalesNames.has(name)) ? "green" : "#FFA500";
    li1.onclick = function (event) {
        kalamngySend(name, `/query ${name}`)
        event.stopPropagation();

    }
    if (zozo.has(name)) {
        li1.style.color = "violet";
        zozo.delete(name)
    }
    ol1.append(li1)
    li1.scrollIntoView();
    await kalamngySend(name, `/winclose ${name}`)
    let noreply = yield 1
    if (noreply) {
        await kalamngySend(name, message4);
        let li = document.createElement("li");
        li.innerText = name;
        li.style.cursor = "pointer";
        li.style.width = "fit-content";
        li.id = stream[name].id2
        li.style.color = "red";
        li.onclick = function (event) {
            (async () => {
                await kalamngySend(name, `/query ${name}`);
                await kalamngySend(name, "الو");
                await kalamngySend(name, "مشغوله");
                kalamngySend(name, `/winclose ${name}`)
            })();
            event.stopPropagation();
        }
        ol.append(li);
        li.scrollIntoView();
        await sleep(200);
        kalamngySend(name, `/winclose ${name}`)
    }
    else {
        clearTimeout(stream[name].timeout);
        await kalamngySend(name, `/query ${name}`);
        audio.play();
        await kalamngySend(name, message2);
        await kalamngySend(name, message3);
        let str = _fmain.document.querySelector("#text")?.childNodes[0]?.childNodes[4]?.innerText;
        let li = _fmain.document.getElementById(stream[name].id1);
        li.innerText = "";
        li.innerHTML = `<bdi>${name}</bdi>${hrdspc} ➡ ${hrdspc}<bdi style="color:white">${str}</bdi>`;
        li.style.whiteSpace = "pre";
        li.onclick = function (event) {
            kalamngySend(name, `/query ${name}`);
            event.stopPropagation();
        }
        ol1.append(li);
        li.scrollIntoView();
        let li1 = document.createElement("li");
        li1.innerText = name;
        li1.style.cursor = "pointer";
        li1.style.width = "fit-content";
        li1.id = stream[name].id2
        li1.style.color = "white";
        li1.onclick = function (event) {
            (async () => {
                await kalamngySend(name, `/query ${name}`);
                await kalamngySend(name, "الو")
                await kalamngySend(name, "مشغوله")
                kalamngySend(name, `/winclose ${name}`)
            })();
            event.stopPropagation();
        }
        ol.append(li1);
        li1.scrollIntoView();
        await sleep(200);
        kalamngySend(name, `/winclose ${name}`)
    }
    yield 2
    if (noreply) {
        await kalamngySend(name, `/query ${name}`);
        await kalamngySend(name, message2);
        await kalamngySend(name, message3);
        audio.play();
        let str = _fmain.document.querySelector("#text")?.childNodes[0]?.childNodes[4]?.innerText;
        let li = _fmain.document.getElementById(stream[name].id1);
        li.innerText = "";
        li.innerHTML = `<bdi>${name}</bdi>${hrdspc} ➡ ${hrdspc}<bdi style="color:white">${str}</bdi>`;
        li.style.whiteSpace = "pre";
        li.onclick = function (event) {
            kalamngySend(name, `/query ${name}`);
            event.stopPropagation();
        }
        ol1.append(li);
        li.scrollIntoView();
        await sleep(200);
        kalamngySend(name, `/winclose ${name}`)
        noreply = false
        yield 3
    }
    while (true) {
        bll.play();
        kalamngySend(name, `/query ${name}`);
        yield 4
    }
}
function doIt(name) {
    stream[name] = { timeout: (condition) ? setTimeout(() => { stream[name].excuterObj.next(true); }, 60000) : "", id1: generateRandomString(), id2: generateRandomString(), excuterObj: stramMsg(name) }
    stream[name].excuterObj.next();
    personsGotMyMsg1.add(name);
}
phpNames();
retrieveBigData();