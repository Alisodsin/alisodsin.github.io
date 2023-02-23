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
    kalamngySend,
    R,
    femalesNames = new Set(),
    condition = false,
    stream = {},
    audio = new Audio("https://alisodsin.github.io/Short.mp3"),
    bll = new Audio("https://soundbible.com/mp3/A-Tone-His_Self-1266414414.mp3"),
    message1 = (new Date().getHours() >= 2 && new Date().getHours() <= 14) ? "صباح الخير" : "مساء الخير",
    message2 = "انا على 35 سنه من المنصوره",
    message3 = "تحبى نتكلم ؟",
    style = document.createElement("style"),
    buttonContainers = document.createElement("div"),
    buttons,
    roomName,
    myNick,
    users,
    toggles = new Set(),
    user = 'alisodsin',
    repo = 'alisodsin.github.io',
    path = 'femaleNames.json',
    shrr
    ;

function runCode() {
    let check = setInterval(_ => {
        if (Boolean(Object?.keys?.(fwindowlist?.Witems)?.[1])) {

            roomName = Object.keys(fwindowlist.Witems)[1];
            myNick = fwindowlist.mynickname;
            femalesNames.add(myNick);
            R = fwindowlist.document.getElementsByName("R")[0].value;
            //
            kalamngySend = function (target, msg) {
                return fetch("https://www.kalamngychat.com/chat/client-perl.cgi", { method: "POST", headers: { "Content-type": "application/x-www-form-urlencoded" }, body: `item=say&cmd=say&say=${msg}&target=${target}&R=${R}&xmlhttp=1` });
            };
            //

            fwindowlist.reconnect = async function () {
                if (fwindowlist.currentwindow != "Status") {
                    await kalamngySend(roomName, `/clear ${roomName}`);
                    await kalamngySend("Status", `/query Status`);
                    await kalamngySend("Status", `/clear Status`);
                    await sleep(1500);
                    fwindowlist.document.getElementById('iframe').src += '';
                }
                else {
                    await kalamngySend("Status", `/clear Status`);
                    fwindowlist.document.getElementById('iframe').src += '';

                }

            }
            fwindowlist.witemadd = function (name, channel) {
                try {

                    if (fwindowlist.Witems[name] || fwindowlist.findwin(name)) return;
                    name = name.replace(/\"/g, '&quot;');
                    fwindowlist.Witems[name] = { activity: 0, text: new Array, channel: channel, speak: 1, info: 0 };
                    if (channel) {
                        fwindowlist.Witems[name].users = {};
                        fwindowlist.Witems[name].topic = '';
                    }
                    if (!fwindowlist.currentwindow) fwindowlist.currentwindow = name;
                    fwindowlist.wlistredraw();

                } catch (_) {
                }
            }














            fwindowlist["Witems"][roomName]["users"] = new Proxy(fwindowlist["Witems"][roomName]["users"], {
                set(target, prop, value, receiver) {
                    if (!(prop in target) && condition && !stream[prop] && checkForFemaleName(prop, femalesNames) && fwindowlist.currentwindow == roomName) {
                        let keys = new Set(Object.keys(value))
                        console.log(value);
                        if (!(keys.has("halfop") || keys.has("op") || keys.has("voice"))) {
                            stream[prop] = messsage(prop, message1, message2, message3);
                            stream[prop].next();
                        }
                    }
                    return Reflect.set(target, prop, value, receiver)
                },
                deleteProperty(target, prop) {
                    if (prop in target && checkForFemaleName(prop, femalesNames) && stream[prop]) {
                        delete stream[prop]
                        delete target[prop];
                        console.log(`%c${prop}`, "color: red");
                    }
                    return Reflect.deleteProperty(target, prop)
                }

            });
            //
            fwindowlist["Witems"] = new Proxy(fwindowlist["Witems"], {

                set(target, prop, value) {
                    if (checkForFemaleName(prop, femalesNames)) {

                        target[prop] = new Proxy(value, {
                            set: function (t, p, v) {
                                t[p] = v
                                if (Object.values(t).includes("3") && fwindowlist.currentwindow != prop && stream[prop]) {
                                    stream[prop].next();
                                }
                                return true;
                            }

                        });
                        if (!stream[prop]) {
                            kalamngySend(prop, `/query ${prop}`)
                            if (prop === myNick) {
                                (async _ => {
                                    await sleep(500);
                                    kalamngySend(prop, `/winclose ${prop}`)
                                })();
                            }
                        }
                        return true
                    }
                    else {
                        return false


                    }


                }

            });

            buttonContainers.style.position = "fixed";
            buttonContainers.style.display = "flex";
            buttonContainers.style.flexDirection = "column";
            buttonContainers.style.top = "0%";
            buttonContainers.style.width = "fit-content";
            buttonContainers.style.height = "100%";
            buttonContainers.style.justifyContent = "space-around";
            buttonContainers.style.flexWrap = "wrap";
            buttonContainers.id = "buttonContainers";

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
                #ol2{
                    display:none !important;
                }
            }
            .w3-display-middle{
                position:absolute;
                top:0px;
                right:0px;
                transform:translate(0px,0px);
                width:30vw;
                height:240px;
                box-sizing: border-box;
                margin:0;
            }`



            setInterval(function () {
                kalamngySend(roomName, `/clear ${roomName}`)
            }, 60000);


            fmain.document.body.append(buttonContainers);


            buttons = [...buttonContainers.children];


            buttonsCreator();






























            setTimeout(() => {
                condition = true
            }, 1000);
            clearInterval(check)
        }
    }, 50)
}


function closeCurrentPerson() {
    if (fwindowlist.currentwindow != roomName) {
        kalamngySend(fwindowlist.currentwindow, `/winclose ${fwindowlist.currentwindow}`)
    }
}

function changeMessage() {
    message1 = prompt("Enter new message1", message1);
    message2 = prompt("Enter new message2", message2);
    message3 = prompt("Enter new message3", message3);
}

async function sentTwoMsgs() {
    if (fwindowlist.currentwindow != roomName) {
        let personName = fwindowlist.currentwindow;
        await kalamngySend(personName, "الو");
        kalamngySend(personName, "معايا؟");

    }
}
async function defineMySelf() {
    if (fwindowlist.currentwindow != roomName) {
        let personName = fwindowlist.currentwindow;
        await kalamngySend(personName, "انا مهندس على 35 سنه من المنصوره");
        kalamngySend(personName, "وانتى؟");
    }
}

async function restart() {
    fwindowlist.reconnect();
    // fwindowlist.window.location.reload();
}

async function sendMsgToMyself() {
    await kalamngySend(myNick, message1);
}

function goToRoom() {
    kalamngySend(roomName, `/query ${roomName}`);
}

function block(x) {
    if (x != roomName && x != myNick && stream[x]) {
        if (x == fwindowlist.currentwindow) {
            kalamngySend(x, `/winclose ${x}`)
        }
        // _fmain.document.getElementById(stream?.[x]?.id1)?.remove();
        // _fmain.document.getElementById(stream?.[x]?.id2)?.remove();
        // clearTimeout(stream?.[x]?.timeout);
        delete stream[x]
    }
    else if ((x != roomName && x != myNick && !stream[x])) {
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
    fwindowlist.disconnected();
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
                button.onclick = changeMessage;
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
                    block(fwindowlist.currentwindow);
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
                // button.onclick = toggleContainer;
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
                // button.onclick = _ => fwindowlist.hideuserlist();
                break;
            case 15:
                button.style.background = "#CD4124";
                button.style.color = "white";
                button.innerText = "Sv";
                // button.onclick = sendBigData;
                break;
            case 16:
                button.style.background = "black";
                button.style.color = "white";
                button.innerText = "ptrn"
                // button.onclick = changePattern;
                break;
            case 17:
                button.style.background = "black";
                button.style.color = "white";
                button.id = "togf";
                button.innerText = "on";
                // button.onclick = toggleFemales;
                break;
            case 18:
                button.style.background = "black";
                button.style.color = "white";
                button.id = "kokos"
                button.innerText = "ad";
                // button.onclick = addName;
                break;
            case 19:
                button.style.background = "black";
                button.style.color = "white";
                button.innerText = "cln"
                // button.onclick = _ => {
                //     femalesNames = removeMultiWordElements(femalesNames);
                //     femalesNames.addd = addd
                // };
                break;
            case 20:
                button.style.background = "black";
                button.style.color = "white";
                button.innerText = "sngl";
                // button.onclick = function () {
                //     if (!num) {
                //         num = true;
                //         this.innerText = "dbl"
                //     }
                //     else {
                //         num = false;
                //         this.innerText = "sngl"
                //     }
                // };
                break;
            case 21:
                button.style.background = "black";
                button.style.color = "white";
                button.innerText = "f";
                // button.onclick = function () {
                //     if (condition) {
                //         condition = false;
                //         this.innerText = "f";
                //     }
                //     else {
                //         condition = true;
                //         this.innerText = "t";
                //     }

                // };
                // msgAfter = button;
                break;
        }
        button.style.border = "none"
        button.style.borderRadius = "40%"
        buttonContainers.append(button);
    }
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
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
//
async function phpNames() {
    let fetched = await fetch(`https://php.alisaber1.repl.co`);
    let arr = await fetched.json();
    femalesNames = new Set(arr)
    femalesNames.delete(null);
    femalesNames.delete(undefined);
    femalesNames.delete("");
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
    runCode();

}

async function* messsage(name, msg1, msg2, msg3) {
    await kalamngySend(name, msg1);
    await kalamngySend(name, `/winclose ${name}`);
    console.log(`%c${name}`, "color: yellow");
    yield 1;
    await kalamngySend(name, `/query ${name}`);
    audio.play();
    await kalamngySend(name, msg2);
    await kalamngySend(name, msg3);
    await sleep(500);
    kalamngySend(name, `/winclose ${name}`);
    yield 2;
    while (true) {
        await kalamngySend(name, `/query ${name}`);
        bll.play();
        yield 3
    }
}
retrieveBigData();