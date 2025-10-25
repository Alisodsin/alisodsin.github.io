// global variabless
let check = setInterval((_) => {
  if (parent?.fwindowlist) {
    Object.keys(parent.fwindowlist).forEach((x) => {
      if (/(_0x|mynickpre|AF|gFV|canvas|getClient)/.test(x)) {
        parent.fwindowlist[x] = (_) => {
          return true;
        };
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
  kashida = "ـ",
  R,
  femalesUrl = `http://localhost:8090/f`,
  malesUrl = `http://localhost:8090/m`,
  messagesUrl = `http://localhost:8090/ms`,
  messages = new Set(),
  notWanted = new Set(),
  randomizeMessage = false,
  dontCheckAgain = new Set(),
  shaf,
  sham,
  shrr3,
  users,
  oldMlength,
  stream = {},
  framo,
  displayDiv = document.createElement("div"),
  hrdspc = "\u00A0",
  ters,
  condition = false,
  num = false,
  zozo = new Set(),
  togC,
  switcherc,
  butGet,
  inputc,
  butDelete,
  butAddL,
  butAddR,
  mutablediv,
  observerCtrl,
  kalamngySend,
  num1 = 0,
  buttons,
  rooms = ["#مصر", "#رومانسية"],
  message1 = new Date().getHours() >= 2 && new Date().getHours() <= 14 ? "صباح الخير" : "مساء الخير",
  message2 = "مهندس علي 42 سنه",
  message3 = "ممكن نتعرف لو مفيش مانع",
  message4 = "؟",
  regex = /onedaymothersaidgetupearlytogotoschool/,
  guesto = /^guest[^a-zA-Z]*$/i,
  personsGotMyMsg1 = new Set(),
  femalesNames = new Set(),
  testFset = new Set(),
  toggles = new Set(),
  malesNames = new Set(),
  roomName,
  newNamesF = [],
  newNamesM = [],
  newNamesFd = [],
  newNamesMd = [],
  containersDiv = document.createElement("div"),
  ol1 = document.createElement("ol"),
  ol2 = document.createElement("ol"),
  joiningPplClass,
  joinPerson,
  join,
  listTarget,
  justKamangy = /^Kalamngy_\d{4}$/,
  mainTarget,
  mainObserver = new MutationObserver(async (e) => {
    if (joiningPplClass.length >= 1) {
      joinPerson = [...joiningPplClass].at(-1);
      join = joinPerson?.innerText;
      if (!stream[join] && joinPerson.nextSibling.data.includes("Joine") && !malesNames.has(join) && join in users && (regex.test(join) || (femalesNames.size && checkForFemaleName(join, femalesNames)))) {
        doIt(join);
      } else if (!malesNames.has(join) && !personsGotMyMsg1.has(join) && !/^Kalamngy_\d{0,}$|Guest/gi.test(join) && join in users && _fwindowlist.currentwindow == roomName && !joinPerson.previousSibling.textContent.includes("made")) {
        if (!zozo.has(join) && !dontCheckAgain.has(join) && checkForFemaleName(join, testFset)
        ) {
          zozo.add(join);
          displayDiv.innerHTML = `<span style="font-size: 1.5em;"><bdi style="color:green">"${join}"</bdi></span>`;
        } else if (!zozo.has(join)) {
          let li = document.createElement("li");
          li.innerText = join;
          ol2.append(li);
          li.scrollIntoView();
          malesNames.add(join);
        }
      }
    }
    try {
      if (_fwindowlist.currentwindow != roomName && (toggles.has("lmaaa") || toggles.has("gemy") || toggles.has("gemye"))) {
        let msg = [...[..._fmain.document?.querySelector?.("#text")?.childNodes]?.at?.(-1)?.children]?.at?.(-2)?.innerText;
        let nick = [...[..._fmain.document?.querySelector?.("#text")?.childNodes]].at(-1).childNodes[1].children[0].innerText;
        if (nick == _fwindowlist.currentwindow && _fwindowlist.currentwindow != myNick && stream[nick]) {
          lama(msg, nick);
        }
      }
    } catch (_) {
      return;
    }
  }),
  listObserver = new MutationObserver((_) => {
    personsGotMyMsg1.forEach((name) => {
      let regex = new RegExp(name + "\n!", "g");
      if (listTarget.innerText.match(regex)) {
        stream[name].excuterObj.next();
      }
    });
  }),
  objConfig = {
    childList: true,
    subtree: true,
    attributes: false,
    characterData: false,
  },
  audio = new Audio("https://alisodsin.github.io/Short.mp3"),
  bll = new Audio("https://www.soundjay.com/phone/cell-phone-1-nr0.mp3");
// global  functions
function runCode() {
  let check = setInterval((_) => {
    if (Boolean(Object?.keys?.(_fwindowlist?.Witems)?.[1])) {
      roomName = Object.keys(_fwindowlist.Witems)[1];
      framo = document.createElement("iframe");
      framo.src = "http://localhost:8090/";
      mainTarget = _fmain.document.querySelector("#text");
      myNick = _fwindowlist.mynickname;
      joiningPplClass = _fmain.document.getElementsByClassName("main-nickg");
      listTarget = _fwindowlist.document.getElementById("windowlist");
      input = parent.fform.document.querySelector("#say");
      listObserver.observe(listTarget, objConfig);
      fform.onkeydown = keysHandelr;
      fform.fns = (_) => true;
      ters = fform.document.getElementsByTagName("img")[0];
      _fmain.nickmenu = function () {
        return false;
      };
      _fmain.document.getElementById("menu").remove();
      _fmain.document.getElementById("mainplusbtn").click();
      users = _fwindowlist?.Witems?.[roomName]?.users;
      parent.fuserlist.document
        .querySelectorAll(".menu")
        .forEach((menuElement) => {
          menuElement.style.display = "none";
        });
      parent.fuserlist.document.addEventListener("click", function (event) {
        if (event.target.matches("td")) {
          let txt = event.target.innerText;
          if (!personsGotMyMsg1.has(txt)) {
            doIt(txt);
          }
        }
      });
      ters.onclick = function name() {
        togleMessage();
      };
      parent.fform.addEventListener(
        "contextmenu",
        function (e) {
          e.stopPropagation();
        },
        true
      );
      _fmain.addEventListener(
        "contextmenu",
        function (e) {
          e.stopPropagation();
        },
        true
      );
      _fmain.samehh = (_) => true;
      setInterval(function () {
        kalamngySend(roomName, `/clear ${roomName}`);
      }, 60000);
      buttonsCreator();
      containersDiv.style.position = "fixed";
      containersDiv.style.display = "flex";
      containersDiv.id = "father";
      containersDiv.style.flexDirection = "column";
      containersDiv.style.top = "0%";
      containersDiv.style.width = "30vw";
      containersDiv.style.height = "100%";
      containersDiv.style.right = "0";
      containersDiv.style.margin = "0";
      containersDiv.style.padding = "0";
      _fwindowlist["Witems"] = new Proxy(_fwindowlist["Witems"], {
        set(target, p, v) {
          if (
            personsGotMyMsg1.has(p) ||
            p == myNick ||
            checkForFemaleName(p, testFset)
          ) {
            return Reflect.set(target, p, v);
          } else {
            return false;
          }
        },
      });
      _fwindowlist.witemadd = function (name, channel) {
        if (_fwindowlist.Witems[name] || _fwindowlist.findwin(name)) return;
        name = name.replace(/\"/g, "&quot;");
        _fwindowlist.Witems[name] = {
          activity: 0,
          text: [],
          channel: channel,
          speak: 1,
          info: 0,
        };
        if (channel) {
          try {
            _fwindowlist.Witems[name].users = {};
            _fwindowlist.Witems[name].topic = "";
          } catch { }
        }
        if (!_fwindowlist.currentwindow) _fwindowlist.currentwindow = name;
        _fwindowlist.wlistredraw();
      };
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
        ::-webkit-scrollbar { width: 0px; height: 0px; }
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
                #father > * {
                    flex: 1;
                    margin:0;
                    font-size: small;
                    
  
                  }
                #ol>li ,#ol2>li{
                   position: relative;
                   white-space:nowrap;
                }
                #butcot > button {
                    background-color: black;
                    color: white;
                }
                table {
                  width:50%;
                  border-collapse: collapse;
                }
                th, td {
                  border: 2px solid white;
                  text-align: center;
                  padding: 5px;
                  font-size: small;
                } 
                `;
      ol1.id = "ol";
      ol1.style.background = "black";
      ol1.style.color = "green";
      ol1.style.overflow = "auto";
      ol2.id = "ol2";
      ol2.style.background = "black";
      ol2.style.color = "white";
      ol2.style.overflow = "auto";
      ol2.style.display = "block";
      displayDiv.style.background = "black";
      displayDiv.style.display = "none";
      displayDiv.style.justifyContent = "center";
      displayDiv.style.alignItems = "center";
      displayDiv.style.borderRadius = "100%";
      displayDiv.style.overflow = "auto";
      displayDiv.style.whiteSpace = "pre";
      containersDiv.append(ol1, displayDiv, framo, ol2);
      _fmain.document.body.append(buttonContainers, containersDiv);
      _fmain.document.head.append(style);
      _fmain.document.querySelector(".main-closepic").remove();
      _fmain.document.querySelector(".userlist-hiddeni").remove();
      _fmain.document.querySelector("#hidderbtn").style.display = "none";
      _fmain.document.querySelector("#mainplusbtn").remove();
      _fmain.addEventListener("message", function (event) {
        let [value, context, set] = event.data;
        if (context == "insert" && set == "females") {
          testFset.add(value);
          if (femalesNames.size) {
            femalesNames.add(value);
            let arml = [...ol2.children];
            for (let index = 0; index < arml.length; index++) {
              let name = arml[index].textContent;
              if (checkForFemaleName(name, femalesNames)) {
                malesNames.delete(name);
                arml[index].remove();
                doIt(name);
                break;
              }
            }
          }
          input.placeholder = `${value} added to females`;
        } else if (context == "delete" && set == "females") {
          testFset.delete(value);
          if (femalesNames.size != 0) {
            femalesNames.delete(value);
          }
          input.placeholder = `${value} deleted from females`;
        } else if (context == "insert" && set == "males") {
          notWanted.add(value);
          input.placeholder = `${value} added to males`;
        } else if (context == "delete" && set == "males") {
          notWanted.delete(value);
          input.placeholder = `${value} deleted from males`;
        } else if (context == "insert" && set == "messages") {
          messages.add(value);
          input.placeholder = `${value} inserted into messages`;
        } else if (context == "delete" && set == "messages") {
          messages.delete(value);
          input.placeholder = `${value} deleted from messages`;
        } else if (context == "observer" && set == "OFF") {
          mainObserver.disconnect();
          input.placeholder = value;
        } else if (context == "observer" && set == "ON") {
          mainObserver.observe(mainTarget, objConfig);
          input.placeholder = value;
        }
        else if (!messages.size) {
          if (context == "fall" && set == "females") {
            femalesNames = new Set(value);
            testFset = structuredClone(femalesNames);
            input.placeholder = `you have ${testFset.size} female names`;
          }
          else if (context == "mall" && set == "males") {
            notWanted = new Set(value);
          }
          else if (context == "msall" && set == "messages") {
            messages = new Set(value);
          }
        }
      });
      buttons = [...buttonContainers.children];
      R = _fwindowlist.document.getElementsByName("R")[0].value;
      kalamngySend = function (target, msg) {
        return fetch("https://www.kalamngychat.com/chat/client-perl.cgi", {
          method: "POST",
          headers: { "Content-type": "application/x-www-form-urlencoded" },
          body: `item=say&cmd=say&say=${msg}&target=${target}&R=${R}&xmlhttp=1`,
        });
      };
      doIt(myNick);
      mainObserver.observe(mainTarget, objConfig);
      _fwindowlist["Witems"][roomName]["users"] = new Proxy(
        _fwindowlist["Witems"][roomName]["users"],
        {
          deleteProperty(target, prop) {
            if (zozo.has(prop)) {
              zozo.delete(prop);
              if (!femalesNames.size) {
                displayDiv.innerHTML = `<span style="font-size: 1.5em;"><bdi style="color:red">"${prop}"</bdi></span>`;
              }
            }
            if (personsGotMyMsg1.has(prop)) {
              block(prop);
              input.placeholder = `${prop} quit`;
            }
            Reflect.deleteProperty(target, prop);
          },
        }
      );
      setInterval(() => {
        let behinedJoiner = _fwindowlist.Witems[rooms[0]]?.text
          ?.filter((x) => x?.includes("Joined"))
          ?.at(-1)
          ?.match(/<a.*>(.*)<\/a>/i)?.[1];
        if (Boolean(users)) {
          if (
            num &&
            _fwindowlist.currentwindow != roomName &&
            behinedJoiner &&
            !personsGotMyMsg1.has(behinedJoiner) &&
            behinedJoiner in users &&
            (regex.test(behinedJoiner) ||
              checkForFemaleName(behinedJoiner, testFset))
          ) {
            doIt(behinedJoiner);
          }
        }
      }, 50);
      setTimeout((_) => {
        Object.keys(users).forEach((x) => {
          if (checkForFemaleName(x, testFset) && !Object.keys(users[x]).length) {
            zozo.add(x);
          }
        });
        let prsntPplMsg = setInterval((_) => {
          if (zozo.size < 1) {
            clearInterval(prsntPplMsg);
          } else {
            let name = [...zozo].at(Math.floor(Math.random() * zozo.size));
            if (
              _fmain.document.getElementById("togf").innerText != "OFF" &&
              _fwindowlist.currentwindow == roomName &&
              num1 < 2
            ) {
              doIt(name);
            }
          }
        }, 60000);
      }, 4000);
      clearInterval(check);
    }
  }, 100);
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function closeCurrentPerson() {
  if (_fwindowlist.currentwindow != roomName) {
    kalamngySend(
      _fwindowlist.currentwindow,
      `/winclose ${_fwindowlist.currentwindow}`
    );
  }
}
function changeMessage1() {
  message1 = prompt("Enter new message1", message1);
  message2 = prompt("Enter new message2", message2);
  message3 = prompt("Enter new message3", message3);
}
function getRandomMessage() {
  const randomIndex = Math.floor(
    (crypto.getRandomValues(new Uint32Array(1))[0] / (Math.pow(2, 32) - 1)) *
    messages.size
  );
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
    await kalamngySend(personName, "على 42 سنه , منصوره");
    kalamngySend(personName, "وانتى؟");
  }
}
async function restart() {
  if (_fwindowlist.currentwindow != "Status") {
    await kalamngySend("Status", `/query Status`);
    await sleep(1000);
    _fwindowlist.reconnect();
    await sleep(1000);
    let check = setInterval((_) => {
      if (_fwindowlist.currentwindow == roomName) {
        users = _fwindowlist?.Witems?.[roomName]?.users;
        _fwindowlist["Witems"][roomName]["users"] = new Proxy(
          _fwindowlist["Witems"][roomName]["users"],
          {
            deleteProperty(target, prop) {
              if (zozo.has(prop)) {
                zozo.delete(prop);
              }
              if (personsGotMyMsg1.has(prop)) {
                block(prop);
                input.placeholder = `${prop} quit`;
              }
              return Reflect.deleteProperty(target, prop);
            },
          }
        );
        _fwindowlist["Witems"] = new Proxy(_fwindowlist["Witems"], {
          set(target, p, v) {
            if (
              checkForFemaleName(p, testFset) ||
              p == myNick ||
              personsGotMyMsg1.has(p)
            ) {
              return Reflect.set(target, p, v);
            } else {
              return false;
            }
          },
        });
        clearInterval(check);
      }
    }, 100);
  } else {
    _fwindowlist.reconnect();
  }
}
async function sendMsgToMyself() {
  await kalamngySend(myNick, message1);
  await sleep(700);
  kalamngySend(myNick, `/winclose ${myNick}`);
}
function goToRoom() {
  kalamngySend(roomName, `/query ${roomName}`);
}
function block(x) {
  if (x != roomName && x != myNick && personsGotMyMsg1.has(x)) {
    if (x == _fwindowlist.currentwindow) {
      kalamngySend(x, `/winclose ${x}`);
    }
    personsGotMyMsg1.delete(x);
    _fmain.document.getElementById(stream?.[x]?.id)?.remove();
    clearTimeout(stream?.[x]?.timeout);
    delete stream[x];
  } else if (x != roomName && x != myNick && !personsGotMyMsg1.has(x)) {
    kalamngySend(x, `/ignore ${x}`).then((_) => {
      kalamngySend(x, `/winclose ${x}`);
    });
  }
}
function closAll() {
  let sentme = Object.keys(parent.fwindowlist.Witems);
  for (let i = 0; i < sentme.length; i++) {
    if (/#|Status/i.test(sentme[i])) {
      continue;
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
    message1 = "تتناكى صوت بعنف؟";
    message2 = "جتسى ,تلجرام او جستوك عندك ايه";
    message3 = "؟";
    message4 = "ما تردى عليا يا لبوتى";
    input.placeholder = `the bad message`;
    toggles.add("dodend1");
  } else if (!toggles.has("dodend3")) {
    randomizeMessage = true;
    input.placeholder = `random messages`;
    toggles.add("dodend3");
  } else if (!toggles.has("dodend2")) {
    message1 =
      new Date().getHours() >= 2 && new Date().getHours() <= 14
        ? "صباح الخير"
        : "مساء الخير";
    message2 = "تحبى نتعرف ";
    message3 = "بشكل محترم؟";
    message4 = "ارجو انك تردى عليا";
    randomizeMessage = false;
    input.placeholder = `good message2`;
    toggles.add("dodend2");
  } else {
    message1 =
      new Date().getHours() >= 2 && new Date().getHours() <= 14
        ? "صباح الخير"
        : "مساء الخير";
    message2 = "على 42 منصوره";
    message3 = "ممكن نتعرف؟";
    message4 = "ممكن لو سمحتى تردى عليا ؟";
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
        continue;
      }
      buttons[index].style.display = "none";
    }
    toggles.add("ok2");
  } else {
    for (let index = 0; index < buttons.length; index++) {
      if (buttons[index].innerText == "F13") {
        continue;
      }
      buttons[index].style.display = "inline";
    }
    toggles.delete("ok2");
  }
}
function toggleContainer() {
  if (!toggles.has("show")) {
    containersDiv.style.display = "none";
    toggles.add("show");
  } else {
    containersDiv.style.display = "flex";
    toggles.delete("show");
  }
}
function buttonsCreator() {
  for (let index = 1; index < 18; index++) {
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
        button.onclick = (_) => {
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
        button.onclick = toggleButtons;
        break;
      case 14:
        button.style.background = "#DD4124";
        button.style.color = "white";
        button.onclick = (_) => _fwindowlist.hideuserlist();
        break;
      case 15:
        button.style.background = "black";
        button.style.color = "white";
        button.innerText = "S";
        button.onclick = function () {
          if (this.innerText == "S") {
            containersDiv.style.width = "85%";
            this.innerText = "L";
          } else {
            containersDiv.style.width = "30vw";
            this.innerText = "S";
          }
        };
        break;
      case 16:
        button.id = "togf";
        button.style.background = "black";
        button.style.color = "white";
        button.innerText = "justF";
        button.onclick = function () {
          if (num1 == 0) {
            regex = justKamangy;
            this.innerText = "F+K";
            num1++;
          } else if (num1 == 1) {
            femalesNames.clear();
            this.innerText = "justK";
            num1++;
          } else if (num1 == 2) {
            regex = /onedaymothersaidgetupearlytogotoschool/;
            guesto = /onedaymothersaidgetupearlytogotoschool/;
            this.innerText = "OFF";
            displayDiv.style.display = "flex";
            ol1.style.display = "none";
            num1++;
          } else {
            femalesNames = structuredClone(testFset);
            this.innerText = "justF";
            guesto = /^guest[^a-zA-Z]*$/i;
            num1 = 0;
            displayDiv.style.display = "none";
            ol1.style.display = "block";
          }
        };
        break;
      case 17:
        button.style.background = "black";
        button.style.color = "white";
        button.innerText = "aif";
        button.onclick = function () {
          if (this.innerText == "aif") {
            toggles.add("lmaaa");
            this.innerText = "lma";
            message1 = "hi";
          }
          else if (this.innerText == "lma") {
            toggles.delete("lmaaa")
            toggles.add("gemy");
            this.innerText = "gemy";
            message1 = new Date().getHours() >= 2 && new Date().getHours() <= 14 ? "صباح الخير" : "مساء الخير";
          }
          else if (this.innerText == "gemy") {
            toggles.delete("gemy")
            toggles.add("gemye");
            this.innerText = "gemye";
            message1 = "Hey"
          }
          else {
            toggles.delete("gemye");
            this.innerText = "aif";
            message1 = new Date().getHours() >= 2 && new Date().getHours() <= 14 ? "صباح الخير" : "مساء الخير";
          }
        }
        break;
    }
    button.style.border = "none";
    button.style.borderRadius = "40%";
    buttonContainers.append(button);
  }
}
function keysHandelr(e) {
  if (e.key == "F1") {
    closeCurrentPerson();
    e.preventDefault();
  } else if (e.key == "F2") {
    changeMessage1();
    e.preventDefault();
  } else if (e.key == "F3") {
    sentTwoMsgs();
    e.preventDefault();
  } else if (e.key == "F4") {
    defineMySelf();
    e.preventDefault();
  } else if (e.key == "F5") {
    restart();
    e.preventDefault();
  } else if (e.key == "F6") {
    sendMsgToMyself();
    e.preventDefault();
  } else if (e.key == "F7") {
    goToRoom();
    e.preventDefault();
  } else if (e.key == "F8") {
    block(_fwindowlist.currentwindow);
    e.preventDefault();
  } else if (e.key == "F9") {
    closAll();
    e.preventDefault();
  } else if (e.key == "F10") {
    goToLogin();
    e.preventDefault();
  } else if (e.key == "F11") {
    efsl();
    e.preventDefault();
  }
}
_fmain.document.addEventListener("click", function (event) {
  if (event.target.matches(".main-nickg")) {
    let txt = event.target.innerText;
    if (!personsGotMyMsg1.has(txt)) {
      doIt(txt);
    }
  }
});
function checkForFemaleName(str, set) {
  let original = str;
  if (str.includes("|")) {
    dontCheckAgain.add(original);
    return false;
  }
  if (str?.includes(kashida)) {
    str = str.replaceAll(kashida, "");
  }

  if (set.has(str.toLowerCase()) || guesto.test(str)) {
    return true;
  }
  let words = str?.split(/[^\p{L}\p{N}]+/gu).filter((x) => x);
  for (const word of words) {
    if (notWanted.has(word.toLowerCase())) {
      dontCheckAgain.add(original);
      return false;
    }
  }
  for (const word of words) {
    if (set.has(word.toLowerCase())) {
      return true;
    }
  }
  words = str?.split(/[^\p{L}]/gu).filter((x) => x);
  for (const word of words) {
    if (notWanted.has(word.toLowerCase())) {
      dontCheckAgain.add(original);
      return false;
    }
  }
  for (const word of words) {
    if (set.has(word.toLowerCase())) {
      return true;
    }
  }
  words = str?.split(/(\b[\p{L}\p{M}]+\b|\u00A0|_|\s)/gu).filter((x) => x);
  for (const word of words) {
    if (set.has(word.toLowerCase())) {
      return true;
    }
  }
  words = str?.split(/(?=[A-Z|\u00A0|_|\s])/gu).filter((x) => x);
  for (const word of words) {
    if (set.has(word.toLowerCase())) {
      return true;
    }
  }
  if (/ة[^\u0020\u00A0]/.test(str)) {
    let stro = str?.replaceAll("ة", "ة ");
    words = stro.split(/\p{Emoji}|[^\p{L}]/gu).filter((x) => x);
    for (const word of words) {
      if (notWanted.has(word.toLowerCase())) {
        dontCheckAgain.add(original);
        return false;
      }
      if (set.has(word)) {
        return true;
      }
    }
  }
  if (/ء[^\u0020\u00A0]/.test(str)) {
    let stro = str?.replaceAll("ء", "ء ");
    words = stro.split(/\p{Emoji}|[^\p{L}]/gu).filter((x) => x);
    for (const word of words) {
      if (notWanted.has(word.toLowerCase())) {
        dontCheckAgain.add(original);
        return false;
      }
      if (set.has(word)) {
        return true;
      }
    }
  }
  if (/د[^\u0020\u00A0]/.test(str)) {
    let stro = str?.replaceAll("د", "د ");
    words = stro.split(/\p{Emoji}|[^\p{L}]/gu).filter((x) => x);
    for (const word of words) {
      if (notWanted.has(word.toLowerCase())) {
        dontCheckAgain.add(original);
        return false;
      }
      if (set.has(word)) {
        return true;
      }
    }
  }
  if (/^(ال|أل)/.test(str)) {
    let stro = str.replaceAll(/^(ال|أل)/gu, "");
    words = stro.split(/\p{Emoji}|[^\p{L}]/gu).filter((x) => x);
    for (const word of words) {
      if (notWanted.has(word.toLowerCase())) {
        dontCheckAgain.add(original);
        return false;
      }
      if (set.has(word)) {
        return true;
      }
    }
  }
  dontCheckAgain.add(original);
  return false;
}

function getPattern(str, set) {
  let original = str;
  if (str.includes("|")) {
    dontCheckAgain.add(original);
    return false;
  }
  if (str?.includes(kashida)) {
    str = str.replaceAll(kashida, "");
  }

  if (set.has(str.toLowerCase()) || guesto.test(str)) {
    return str;
    // return true;
  }
  let words = str?.split(/[^\p{L}\p{N}]+/gu).filter((x) => x);
  for (const word of words) {
    if (notWanted.has(word.toLowerCase())) {
      dontCheckAgain.add(original);
      return false;
    }
  }
  for (const word of words) {
    if (set.has(word.toLowerCase())) {
      return word
      // return true;
    }
  }
  words = str?.split(/[^\p{L}]/gu).filter((x) => x);
  for (const word of words) {
    if (notWanted.has(word.toLowerCase())) {
      dontCheckAgain.add(original);
      return false;
    }
  }
  for (const word of words) {
    if (set.has(word.toLowerCase())) {
      return word;
      // return true;
    }
  }
  words = str?.split(/(\b[\p{L}\p{M}]+\b|\u00A0|_|\s)/gu).filter((x) => x);
  for (const word of words) {
    if (set.has(word.toLowerCase())) {
      return word
      // return true;
    }
  }
  words = str?.split(/(?=[A-Z|\u00A0|_|\s])/gu).filter((x) => x);
  for (const word of words) {
    if (set.has(word.toLowerCase())) {
      return word;
      // return true;
    }
  }
  if (/ة[^\u0020\u00A0]/.test(str)) {
    let stro = str?.replaceAll("ة", "ة ");
    words = stro.split(/\p{Emoji}|[^\p{L}]/gu).filter((x) => x);
    for (const word of words) {
      if (notWanted.has(word.toLowerCase())) {
        dontCheckAgain.add(original);
        return false;
      }
      if (set.has(word)) {
        return word;
        // return true;
      }
    }
  }
  if (/ء[^\u0020\u00A0]/.test(str)) {
    let stro = str?.replaceAll("ء", "ء ");
    words = stro.split(/\p{Emoji}|[^\p{L}]/gu).filter((x) => x);
    for (const word of words) {
      if (notWanted.has(word.toLowerCase())) {
        dontCheckAgain.add(original);
        return false;
      }
      if (set.has(word)) {
        return word;
        // return true;
      }
    }
  }
  if (/د[^\u0020\u00A0]/.test(str)) {
    let stro = str?.replaceAll("د", "د ");
    words = stro.split(/\p{Emoji}|[^\p{L}]/gu).filter((x) => x);
    for (const word of words) {
      if (notWanted.has(word.toLowerCase())) {
        dontCheckAgain.add(original);
        return false;
      }
      if (set.has(word)) {
        return word;
        // return true;
      }
    }
  }
  if (/^(ال|أل)/.test(str)) {
    let stro = str.replaceAll(/^(ال|أل)/gu, "");
    words = stro.split(/\p{Emoji}|[^\p{L}]/gu).filter((x) => x);
    for (const word of words) {
      if (notWanted.has(word.toLowerCase())) {
        dontCheckAgain.add(original);
        return false;
      }
      if (set.has(word)) {
        return word;
        // return true;
      }
    }
  }
  dontCheckAgain.add(original);
  return false;
}
function difference(st1, st2) {
  return [...st1].filter((x) => !st2.has(x));
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
async function* stramMsg(name) {
  await kalamngySend(name, message1);
  if (stream[name]) {
    let li1 = document.createElement("li");
    if (randomizeMessage) {
      li1.innerHTML = `<bdi>${name}</bdi> ⏪ <bdi style="color:white">${stream[name].msg}</bdi>`;
    } else {
      li1.innerText = name;
    }
    li1.style.cursor = "pointer";
    li1.style.width = "fit-content";
    li1.id = stream[name].id;
    li1.style.color = testFset.has(name) ? "green" : "#FFA500";
    li1.onclick = function (event) {
      kalamngySend(name, `/query ${name}`);
      event.stopPropagation();
    };
    if (zozo.has(name)) {
      li1.style.color = "violet";
      zozo.delete(name);
    }
    ol1.append(li1);
    li1.scrollIntoView();
    await kalamngySend(name, `/winclose ${name}`);
  } else {
    return false;
  }
  let noreply = yield 1;
  if (noreply) {
    await kalamngySend(name, message4);
    kalamngySend(name, `/winclose ${name}`);
  } else {
    clearTimeout(stream[name].timeout);
    await kalamngySend(name, `/query ${name}`);
    audio.play().catch((_) => true);
    if (!(toggles.has("lmaaa") || toggles.has("gemy") || toggles.has("gemye"))) {
      await kalamngySend(name, message2);
      await kalamngySend(name, message3);
    }
    let txt = _fwindowlist["Witems"][_fwindowlist.currentwindow].text[0];
    let tmpoDiv = document.createElement("div");
    tmpoDiv.innerHTML = txt;
    let str = tmpoDiv.childNodes[0].childNodes[4].innerText;
    let li = _fmain.document.getElementById(stream[name].id);
    li.innerText = "";
    li.innerHTML = `<bdi>${name}</bdi> ⏩ <bdi style="color:white">${str}</bdi> ⏪ <bdi style="color:white">${stream[name].msg}</bdi>`;
    li.style.whiteSpace = "pre";
    li.onclick = function (event) {
      kalamngySend(name, `/query ${name}`);
      event.stopPropagation();
    };
    ol1.append(li);
    li.scrollIntoView();
    if (!(toggles.has("lmaaa") || toggles.has("gemy") || toggles.has("gemye"))) {
      await sleep(600);
      kalamngySend(name, `/winclose ${name}`);
    }
  }
  yield 2;
  if (noreply) {
    await kalamngySend(name, `/query ${name}`);
    await kalamngySend(name, message2);
    await kalamngySend(name, message3);
    audio.play().catch((_) => true);
    let txt = _fwindowlist["Witems"][_fwindowlist.currentwindow].text[0];
    let tmpoDiv = document.createElement("div");
    tmpoDiv.innerHTML = txt;
    let str = tmpoDiv.childNodes[0].childNodes[4].innerText;
    let li = _fmain.document.getElementById(stream[name].id);
    li.innerText = "";
    li.innerHTML = `<bdi>${name}</bdi>${hrdspc} ⏩ ${hrdspc}<bdi style="color:white">${str}</bdi>`;
    li.style.whiteSpace = "pre";
    li.onclick = function (event) {
      kalamngySend(name, `/query ${name}`);
      event.stopPropagation();
    };
    ol1.append(li);
    li.scrollIntoView();
    await sleep(200);
    kalamngySend(name, `/winclose ${name}`);
    noreply = false;
    yield 3;
  }
  while (true) {
    bll.play().catch((_) => true);
    kalamngySend(name, `/query ${name}`);
    yield 4;
  }
}
class User {
  constructor(msg, id, esm) {
    this.msg = msg;
    this.id = id;
    this.name = esm;
    this.excuterObj = stramMsg(esm);
    this.timeout = condition
      ? setTimeout(() => {
        stream[esm].excuterObj.next(true);
      }, 60000)
      : "";
    this.ptrn = getPattern(esm, testFset);
  }
}
function doIt(name) {
  if (randomizeMessage) {
    message1 = getRandomMessage();
  }
  stream[name] = new User(message1, generateRandomString(), name);
  stream[name].excuterObj.next();
  personsGotMyMsg1.add(name);
}
function downloadObj(obj, filename) {
  const json = JSON.stringify(obj);
  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${filename}.json`;
  a.click();
  URL.revokeObjectURL(url);
}
async function fetchJsons(url) {
  let data = await fetch(url);
  let ar = await data.json();
  return new Set(ar);
}
async function lama(txt, nick) {
  let prefix = toggles.has("lmaaa") ? "lma" : "gemy";
  let myobj = { role: "user", "content": txt };
  if (!stream[nick].arr) {
    stream[nick].arr = [];
    stream[nick].msgs = new Set();
    if (toggles.has("gemy")) {
      if (!stream[nick].ptrn) {
        myobj.content = `أنتِ فاطمة،أنتِ فتاة تركية غير متزوجة من مدينة إسطنبول عمرك 24 عام.أنتِ تتحدثين باللغه العربيه الفصحى فقط. أنتِ في هذا الشات الذي يسمى "كلامنجى" للبحث عن زوج مصري أصيل ووسيم. أنتِ جميلة، بيضاء، ذات عيون زرقاء، طولكِ 170 سم ووزنكِ 65 كجم. أنتِ مسلمة سنية ملتزمة بالحجاب ولا تريدين الكلام في الجنس، وأنتِ جادة في موضوع الزواج. أجيبي بجمل قصيرة لا تزيد عن 10 كلمات. لا تستخدمي أي إيموجي في إجاباتك`
        myobj.content += `.${txt}.`;
        myobj.content += "أنا رجل اريد أن اتعرف عليكى يا فاطمه"
        console.log(myobj.content)
      }
      else {
        myobj.content = `أنت علي، رجل عمره 28 سنة من تركيا ويعيش في إسطنبول. أنت في شات كلامنجي. لا تتحدث العربية جيدًا، ولكنك تتعلم اللغة العربية الفصحى لتتواصل مع المصريين. تتحدث فقط باللغة العربية الفصحى. طولك 185 سم ووزنك 80 كجم. أنت في هذا الشات لتتعرف على بنت مصرية لأن حلم حياتك منذ زمن هو أن تتزوج بنت مصرية. تحدث بطريقة جيدة وركز اهتمامك على الشخص الذي تتحدث معه واسأله الكثير من الأسئلة عن نفسه. أجب بجمل قصيرة لا تزيد عن 10 كلمات. لا تستخدم أي إيموجي في إجاباتك.`;
        myobj.content += `.${txt}`;
        myobj.content += `انا بنت اسمى هو ${stream[nick].ptrn}`;
        console.log(myobj.content)
      }
    }
    else if (toggles.has("gemye")) {
      if (!stream[nick].ptrn) {
        myobj.content = `You are Fatma, a 24-year-old Turkish girl from Istanbul. You speak only English. You are in this chat called "Kalamangy" to find an authentic and handsome Egyptian husband. You are beautiful, fair-skinned, with blue eyes, 170 cm tall, and weigh 65 kg. You are a Sunni Muslim who wears a hijab and does not want to talk about sex. You are serious about marriage. Answer in short sentences of no more than 10 words. Do not use any emojis in your responses.`;
        myobj.content += `.${txt}.`;
        myobj.content += "I am a man who wants to meet you, Fatma.";
        console.log(myobj.content);
      } else {
        myobj.content = `You are Fatma, a 24-year-old Turkish girl from Istanbul. You want to make friends with Egyptian girls. You love Egyptian art, including songs and traditional Egyptian dance. You speak only English. Answer in short sentences of no more than 10 words. Do not use any emojis in your responses. ${txt}`;
        myobj.content += `.${txt}`;
        myobj.content += `I am a girl and my name is ${stream[nick].ptrn}`;
        console.log(myobj.content);
      }
    }
    else {
      myobj.content = myobj.content + ` , respond with one sentence for the whole converstaion and just answer in english please , my name is ${stream[nick].ptrn}`;
    }
  }
  stream[nick].arr.push(myobj);
  if (!stream[nick].msgs.has(txt)) {
    stream[nick].msgs.add(txt);
    let x = await fetch(`http://localhost:8090/${prefix}`, {
      method: "POST",
      "headers": {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(stream[nick].arr)
    });
    let respnseObj = await x.json();
    stream[nick].arr.push(respnseObj);
    await kalamngySend(nick, normalize_text(respnseObj.content.trim().replace(/\n+/g, ".")))
    if (_fwindowlist.currentwindow != nick) {
      kalamngySend(nick, `/query ${nick}`);
    }
  }
}

normalize_text = function (text) {
  let string = text.replace(new RegExp(String.fromCharCode(1617, 124, 1614, 124, 1611, 124, 1615, 124, 1612, 124, 1616, 124, 1613, 124, 1618), "g"), "");
  return string
}
runCode();  