// global variables  
let check = setInterval(_ => {
    console.log("wait");
    if (parent?.fwindowlist) {
        Object.keys(parent.fwindowlist).forEach((x) => {
            if (/(_0x|mynickpre|AF|gFV|canvas|getClient)/.test(x)) {
                parent.fwindowlist[x] = _ => { return true }
                console.log(`${x} killed`);
            }
        });
        clearInterval(check);
    }
}, 50),
    _fmain = parent.fmain,
    buttonContainers = document.createElement("div"),
    _fwindowlist = parent.fwindowlist,
    style = document.createElement("style"),
    input,
    myNick,
    R,
    messages = new Set(),
    notWanted = new Set(),
    msgAfter,
    randomizeMessage = false,
    shrr1,
    fmlurl = "https://tuundun.x10.mx/femaleNames.json",
    notwantedurl = "https://tuundun.x10.mx/notwanted.json",
    messagesurl = "https://tuundun.x10.mx/messages.json",
    fmlgiturl = `https://api.github.com/repos/alisodsin/alisodsin.github.io/contents/femaleNames.json`,
    notwantedgiturl = `https://api.github.com/repos/alisodsin/alisodsin.github.io/contents/males.json`,
    msgsgiturl = `https://api.github.com/repos/alisodsin/alisodsin.github.io/contents/messages.json`,
    shrr2,
    shrr3,
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
    message2 = "جاسر 33 من المنصوره",
    message3 = "ممكن اتعرف لو مفيش مانع؟",
    message4 = "ممكن لو سمحتى تردى عليا ؟",
    regex = /onedaymothersaidgetupearlytogotoschool/,
    personsGotMyMsg1 = new Set(),
    femalesNames = new Set(),
    testSet = new Set(),
    toggles = new Set(),
    malesNames = new Set(),
    roomName,
    containersDiv = document.createElement("div"),
    ol1 = document.createElement("ol"),
    ol2 = document.createElement("ol"),
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
            else if (!malesNames.has(join) && !personsGotMyMsg1.has(join) && !/^Kalamngy_\d{0,}$|Guest/ig.test(join) && (join in users) && _fwindowlist.currentwindow == roomName) {
                let li = document.createElement("li");
                li.innerText = join
                ol2.append(li);
                li.scrollIntoView();
                malesNames.add(join);
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

// global  functions

function runCode() {
    let check = setInterval(_ => {
        if (Boolean(Object?.keys?.(_fwindowlist?.Witems)?.[1])) {
            roomName = Object.keys(_fwindowlist.Witems)[1];
            framo = document.createElement("iframe");
            framo.src = "https://tuundun.x10.mx/add.html";
            framo.name = "child"
            mainTarget = _fmain.document.querySelector(".main-span");
            myNick = _fwindowlist.mynickname;
            joiningPplClass = _fmain.document.getElementsByClassName("main-nickg");
            listTarget = _fwindowlist.document.getElementById("windowlist");
            input = parent.fform.document.querySelector("#say");
            listObserver.observe(listTarget, objConfig);
            fform.onkeydown = keysHandelr;
            ters = fform.document.getElementsByTagName("img")[0]
            _fmain.nickmenu = function () { return false }
            _fmain.document.getElementById("menu").remove();
            _fmain.document.getElementById("mainplusbtn").click();
            users = _fwindowlist?.Witems?.[roomName]?.users;
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
            containersDiv.style.position = "fixed";
            containersDiv.style.display = "flex";
            containersDiv.id = "father"
            containersDiv.style.flexDirection = "column";
            containersDiv.style.top = "0%";
            containersDiv.style.width = "30vw";
            containersDiv.style.height = "100%";
            containersDiv.style.right = "0"
            containersDiv.style.margin = "0"
            containersDiv.style.padding = "0"

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
                #ol2{
                    display:none !important;
                }
            }
           

            #father * {
                flex: 1;
                margin:0;
              }
              #father ol li {
                white-space: nowrap;
              }
            `
            ol1.id = "ol";
            ol1.style.background = "black";
            ol1.style.color = "green";
            ol1.style.overflow = "auto"
            framo.id = "biginput";
            ol2.id = "ol2";
            ol2.style.background = "black";
            ol2.style.color = "white"
            ol2.style.overflow = "auto"
            ol2.style.display = "block";
            containersDiv.append(ol1, framo, ol2)
            _fmain.document.body.append(buttonContainers, containersDiv);
            _fmain.document.head.append(style)
            _fmain.document.querySelector(".main-closepic").remove();
            _fmain.document.querySelector(".userlist-hiddeni").remove();
            _fmain.document.querySelector("#hidderbtn").style.display = "none";
            _fmain.document.querySelector("#mainplusbtn").remove();

            _fmain.addEventListener('message', function (event) {
                if (event.origin === 'https://tuundun.x10.mx') {
                    let name = event.data.replace(/\s:.{1,}/g, "");
                    if (event.data.includes("added to femaleNames")) {
                        femalesNames.add(name);
                        input.placeholder = `${name} added to females`
                    }
                    else if (event.data.includes("deleted from femaleNames")) {
                        femalesNames.delete(name);
                        input.placeholder = `${name} deleted from the females`;
                    }
                    else if (event.data.includes("added to notwanted names")) {
                        notWanted.add(name)
                        input.placeholder = `${name} added from the males`;
                    }
                    else if (event.data.includes("deleted from notwanted names")) {
                        notWanted.delete(name);
                        input.placeholder = `${name} deleted from the males`;

                    }
                    else if (event.data.includes("added to messages")) {
                        messages.add(name);
                        input.placeholder = `${name} added to messages`;

                    }
                    else {
                        messages.delete(name);
                        input.placeholder = `${name} deleted from messages`;
                    }
                }
            });

            buttons = [...buttonContainers.children];
            R = _fwindowlist.document.getElementsByName("R")[0].value;
            kalamngySend = function (target, msg) {
                return fetch("https://www.kalamngychat.com/chat/client-perl.cgi", { method: "POST", headers: { "Content-type": "application/x-www-form-urlencoded" }, body: `item=say&cmd=say&say=${msg}&target=${target}&R=${R}&xmlhttp=1` });
            };

            Object.keys(users).forEach(x => {
                if (checkForFemaleName(x, femalesNames)) {
                    zozo.add(x);
                }
            });
            doIt(myNick);
            mainObserver.observe(mainTarget, objConfig);
            _fwindowlist["Witems"][roomName]["users"] = new Proxy(_fwindowlist["Witems"][roomName]["users"], {
                deleteProperty(target, prop) {
                    if (zozo.has(prop)) {
                        zozo.delete(prop)
                    }
                    if (personsGotMyMsg1.has(prop)) {
                        block(prop)
                        input.placeholder = `${prop} quit`;
                    }
                    Reflect.deleteProperty(target, prop)
                }
            });
            setInterval(() => {
                let behinedJoiner = _fwindowlist.Witems[rooms[0]]?.text?.filter(x => x?.includes("Joined"))?.at(-1)?.match(/<a.*>(.*)<\/a>/i)?.[1];
                if (Boolean(users)) {
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
                    if (_fmain.document.getElementById("togf").innerText == "on") {
                        doIt(name);
                    }

                }

            }, 60000);
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
function getRandomMessage() {
    const randomIndex = Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / (Math.pow(2, 32) - 1) * messages.size);
    return [...messages][randomIndex];
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
    if (_fwindowlist.currentwindow != "Status") {
        await kalamngySend("Status", `/query Status`);
        await sleep(1000);
        _fwindowlist.reconnect();
        await sleep(1000);
        let check = setInterval(_ => {
            console.log("ali");
            if (_fwindowlist.currentwindow == roomName) {
                users = _fwindowlist?.Witems?.[roomName]?.users;
                _fwindowlist["Witems"][roomName]["users"] = new Proxy(_fwindowlist["Witems"][roomName]["users"], {
                    deleteProperty(target, prop) {
                        if (zozo.has(prop)) {
                            zozo.delete(prop)
                        }
                        if (personsGotMyMsg1.has(prop)) {
                            block(prop)
                            input.placeholder = `${prop} quit`;
                        }
                        return Reflect.deleteProperty(target, prop)
                    }
                });
                clearInterval(check);
            }
        }, 100);

    }
    else {
        _fwindowlist.reconnect();
    }
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
        message1 = "ما تيجى انيكك ؟";
        message2 = "عندك جيتسى او تلجرام او لاين";
        message3 = "؟";
        message4 = "ما تردى عليا يا لبوتى"
        input.placeholder = `the bad message`;
        toggles.add("dodend1");
        msgAfter.click();
    }
    else if (!toggles.has("dodend3")) {
        randomizeMessage = true;
        input.placeholder = `random messages`;
        toggles.add("dodend3");

    }

    else if (!toggles.has("dodend2")) {
        message1 = (new Date().getHours() >= 2 && new Date().getHours() <= 14) ? "صباح الخير" : "مساء الخير";
        message2 = "تحبى نتعرف ";
        message3 = "بشكل محترم؟";
        message4 = "ارجو انك تردى عليا";
        randomizeMessage = false;
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
        toggles.delete("dodend3");
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

    if (!toggles.has("show")) {
        containersDiv.style.display = "none"
        toggles.add("show");
    }
    else {
        containersDiv.style.display = "flex"
        toggles.delete("show");

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
            case 19:
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
            case 20:
                button.style.background = "black";
                button.style.color = "white";
                button.innerText = "thisMsg";
                button.onclick = function () {
                    input.placeholder = stream[_fwindowlist.currentwindow]?.msg
                    framo.contentWindow.postMessage(stream[_fwindowlist.currentwindow]?.msg, "*");

                }
                break;
            case 21:
                button.style.background = "black";
                button.style.color = "white";
                button.innerText = "S";
                button.onclick = function () {
                    if (this.innerText == "S") {
                        containersDiv.style.width = "70%";
                        this.innerText = "L"
                    }
                    else {
                        containersDiv.style.width = "30vw";
                        this.innerText = "S"
                    }
                }
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
    try {
        await fetch(fmlgiturl, { method: 'PUT', headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${TOKEN}`, }, body: JSON.stringify({ message: 'Add new names', content: btoa(encodeURIComponent(JSON.stringify([...femalesNames]))), sha: shrr1, }), });
        await fetch(notwantedgiturl, { method: 'PUT', headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${TOKEN}`, }, body: JSON.stringify({ message: 'Add new names', content: btoa(encodeURIComponent(JSON.stringify([...notWanted]))), sha: shrr2, }), });
        await fetch(msgsgiturl, { method: 'PUT', headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${TOKEN}`, }, body: JSON.stringify({ message: 'Add new names', content: btoa(encodeURIComponent(JSON.stringify([...messages]))), sha: shrr3, }), });
        this.innerText = "done";
    } catch (error) {
        console.log(error.message);
        this.innerText = "err happend"
    }
}
async function fetchJsons(url) {
    if (url.includes("github")) {
        let x = await fetch(url)
        x = await x.json()
        return [new Set(JSON.parse(decodeURIComponent(atob(x.content)))), x.sha]
    }
    let x = await fetch(url)
    x = await x.json()
    return new Set(x)
}
function checkForFemaleName(str, set) {
    let words = str.split(/[^\p{L}]/u);
    if (str.includes("|")) {
        return false
    }
    if (set.has(str)) {
        return true
    }
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
        ol2.style.display = "block"
        toggles.add("ok3");
        _fmain.document.getElementById("togf").innerText = "off"

    }
    else {
        testSet = femalesNames;
        ol2.style.display = "none"
        toggles.delete("ok3")
        _fmain.document.getElementById("togf").innerText = "on"
    }
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
async function retrieveBigData() {
    try {
        let med = await fetchJsons(fmlgiturl);
        femalesNames = med[0];
        shrr1 = med[1];
        med = await fetchJsons(notwantedgiturl);
        notWanted = med[0];
        shrr2 = med[1];
        med = await fetchJsons(msgsgiturl);
        messages = med[0];
        shrr3 = med[1];
        oldLength = femalesNames.size;
        testSet = femalesNames;
        runCode();

    } catch (err) {
        alert(`${err.name} : ${err.message}`)
        goToLogin();
    }
}
async function phpNames() {
    try {
        let med = await fetchJsons(fmlurl);
        femalesNames = med;
        med = await fetchJsons(notwantedurl);
        notWanted = med;
        med = await fetchJsons(messagesurl);
        messages = med;
        oldLength = femalesNames.size;
        testSet = femalesNames;
        med = await fetchJsons(fmlgiturl);
        shrr1 = med[1];
        med = await fetchJsons(notwantedgiturl);
        shrr2 = med[1];
        med = await fetchJsons(msgsgiturl);
        shrr3 = med[1];
        console.log("server works");
        runCode();
    } catch (err) {
        console.log(`your server doesn't work : ${err.message}`);
        retrieveBigData();
    }
}
async function* stramMsg(name) {
    await kalamngySend(name, message1);
    if (stream[name]) {
        let li1 = document.createElement("li");
        li1.innerText = name;
        framo.contentWindow.postMessage(stream[name].msg, "*");
        li1.style.cursor = "pointer";
        li1.style.width = "fit-content";
        li1.id = stream[name].id1
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

    }
    else {
        return false
    }
    let noreply = yield 1
    if (noreply) {
        await kalamngySend(name, message4);
        kalamngySend(name, `/winclose ${name}`)
    }
    else {
        clearTimeout(stream[name].timeout);
        await kalamngySend(name, `/query ${name}`);
        audio.play();
        await kalamngySend(name, message2);
        await kalamngySend(name, message3);
        let txt = _fwindowlist["Witems"][_fwindowlist.currentwindow].text[0];
        let tmpoDiv = document.createElement("div");
        tmpoDiv.innerHTML = txt
        let str = tmpoDiv.childNodes[0].childNodes[4].innerText
        let li = _fmain.document.getElementById(stream[name].id1);
        li.innerText = "";
        li.innerHTML = `<bdi>${name}</bdi> ➡ <bdi style="color:white">${str}</bdi> ⬅ <bdi style="color:white">${stream[name].msg}</bdi>`;
        li.style.whiteSpace = "pre";
        li.onclick = function (event) {
            kalamngySend(name, `/query ${name}`);
            event.stopPropagation();
        }
        ol1.append(li);
        li.scrollIntoView();
        await sleep(600);
        kalamngySend(name, `/winclose ${name}`)
    }
    yield 2
    if (noreply) {
        await kalamngySend(name, `/query ${name}`);
        await kalamngySend(name, message2);
        await kalamngySend(name, message3);
        audio.play();
        let txt = _fwindowlist["Witems"][_fwindowlist.currentwindow].text[0];
        let tmpoDiv = document.createElement("div");
        tmpoDiv.innerHTML = txt
        let str = tmpoDiv.childNodes[0].childNodes[4].innerText
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
    if (randomizeMessage) {
        message1 = getRandomMessage();
    }
    stream[name] = { msg: message1, timeout: (condition) ? setTimeout(() => { stream[name].excuterObj.next(true); }, 60000) : "", id1: generateRandomString(), id2: generateRandomString(), excuterObj: stramMsg(name) }
    stream[name].excuterObj.next();
    personsGotMyMsg1.add(name);
}
function downloadObj(obj, filename) {
    const json = JSON.stringify(obj);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${filename}.json`;
    a.click();
    URL.revokeObjectURL(url);
}
phpNames();