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
    user = 'alisodsin',
    repo = 'alisodsin.github.io',
    path = 'femaleNames.json',
    shrr,
    lastQuitPerson,
    hrdspc = "\u00A0",
    nick,
    messageThisPerson,
    ters,
    oldLength,
    condition = false,
    num = 0,
    zozo = [],
    togC,
    createLi,
    kalamngySend,
    num1 = 0,
    blockObj = new Map(),
    buttons,
    message1 = (new Date().getHours() >= 2 && new Date().getHours() <= 14) ? "صباح الخير" : "مساء الخير",
    message2 = "انا مهندس على 35 سنه من المنصوره",
    message3 = "ممكن نتعرف؟",
    message4 = "ممكن لو سمحتى تردى عليا ؟",
    regex = /onedaymothersaidgetupearlytogotoschool/,
    personsGotMyMsg1 = new Set(),
    personsGotMyMsg2 = new Set(),
    femalesNames = new Set(),
    likeMe = new Set(),
    likeMe1 = new Set(),
    testSet,
    roomName,
    addd,
    firstli,
    ol = document.createElement("ol"),
    ol1 = document.createElement("ol"),
    joiningPplClass,
    userList,
    joinPerson,
    join,
    listTarget,
    patterns = [["^k$", /^Kalamngy_\d{4}$/], ["noPtrn", /onedaymothersaidgetupearlytogotoschool/], ["*[<=5]", /^.{1,6}$/], ["ar<=5", /^[\u0621-\u064A\xA0\x5F\0-9]{1,7}$/], ["*digts", /\d+$/], ["ar*", /^[\u0621-\u064A\xA0\x5F\0-9]+$/], ["*", /^.+$/], ["k|short", /(^.{1,5}$|^Kalamngy_)/i]],
    mainTarget = _fmain.document.querySelector(".main-span"),
    mainObserver = new MutationObserver(_ => {
        let lastPerson = lastQuitPerson();
        if (joiningPplClass.length >= 1) {
            joinPerson = [...joiningPplClass].at(-1);
            join = joinPerson?.innerText
            if ((!personsGotMyMsg1.has(join) && joinPerson.nextSibling.data.includes("Joine")) && (join != lastPerson) && (regex.test(join) || checkForFemaleName(join, testSet))) {
                messageThisPerson(join);
                personsGotMyMsg1.add(join);
            }
        }
        if (personsGotMyMsg1.has(lastPerson)) {
            console.log(lastPerson)
            block(lastPerson);
        };
    }),
    listObserver = new MutationObserver((e) => {
        let addedNodes = e[0].addedNodes;
        let listPersonName = addedNodes[0]?.firstElementChild?.lastElementChild?.previousElementSibling?.innerText;
        if (typeof listPersonName == "string" && listPersonName != roomName && !personsGotMyMsg1.has(listPersonName) && !listPersonName.includes("Guest")) {
            kalamngySend(listPersonName, `/winclose ${listPersonName}`)

        }
        else {
            personsGotMyMsg1.forEach(name => {
                let regex = new RegExp(name + "\n!", "g")
                if (listTarget.innerText.match(regex)) {
                    if (likeMe.has(name)) {
                        kalamngySend(name, `/query ${name}`).then(_ => {
                            bll.play();
                            likeMe.delete(name)
                        })

                    }
                    else if (likeMe1.has(name)) {
                        kalamngySend(name, `/query ${name}`).then(_ => {
                            kalamngySend(name, message2).then(_ => {
                                audio.play();
                                kalamngySend(name, message3).then(
                                    _ => {
                                        likeMe.add(name);
                                        likeMe1.delete(name);
                                        let str = _fmain.document.querySelector("#text")?.childNodes[0]?.childNodes[4]?.innerText;
                                        let li = _fmain.document.getElementById(blockObj.get(name)[0]);
                                        li.innerText = "";
                                        li.innerHTML = `<bdi>${name}</bdi>${hrdspc} ➡ ${hrdspc}<bdi style="color:white">${str}</bdi>`;
                                        li.style.whiteSpace = "pre";
                                        li.onclick = function (event) {
                                            kalamngySend(name, `/query ${name}`)
                                            event.stopPropagation();
                                        }
                                        ol1.append(li);
                                        li.scrollIntoView();
                                        setTimeout(() => {
                                            kalamngySend(name, `/winclose ${name}`).then(
                                                _ => {
                                                    kalamngySend(roomName, `/query ${roomName}`);
                                                }
                                            )
                                        }, 1000);

                                    }
                                )
                            })

                        })

                    }
                    else {
                        kalamngySend(name, `/query ${name}`).then(_ => {
                            audio.play();
                        })
                    }
                    if (!personsGotMyMsg2.has(name)) {
                        personsGotMyMsg2.add(name);
                        createLi(name, false);
                        kalamngySend(name, message2).then(
                            _ => {
                                kalamngySend(name, message3).then(
                                    _ => {
                                        likeMe.add(name);
                                        let str = _fmain.document.querySelector("#text")?.childNodes[0]?.childNodes[4]?.innerText;
                                        let li = _fmain.document.getElementById(blockObj.get(name)[0]);
                                        li.innerText = "";
                                        li.innerHTML = `<bdi>${name}</bdi>${hrdspc} ➡ ${hrdspc}<bdi style="color:white">${str}</bdi>`;
                                        li.style.whiteSpace = "pre";
                                        li.onclick = function (event) {
                                            kalamngySend(name, `/query ${name}`);
                                            event.stopPropagation();
                                        }
                                        ol1.append(li);
                                        li.scrollIntoView();
                                        setTimeout(() => {
                                            kalamngySend(name, `/winclose ${name}`).then(
                                                _ => {
                                                    kalamngySend(roomName, `/query ${roomName}`);
                                                }
                                            )
                                        }, 1000);

                                    }
                                )
                            }
                        )
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
    bll = new Audio("https://soundbible.com/mp3/A-Tone-His_Self-1266414414.mp3"),
    check = setInterval(_ => {
        if (Boolean(Object.keys(_fwindowlist.Witems)[1])) {
            roomName = Object.keys(_fwindowlist.Witems)[1];
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
                    if (femalesNames.has(txt)) {
                        input.placeholder = `${txt} inSet`
                    }
                    else {
                        femalesNames.addd(txt.toLowerCase());
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
                #ol1{
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
            ol.onclick = function name() {
                ol.style.display = "none";
                ol1.style.display = "block";
            }
            ol1.id = "ol1";
            ol1.style.width = "40vw";
            ol1.style.height = "50vh";
            ol1.style.background = "black";
            ol1.className = "w3-display-middle";
            ol1.style.color = "white"
            ol1.style.paddingTop = "5%"
            ol1.style.overflow = "auto"
            ol1.style.display = "none";
            ol1.onclick = function name() {
                ol1.style.display = "none";
                ol.style.display = "block";
            }
            _fmain.document.body.append(buttonContainers, ol, ol1);
            _fmain.document.head.append(style)
            _fmain.document.querySelector(".main-closepic").remove();
            _fmain.document.querySelector(".userlist-hiddeni").remove();
            _fmain.document.querySelector("#hidderbtn").style.display = "none";
            _fmain.document.querySelector("#mainplusbtn").remove();
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
            lastQuitPerson = function () {
                let imgSrc = _fmain.document.getElementsByTagName("img");
                if (imgSrc && imgSrc.length > 0) {
                    let filteredImages = [...imgSrc].filter(img => img.src.includes("out"));
                    if (filteredImages.length > 0) {
                        let txt = filteredImages.at(-1).parentElement.parentElement.children[1].innerText.split(" ")[0]
                        return txt
                    }
                    else {
                        return false
                    }
                }
                else {
                    return false
                }
            };
            kalamngySend = function (target, msg) {
                return fetch("https://www.kalamngychat.com/chat/client-perl.cgi", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/x-www-form-urlencoded"
                    },
                    body: `item=say&cmd=say&say=${msg}&target=${target}&R=${_fwindowlist.document.getElementsByName("R")[0].value}&xmlhttp=1`
                });
            };
            function func1(s) {
                personsGotMyMsg1.add(s);
                personsGotMyMsg2.add(s);
                kalamngySend(this.innerText, `/query ${s}`)
            };
            function func2(s) {
                {
                    kalamngySend(s, `/query ${s}`).then(_ => { kalamngySend(s, "الو").then(_ => { kalamngySend(s, "مشغوله").then(_ => { kalamngySend(s, `/winclose ${s}`) }) }) })
                }
            };
            createLi = function (txt, firstM) {
                let li = document.createElement("li");
                li.innerText = txt;
                li.style.cursor = "pointer";
                li.style.width = "fit-content";
                li.id = generateRandomString();
                (firstM) ? li.style.color = (femalesNames.has(txt)) ? "green" : "#FFA500" : li.style.color = (!personsGotMyMsg2.has(txt) && personsGotMyMsg1.has(txt)) ? "red" : "white";
                (Array.isArray(blockObj.get(txt))) ? blockObj.get(txt).push(li.id) : blockObj.set(txt, [li.id])
                if (firstM) {
                    li.onclick = function (event) {
                        func1(txt);
                        event.stopPropagation();

                    }
                    ol1.append(li)
                }
                else {
                    li.onclick = function (event) {
                        func2(txt);
                        event.stopPropagation();
                    }
                    ol.append(li)
                }

                li.scrollIntoView();
            };

            messageThisPerson = function (name) {
                if (!condition) {
                    setTimeout(s => {
                        if (!personsGotMyMsg2.has(s) && personsGotMyMsg1.has(s)) {
                            kalamngySend(s, message4).then(_ => {
                                createLi(s, false);
                                kalamngySend(s, `/winclose ${s}`).then(_ => {
                                    personsGotMyMsg2.add(s);
                                    likeMe1.add(s);
                                    console.log(`you send ${s} the after 60s message`)
                                }
                                )
                            });
                        }
                    }, 60000 + num, name)
                }
                setTimeout(s => {
                    kalamngySend(s, message1).then(_ => {
                        createLi(s, true);
                        kalamngySend(s, `/winclose ${s}`)
                    })
                    // if (condition) {
                    // }
                }, num, name);
            }
            function fillZozo() {
                return new Promise((resolve) => {
                    [...parent.fuserlist.document.getElementsByClassName("userlist-item")].forEach(x => {
                        if (checkForFemaleName(x.innerText, femalesNames)) {
                            zozo.push(x.innerText)
                        }
                    });
                    setTimeout(resolve, 1000);
                });
            }
            function messageAndClose() {
                return new Promise((resolve) => {
                    personsGotMyMsg1.add(myNick);
                    personsGotMyMsg2.add(myNick);
                    kalamngySend(myNick, message1).then(_ => {
                        setTimeout(() => {
                            resolve();
                        }, 1000);

                    })
                }).then(_ => {
                    kalamngySend(myNick, `/winclose ${myNick}`).then(_ => {
                        mainObserver.observe(mainTarget, objConfig);
                        _fwindowlist.hideuserlist();
                        togC.click();
                    })
                });
            }
            new Promise(resolve => {
                _fwindowlist.hideuserlist();
                setTimeout(resolve, 1000);
            }).then(_ => fillZozo()).then(_ => messageAndClose())
            clearInterval(check);
            console.log("done");
        }
    }, 100);
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
function sentTwoMsgs() {
    if (_fwindowlist.currentwindow != roomName) {
        let personName = _fwindowlist.currentwindow;
        kalamngySend(personName, "الو").then(_ => { kalamngySend(personName, "معايا؟") })
    }
}
function defineMySelf() {
    if (_fwindowlist.currentwindow != roomName) {
        let personName = _fwindowlist.currentwindow;
        kalamngySend(personName, "انا مهندس على 35 سنه من المنصوره").then(_ => { kalamngySend(personName, "ممكن نتعرف؟") })
    }
}
function restart() {
    kalamngySend("Status", `/query Status`).then(_ => {
        _fwindowlist.reconnect();
    })
}
function sendMsgToMyself() {
    kalamngySend(myNick, `/query ${myNick}`).then(_ => {
        audio.play();
        kalamngySend(myNick, message1).then(_ => {
            kalamngySend(myNick, `/winclose ${myNick}`)
        })
    }
    )
}
function goToRoom() {
    kalamngySend(roomName, `/query ${roomName}`);
}

function block(x) {
    let personName = x
    if (personName != roomName && personName != myNick) {
        kalamngySend(personName, `/winclose ${personName}`)
        personsGotMyMsg1.delete(personName);
        personsGotMyMsg2.delete(personName);
        _fmain.document.getElementById(blockObj.get(personName)?.[0])?.remove();
        _fmain.document.getElementById(blockObj.get(personName)?.[1])?.remove();
        blockObj.delete(personName);
        likeMe.delete(personName);
        likeMe1.delete(personName);
    }
}

function closAll() {
    let sentme = Object.keys(parent.fwindowlist.Witems);
    for (let i = 0; i < sentme.length; i++) {
        if (sentme[i] == "Status" || sentme[i] == roomName) {
            continue
        }
        kalamngySend(sentme[i], `/winclose ${sentme[i]}`)
    }
}

function goToLogin() {
    open("https://alisodsin.github.io/kalamngy.html", "_self")
}

function efsl() {
    _fwindowlist.disconnected();
}

function togleMessage() {
    if (!personsGotMyMsg1.has("dodend1")) {
        message1 = "انيكك فويس بعنف؟";
        message2 = "نتكلم جيتسى ولا تلجرام";
        message3 = "؟";
        message4 = "ما تردى عليا يا لبوتى"
        input.placeholder = `the bad message`;
        personsGotMyMsg1.add("dodend1");
    }

    else if (!personsGotMyMsg1.has("dodend2")) {
        message1 = (new Date().getHours() >= 2 && new Date().getHours() <= 14) ? "صباح الخير" : "مساء الخير";
        message2 = "تحبى نتعرف ";
        message3 = "بشكل محترم؟";
        message4 = "ارجو انك تردى عليا";
        input.placeholder = `good message2`;
        personsGotMyMsg1.add("dodend2");
    }
    else {
        message1 = (new Date().getHours() >= 2 && new Date().getHours() <= 14) ? "صباح الخير" : "مساء الخير";
        message2 = "انا مهندس على 35 سنه من المنصوره";
        message3 = "ممكن نتعرف؟";
        message4 = "ممكن لو سمحتى تردى عليا ؟"
        input.placeholder = "good message1";
        personsGotMyMsg1.delete("dodend1");
        personsGotMyMsg1.delete("dodend2");
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

    if (ol.style.display == "block") {
        ol.style.display = "none";
        ol1.style.display = "block";
    }
    else if (ol1.style.display == "block") {
        ol1.style.display = "none";
    }
    else {
        ol.style.display = "block"
    }
}
function buttonsCreator() {
    for (let index = 1; index <= 21; index++) {
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
                button.onclick = sendBigData;
                break;
            case 16:
                button.style.background = "black";
                button.style.color = "white";
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
                button.innerText = "addName";
                button.onclick = addName;
                break;
            case 19:
                button.style.background = "black";
                button.style.color = "white";
                button.onclick = _ => {
                    femalesNames = removeMultiWordElements(femalesNames);
                    femalesNames.addd = addd
                };
                break;
            case 20:
                button.style.background = "black";
                button.style.color = "white";
                button.innerText = "D";
                button.onclick = function () {
                    num = num + 1000;
                    if (num > 5000) {
                        num = 0;
                    }
                    this.innerText = `${num / 1000}S`
                };
                break;
            case 21:
                button.style.background = "black";
                button.style.color = "white";
                button.innerText = "false";
                button.onclick = function () {
                    if (condition) {
                        condition = false;
                        this.innerText = "false";
                    }
                    else {
                        condition = true;
                        this.innerText = "true";
                    }

                };
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
        personsGotMyMsg1.add(txt);
        messageThisPerson(txt);
    }
});
function sendBigData() {
    let femalesNamesar = [...femalesNames];
    fetch(`https://api.github.com/repos/${user}/${repo}/contents/${path}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`,
        },
        body: JSON.stringify({
            message: 'Add new names',
            content: btoa(encodeURIComponent(JSON.stringify(femalesNamesar))),
            sha: shrr,
        }),
    }).then(_ => alert("done"));
}

function retrieveBigData() {
    fetch(`https://api.github.com/repos/${user}/${repo}/contents/${path}`)
        .then(response => response.json())
        .then(file => {
            shrr = file.sha
            const content = JSON.parse(decodeURIComponent(atob(file.content)));
            femalesNames = new Set(content);
            femalesNames.delete(undefined);
            femalesNames.delete(null);
            testSet = femalesNames;
            oldLength = femalesNames.size;
        })
}
function stringExistsInSet(str, set) {
    for (const element of set) {
        if (str.includes(element) || str === element) {
            return true;
        }
    }
    return false;
}
function checkForFemaleName(str, set) {
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
    if (!personsGotMyMsg1.has("ok3")) {
        testSet = new Set();
        personsGotMyMsg1.add("ok3");
        _fmain.document.getElementById("togf").innerText = "off"
    }
    else {
        testSet = femalesNames;
        personsGotMyMsg1.delete("ok3")
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
retrieveBigData();