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
    num = 0,
    num1 = 0,
    blockObj = new Map(),
    buttons,
    message1 = (new Date().getHours() >= 2 && new Date().getHours() <= 14) ? "صباح الخير" : "مساء الخير",
    message2 = "انا مهندس على 35 سنه من المنصوره",
    message3 = "ممكن نتعرف؟",
    regex = /(^.{1,6}$|^Kalamngy_\d{4}$)/i,
    personsGotMyMsg1 = new Set(),
    personsGotMyMsg2 = new Set(),
    roomName,
    firstli,
    ol = document.createElement("ol"),
    joiningPplClass,
    userList,
    joinPerson,
    join,
    listTarget,
    patterns = [["*[<=5]", /^.{1,6}$/], ["ar<=5", /^[\u0621-\u064A\xA0\x5F\0-9]{1,7}$/], ["*digts", /\d+$/], ["ar*", /^[\u0621-\u064A\xA0\x5F\0-9]+$/], ["*", /^.+$/], ["k|short", /(^.{1,5}$|^Kalamngy_)/i], ["^k$", /^Kalamngy_\d{4}$/]],
    mainTarget = _fmain.document.querySelector(".main-span"),
    mainObserver = new MutationObserver(_ => {
        joinPerson = [...joiningPplClass].at(-1)
        join = joinPerson?.innerText
        if (!personsGotMyMsg1.has(join) && regex.test(join) && joinPerson.nextSibling.data.includes("Joine")) {
            _fwindowlist.sendcmd_real("say", message1, join);
            _fwindowlist.sendcmd(`/winclose ${join}`);
            personsGotMyMsg1.add(join);
            // console.log(join);
        }
    }),
    listObserver = new MutationObserver((e) => {
        let addedNodes = e[0].addedNodes;
        let listPersonName = addedNodes[0]?.firstElementChild?.lastElementChild?.previousElementSibling?.innerText;
        if (typeof listPersonName == "string" && listPersonName != roomName && !personsGotMyMsg1.has(listPersonName) && !listPersonName.includes("Guest")) {
            _fwindowlist.sendcmd(`/winclose ${listPersonName}`);
        }
        else {
            personsGotMyMsg1.forEach(name => {
                let regex = new RegExp(name + "\n!", "g")
                if (listTarget.innerText.match(regex)) {
                    audio.play();
                    _fwindowlist.sendcmd(`/query ${name}`);
                    if (!personsGotMyMsg2.has(name)) {
                        let li = document.createElement("li");
                        li.innerText = name
                        li.id = `a${num}`;
                        li.style.cursor = "pointer";
                        li.style.width = "fit-content";
                        blockObj.set(name, `a${num}`);
                        ol.append(li);
                        li.onclick = _ => {
                            _fwindowlist.sendcmd(`/query ${name}`);
                            _fwindowlist.sendcmd_real("say", "الو", name);
                            _fwindowlist.sendcmd_real("say", "مشغوله", name);
                            setTimeout(_ => {
                                _fwindowlist.sendcmd_real("say", `/winclose ${name}`)
                            }, 2000)

                        }
                        _fwindowlist.sendcmd_real("say", message2, name);
                        setTimeout(() => {
                            _fwindowlist.sendcmd_real("say", message3, name);
                        }, 1000);
                        num++;
                        personsGotMyMsg2.add(name);
                    }
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
    bll = new Audio("https://www.soundjay.com/phone/cell-phone-1-nr0.mp3"),
    check = setInterval(_ => {
        if (Boolean(Object.keys(_fwindowlist.Witems)[1])) {
            roomName = Object.keys(_fwindowlist.Witems)[1];
            myNick = _fwindowlist.mynickname;
            joiningPplClass = _fmain.document.getElementsByClassName("main-nickg");
            listTarget = _fwindowlist.document.getElementById("windowlist");
            input = parent.fform.document.querySelector("#say");
            input.dir = "rtl";
            listObserver.observe(listTarget, objConfig);
            mainObserver.observe(mainTarget, objConfig);
            fform.onkeydown = keysHandelr;
            firstli = _fwindowlist.document.getElementsByClassName("wlist-chooser")
            personsGotMyMsg1.add(myNick)
            _fmain.document.getElementById("menu").remove();
            _fmain.document.getElementById("mainplusbtn").click();
            parent.fform.addEventListener("contextmenu", function (e) {
                e.stopPropagation()
            }, true);
            _fmain.addEventListener("contextmenu", function (e) {
                e.stopPropagation()
            }, true);
            _fmain.samehh = _ => true;
            setInterval(function () {
                parent.fwindowlist.sendcmd(`/clear ${roomName}`)
            }, 60000);
            buttonsCreator();
            buttonContainers.style.position = "fixed";
            buttonContainers.style.display = "flex";
            buttonContainers.style.flexDirection = "column";
            buttonContainers.style.top = "0%";
            buttonContainers.style.right = "0%";
            buttonContainers.style.width = "10vh";
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
            }
            .w3-display-middle{
                position:absolute;
                top:50%;
                left:50%;
                transform:translate(-50%,-50%);
            }
               `;
            ol.id = "ol";
            ol.style.width = "40vw";
            ol.style.height = "50vh";
            ol.style.background = "black";
            ol.className = "w3-display-middle";
            ol.style.borderRadius = "20%";
            ol.style.color = "white"
            ol.style.paddingTop = "5%"
            ol.style.overflow = "auto"
            _fmain.document.body.append(buttonContainers, ol);
            _fmain.document.head.append(style)
            _fmain.document.querySelector(".main-closepic").remove();
            _fmain.document.querySelector(".userlist-hiddeni").remove();
            _fmain.document.querySelector("#hidderbtn").style.display = "none";
            _fmain.document.querySelector("#mainplusbtn").remove();
            buttons = [...buttonContainers.children];
            clearInterval(check);
            console.log("done");
        }
    }, 100);
function closeCurrentPerson() {
    if (_fwindowlist.currentwindow != roomName) {
        _fwindowlist.sendcmd(`/winclose ${_fwindowlist.currentwindow}`);
    }
}
function changeMessage1() {
    message1 = prompt("Enter new message1", message1);
    message2 = prompt("Enter new message2", message2);
    message3 = prompt("Enter new message3", message3);
}
function sentTwoMsgs() {
    if (_fwindowlist.currentwindow != roomName) {
        let personName = _fwindowlist.currentwindow;
        _fwindowlist.sendcmd_real("say", "الو", personName);
        _fwindowlist.sendcmd_real("say", "معايا؟", personName);
    }
}
function defineMySelf() {
    if (_fwindowlist.currentwindow != roomName) {
        let personName = _fwindowlist.currentwindow;
        _fwindowlist.sendcmd_real("say", "انا على 37 سنه من المنصوره ", personName);
        _fwindowlist.sendcmd_real("say", "وانتى؟", personName);
    }
}
function restart() {
    _fwindowlist.reconnect();
    setTimeout(_ => {
        firstli[0].click();
    }, 3000)
}

function sendMsgToMyself() {
    _fwindowlist.sendcmd_real("say", message1, myNick);
    setTimeout(_ => {
        _fwindowlist.sendcmd_real("say", `/winclose ${myNick}`)
    }, 2000)
}

function goToRoom() {
    _fwindowlist.sendcmd(`/query ${roomName}`);
}

function block() {
    let personName = _fwindowlist.currentwindow
    if (personName != roomName && personName != myNick) {
        _fwindowlist.sendcmd_real("say", `/winclose ${personName}`)
        personsGotMyMsg1.delete(personName);
        personsGotMyMsg2.delete(personName);
        _fmain.document.getElementById(blockObj.get(personName)).remove();
        blockObj.delete(personName);
    }
}

function closAll() {
    let sentme = Object.keys(parent.fwindowlist.Witems);
    for (let i = 0; i < sentme.length; i++) {
        if (sentme[i] == Object.keys(parent.fwindowlist.Witems)[1] || sentme[i] == Object.keys(parent.fwindowlist.Witems)[0]) {
            continue
        }
        _fwindowlist.sendcmd_real("say", `/winclose ${sentme[i]}`)
    }
}

function goToLogin() {
    open("https://alisodsin.github.io/kalamngy.html", "_self")
}

function efsl() {
    _fwindowlist.disconnected();
}

function togleMessage() {
    if (message1.includes("خير")) {
        message1 = "تسمعى شخرتى وانا بفشخك نيك؟";
        message2 = "يالا؟";
        message3 = ";63";
        alert(`the bad message`);
    }
    else {
        message1 = (new Date().getHours() >= 2 && new Date().getHours() <= 14) ? "صباح الخير" : "مساء الخير";
        message2 = "انا مهندس على 35 سنه من المنصوره";
        message3 = "ممكن نتعرف؟";
        alert("the good message");
    }
}

function toggleButtons() {
    if (!personsGotMyMsg1.has("ok2")) {
        for (let index = 0; index < buttons.length; index++) {
            if (buttons[index].innerText == "F13") {
                continue
            }
            buttons[index].style.display = "none";
        }
        personsGotMyMsg1.add("ok2");
    }
    else {
        for (let index = 0; index < buttons.length; index++) {
            if (buttons[index].innerText == "F13") {
                continue
            }
            buttons[index].style.display = "inline";
        }
        personsGotMyMsg1.delete("ok2")
    }
}
function toggleContainer() {
    if (!personsGotMyMsg1.has("ok1")) {
        ol.style.display = "none";
        personsGotMyMsg1.add("ok1")
    }
    else {
        ol.style.display = "block";
        personsGotMyMsg1.delete("ok1")
    }
}
function buttonsCreator() {
    for (let index = 1; index <= 16; index++) {
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
                button.onclick = block;
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
                button.onclick = _ => parent.location.reload();
                break;
            case 16:
                button.style.background = "black";
                button.style.color = "white";
                button.onclick = changePattern;
                break;
        }
        button.style.border = "none"
        button.style.padding = "7px"
        button.style.fontWeight = "bold"
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
    else if (e.key == "ArrowDown") {
        togleMessage();
        e.preventDefault()
    }
}

function changePattern() {
    if (num1 >= 7) {
        num1 = 0;
    }
    regex = patterns[num1][1];
    input.placeholder = patterns[num1][0];
    num1++;
}