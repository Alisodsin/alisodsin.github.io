// global variables  
let check = setInterval(_ => {
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
    _fmain = parent.fmain ,
    buttonContainers = document.createElement("div"),
    _fwindowlist = parent.fwindowlist,
    style = document.createElement("style"),
    input,
    arr = [],
    myNick,
    R,
    msgAfter,
    user = 'alisodsin',
    repo = 'alisodsin.github.io',
    path = 'femaleNames.json',
    shrr,
    normalize_text,
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
    message4 = "ممكن لو سمحتى تردى يا",
    regex = /onedaymothersaidgetupearlytogotoschool/,
    personsGotMyMsg1 = new Set(),
    femalesNames = new Set(),
    testSet,
    toggles = new Set(),
    malesNames = new Set(),
    roomName,
    aipattern,
    addd,
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
        if (_fwindowlist.currentwindow != roomName && toggles.has("gpt")) {
            try {
                let rst = [...[..._fmain.document?.querySelector?.("#text")?.childNodes]?.at?.(-1)?.children]?.at?.(-2)?.innerText;
                let ptrn = stream[_fwindowlist.currentwindow].ptrn
                let fasla = " , ";
                if (rst && !aipattern.test([...[..._fmain.document?.querySelector?.("#text")?.childNodes]].at(-1).innerText) && !malesNames.has(rst + ptrn)) {
                    malesNames.add(rst + ptrn);
                    let overTxt;
                    if (stream[_fwindowlist.currentwindow].ok) {
                        if (isArabicMore(rst)) {
                            overTxt = `انا اسمى  ${ptrn}`;
                        }
                        else {
                            overTxt = `my name is ${ptrn}`

                        }
                        stream[_fwindowlist.currentwindow].ok = false
                    }
                    else {
                        overTxt = "";
                        fasla = ""
                    }
                    sendToOpenAI(overTxt + fasla + rst, _fwindowlist.currentwindow);
                }
            } catch (_) {
                return
            }
        }
        else if (_fwindowlist.currentwindow != roomName) {
            try {
                let rst = [...[..._fmain.document?.querySelector?.("#text")?.childNodes]?.at?.(-1)?.children]?.at?.(-2)?.innerText;
                if ([...[..._fmain.document?.querySelector?.("#text")?.childNodes]].at(-1).innerText.includes(myNick)) {
                    stream[_fwindowlist.currentwindow].conversation.push(`me:${rst}`);
                }
                else {
                    stream[_fwindowlist.currentwindow].conversation.push(`${_fwindowlist.currentwindow}:${rst}`);
                }

            } catch (_) {
                return
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

// functions 
function runCode() {
    let check = setInterval(_ => {
        if (Boolean(Object?.keys?.(_fwindowlist?.Witems)?.[1])) {
            roomName = Object.keys(_fwindowlist.Witems)[1];
            framo = document.createElement("iframe");
            framo.src = "https://alisodsin.github.io/addNames.html";
            framo.name = "child"
            mainTarget = _fmain.document.querySelector(".main-span");
            myNick = _fwindowlist.mynickname;
            aipattern = new RegExp(`-Kalamngy\\.com-|${myNick}|such`, "i");
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
                        input.placeholder = `${prop} exit`;
                    }
                    return Reflect.deleteProperty(target, prop)
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
        _fmain.document.getElementById(stream?.[x]?.id)?.remove();
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
        message1 = "ما تيجى انيكك يا";
        message2 = "نتكلم جيتسى";
        message3 = "او تلجرام؟";
        message4 = "ما تردى عليا يا"
        input.placeholder = `the bad message`;
        toggles.add("dodend1");
        msgAfter.click();
    }

    else if (!toggles.has("dodend2")) {
        message1 = (new Date().getHours() >= 2 && new Date().getHours() <= 14) ? "صباح الخير" : "مساء الخير";
        message2 = "تحبى نتعرف ";
        message3 = "بشكل محترم؟";
        message4 = "ارجو انك تردى عليا يا";
        input.placeholder = `good message2`;
        toggles.add("dodend2");
        msgAfter.click();
    }
    else {
        message1 = (new Date().getHours() >= 2 && new Date().getHours() <= 14) ? "صباح الخير" : "مساء الخير";
        message2 = "انا مهندس على 35 سنه من المنصوره";
        message3 = "ممكن نتعرف؟";
        message4 = "ممكن لو سمحتى تردى عليا يا"
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
    for (let index = 1; index <= 22; index++) {
        let button = document.createElement("button");
        button.innerText = `F${index}`;
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
                button.innerText = "updt"
                button.onclick = _ => {
                    phpNames();
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
            case 22:
                button.style.background = "black";
                button.style.color = "white";
                button.innerText = "gptof";
                button.onclick = function () {
                    if (!toggles.has("gpt")) {
                        toggles.add("gpt")
                        this.innerText = "gpton"
                    }
                    else {
                        toggles.delete("gpt");
                        this.innerText = "gptof"
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
    let femalesNamesar = [...femalesNames];
    await fetch(`https://api.github.com/repos/${user}/${repo}/contents/${path}`, { method: 'PUT', headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${TOKEN}`, }, body: JSON.stringify({ message: 'Add new names', content: btoa(encodeURIComponent(JSON.stringify(femalesNamesar))), sha: shrr, }), });
    this.innerText = "done";

}
async function retrieveBigData() {
    let fetchedObject = await fetch(`https://api.github.com/repos/${user}/${repo}/contents/${path}`);
    let txt = await fetchedObject.text();
    let txtObject = JSON.parse(txt);
    shrr = txtObject.sha;
    let json = decodeURIComponent(atob(txtObject.content));
    femalesNames = new Set(JSON.parse(json));
    femalesNames.delete(null);
    femalesNames.delete(undefined);
    femalesNames.delete("");
    testSet = femalesNames;
    oldLength = femalesNames.size
    runCode();

}
function checkForFemaleName(str, set) {
    if (str.includes("|") || /gamal/i.test(str) ) {
        return false
    }
    if (set.has(str)) {
        return str
    }
    let words = str.split(/[^\p{L}]/u);
    for (const word of words) {
        if (set.has(word.toLowerCase())) {
            return word;
        }
    }
    words = str.split(/(\b[\p{L}\p{M}]+\b)/ug)
    for (const word of words) {
        if (set.has(word.toLowerCase())) {
            return word;
        }
    }
    if (/^[A-Z\W]+$/.test(str)) {
        return false
    }
    words = str.split(/(?=[A-Z])/);
    for (const word of words) {
        if (set.has(word.toLowerCase())) {
            return word;
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
}
async function* stramMsg(name) {
    if (stream[name]) {
        await stream[name].firstGreeting;
        let li1 = document.createElement("li");
        li1.innerText = name;
        li1.style.cursor = "pointer";
        li1.style.width = "fit-content";
        li1.id = stream[name].id
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
        await stream[name].sendIfBusy;
        kalamngySend(name, `/winclose ${name}`)
    }
    else {
        clearTimeout(stream[name].timeout);
        await kalamngySend(name, `/query ${name}`);
        audio.play();
        if (!toggles.has("gpt")) {
            await kalamngySend(name, message2);
            await kalamngySend(name, message3);
        }
        let str = _fmain.document.querySelector("#text")?.childNodes[0]?.childNodes[4]?.innerText;
        let li = _fmain.document.getElementById(stream[name].id);
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
        if (!toggles.has("gpt")) {
            kalamngySend(name, `/winclose ${name}`);
        }
    }
    yield 2
    if (noreply) {
        await kalamngySend(name, `/query ${name}`);
        await kalamngySend(name, message2);
        await kalamngySend(name, message3);
        audio.play();
        let str = _fmain.document.querySelector("#text")?.childNodes[0]?.childNodes[4]?.innerText;
        let li = _fmain.document.getElementById(stream[name].id);
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
function isArabicMore(str) {
    let arabicCount = 0;
    let englishCount = 0;

    for (let i = 0; i < str.length; i++) {
        if (/[\u0600-\u06FF]/.test(str[i])) {
            arabicCount++;
        }
        else if (/[\u0000-\u007F]/.test(str[i])) {
            englishCount++;
        }
    }
    return arabicCount > englishCount;
}
class Person {
    id = generateRandomString();
    arr = [];
    ok = true;
    conversation = [];
    constructor(name) {
        this.name = name;
        this.excuterObj = stramMsg(name);
        this.timeout = (condition) ? setTimeout(() => { stream[name].excuterObj.next(true); }, 60000) : "";
        this.ptrn = checkForFemaleName(name, femalesNames) || name;
    }
    get firstGreeting() {
        if (isArabicMore(this.ptrn)) {
            this.conversation.push(`me:${message1} ${this.ptrn}`)
            return kalamngySend(this.name, `${message1} ${this.ptrn}`);
        }
        else {
            this.conversation.push(`me:${message1}`);
            this.conversation.push(`me:${this.ptrn}`);
            return kalamngySend(this.name, `${message1}`).then(_ => kalamngySend(this.name, this.ptrn));
        }
    }
    get sendIfBusy() {
        if (isArabicMore(this.ptrn)) {
            return kalamngySend(this.name, `${message4} ${this.ptrn}`);
        }
        else {
            return kalamngySend(this.name, `momken trody ya ${this.ptrn}`);
        }
    }
}
function doIt(name) {
    stream[name] = new Person(name);
    stream[name].excuterObj.next();
    personsGotMyMsg1.add(name);
}
function sendNameToServer(name) {
    fetch('https://maleNames.alisaber1.repl.co', {
        method: 'POST',
        body: new URLSearchParams({
            name: name
        })
    }).then(response => response.json()).then(_ => {
        let li = document.createElement("li");
        li.innerText = name
        ol2.append(li);
        li.scrollIntoView();
    }).catch(error => { input.placeholder = error.message });
}
async function getMalesNames() {
    let fetched = await fetch(`https://maleNames.alisaber1.repl.co`);
    let arr = await fetched.json();
    malesNames = new Set(arr)
    malesNames.delete(null);
    malesNames.delete(undefined);
    malesNames.delete("");
}
async function sendToOpenAI(txt, nick) {
    let myobj = { role: "user", "content": txt };
    stream[nick].arr.push(myobj);
    fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${mxin}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: stream[nick].arr
        })
    }).then(s => s.json()).then(
        data => {
            if (data?.choices?.[0]?.message) {
                stream[nick].arr.push(data.choices[0].message);
                let response = normalize_text(data.choices[0].message.content.trim().replace(/\n+/g, "."));
                kalamngySend(nick, response);
            }
            else {
                kalamngySend(nick, "استنى معلش");
                sendToOpenAI(txt, nick);
            }
        }
    )
}
normalize_text = function (text) {
    let string = text.replace(new RegExp(String.fromCharCode(1617, 124, 1614, 124, 1611, 124, 1615, 124, 1612, 124, 1616, 124, 1613, 124, 1618), "g"), "");
    return string
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
retrieveBigData();  