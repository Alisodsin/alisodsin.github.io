// global variabless
let _fmain = parent.fmain,
  buttonContainers = document.createElement("div"),
  _fwindowlist = parent.fwindowlist,
  style = document.createElement("style"),
  input,
  myNick,
  kashida = "ـ",
  R,
  fmlgiturl = 'https://raw.githubusercontent.com/Alisodsin/alisodsin.github.io/main/femaleNames.json',
  mlsgiturl = 'https://raw.githubusercontent.com/Alisodsin/alisodsin.github.io/main/males.json',
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
  message1 =
    new Date().getHours() >= 2 && new Date().getHours() <= 14
      ? "صباح الخير"
      : "مساء الخير",
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
      if (
        !stream[join] &&
        joinPerson.nextSibling.data.includes("Joine") &&
        !malesNames.has(join) &&
        join in users &&
        (regex.test(join) ||
          (femalesNames.size && checkForFemaleName(join, femalesNames)))
      ) {
        doIt(join);
      } else if (
        !malesNames.has(join) &&
        !personsGotMyMsg1.has(join) &&
        !/^Kalamngy_\d{0,}$|Guest/gi.test(join) &&
        join in users &&
        _fwindowlist.currentwindow == roomName &&
        !joinPerson.previousSibling.textContent.includes("made")
      ) {
        if (
          !zozo.has(join) &&
          !dontCheckAgain.has(join) &&
          checkForFemaleName(join, testFset)
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
  }),
  listObserver = new MutationObserver((_) => {
    personsGotMyMsg1.forEach((name) => {
      let regex = new RegExp(name + "\n!", "g");
      if (listTarget.innerText.match(regex)) {
        let last = createHtmlObjectFromString(fwindowlist["Witems"][name].text.at(-1));
        let lastMsg = last.childNodes[4].textContent
        let li = ol1.querySelector(`#${stream[name].id}`);
        if (li && stream[name].lastMsg != lastMsg) {
          stream[name].excuterObj.next();
          stream[name].lastMsg = lastMsg
          li.innerHTML = `<bdi>${name}</bdi> ${hrdspc}⏩${hrdspc} <bdi style="color:white">${lastMsg}</bdi>`;
          ol1.append(li);
          li.scrollIntoView();
        }
        // kalamngySend(name, `/winclose ${name}`); 
        fwindowlist.witemact(name);

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

function runCode() {
  let check = setInterval(async (_) => {
    if (Boolean(Object?.keys?.(_fwindowlist?.Witems)?.[1])) {
      roomName = Object.keys(_fwindowlist.Witems)[1];
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
      containersDiv.append(ol1, displayDiv);
      femalesNames = await fetchJsons(fmlgiturl);
      testFset = structuredClone(femalesNames);
      notWanted = await fetchJsons(mlsgiturl);
      ol1.style.borderBottom = "2px solid green";
      containersDiv.append(ol2);
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
  await kalamngySend("Status", `/query Status`);
  await kalamngySend("Status", `/clear Status`);
  await kalamngySend(myNick, message1);
  await sleep(2000);
  kalamngySend(roomName, `/query ${roomName}`);
}
function goToRoom() {
  kalamngySend(roomName, `/query ${roomName}`);
}
function block(x) {
  if (x != roomName && personsGotMyMsg1.has(x)) {
    if (x == _fwindowlist.currentwindow) {
      kalamngySend(x, `/winclose ${x}`);
    }
    personsGotMyMsg1.delete(x);
    _fmain.document.getElementById(stream?.[x]?.id)?.remove();
    clearTimeout(stream?.[x]?.timeout);
    delete stream[x];
  } else if (x != roomName && !personsGotMyMsg1.has(x)) {
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
  for (let index = 1; index < 17; index++) {
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
  let words = str.split(/[^\p{L}]/u);
  if (set.has(str) || /^guest[^a-zA-Z]*$/i.test(str)) {
    return str;
  }
  for (const word of words) {
    if (set.has(word.toLowerCase())) {
      return word;
    }
  }
  words = str.split(/(\b[\p{L}\p{M}]+\b)/gu);
  for (const word of words) {
    if (set.has(word.toLowerCase())) {
      return word;
    }
  }
  words = str.split(/(?=[A-Z])/);
  for (const word of words) {
    if (set.has(word.toLowerCase())) {
      return word;
    }
  }
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
  let li = document.createElement("li");
  if (stream[name]) {
    li.innerText = name;
    li.style.cursor = "pointer";
    li.style.width = "fit-content";
    li.id = stream[name].id;
    li.style.color = testFset.has(name) ? "green" : "#FFA500";
    li.onclick = function (event) {
      kalamngySend(name, `/query ${name}`);
      event.stopPropagation();
    };
    if (zozo.has(name)) {
      li.style.color = "violet";
      zozo.delete(name);
    }
    ol1.append(li);
    li.scrollIntoView();
    await kalamngySend(name, `/winclose ${name}`);
  } else {
    return false;
  }
  yield 1;
  await kalamngySend(name, message2);
  await kalamngySend(name, message3);
  audio.play().catch((_) => true);
  yield 2;
  while (true) {
    bll.play().catch((_) => true);
    yield 3;
  }
}
class User {
  constructor(msg, id, esm) {
    this.msg = msg;
    this.id = id;
    this.name = esm;
    this.excuterObj = stramMsg(esm);
    this.ptrn = getPattern(esm, testFset);
    this.lastMsg = "";
  }
}
function doIt(name) {
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
  let response = await fetch(url, {
    headers: {
      'Accept': 'application/vnd.github.v3.raw'
    }
  });
  let text = await response.json();
  return new Set(text);
}
function createHtmlObjectFromString(htmlString) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'text/html');
  // You can select the specific element you want, e.g., the first div
  return doc.body.firstChild; // Or doc.querySelector('.main-item');
}
runCode(); 