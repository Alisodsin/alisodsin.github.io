// global variabless
let check = setInterval(_ => {
  if (parent?.fwindowlist) {
    Object.keys(parent.fwindowlist).forEach((x) => {
      if (/(_0x|mynickpre|AF|gFV|canvas|getClient)/.test(x)) {
        parent.fwindowlist[x] = _ => { return true }
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
  fmlgiturl = `https://api.github.com/repos/alisodsin/alisodsin.github.io/contents/femaleNames.json`,
  mlsgiturl = `https://api.github.com/repos/alisodsin/alisodsin.github.io/contents/males.json`,
  msgsgiturl = `https://api.github.com/repos/alisodsin/alisodsin.github.io/contents/messages.json`,
  messages = new Set(),
  notWanted = new Set(),
  randomizeMessage = false,
  shaf,
  sham,
  shrr3,
  users,
  oldFlength,
  oldMlength,
  stream = {},
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
  message1 = (new Date().getHours() >= 2 && new Date().getHours() <= 14) ? "صباح الخير" : "مساء الخير",
  message2 = "انا على 42 سنه من المنصوره",
  message3 = "تحبى نتكلم بشكل محترم؟",
  message4 = "ممكن لو سمحتى تردى عليا ؟",
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
  controlDiv = document.createElement("div"),
  ol2 = document.createElement("ol"),
  joiningPplClass,
  joinPerson,
  join,
  listTarget,
  patterns = [["^k$", /^Kalamngy_\d{4}$/], ["noPtrn", /onedaymothersaidgetupearlytogotoschool/], ["*[<=5]", /^.{1,6}$/], ["ar<=5", /^[\u0621-\u064A\xA0\x5F\0-9]{1,7}$/], ["*digts", /\d+$/], ["ar*", /^[\u0621-\u064A\xA0\x5F\0-9]+$/], ["*", /^.+$/], ["k|short", /(^.{1,5}$|^Kalamngy_)/i]],
  justKamangy = /^Kalamngy_\d{4}$/,
  mainTarget,
  mainObserver = new MutationObserver(async (e) => {
    if (joiningPplClass.length >= 1) {
      joinPerson = [...joiningPplClass].at(-1);
      join = joinPerson?.innerText
      if ((!stream[join] && joinPerson.nextSibling.data.includes("Joine")) && !malesNames.has(join) && (join in users) && (regex.test(join) || checkForFemaleName(join, femalesNames))) {
        doIt(join);
      }
      else if (!malesNames.has(join) && !personsGotMyMsg1.has(join) && !/^Kalamngy_\d{0,}$|Guest/ig.test(join) && (join in users) && _fwindowlist.currentwindow == roomName && !joinPerson.previousSibling.textContent.includes("made")) {
        if (!zozo.has(join) && checkForFemaleName(join, testFset)) {
          zozo.add(join)
          mutablediv.innerHTML = `<b style="font-size: 1.5em;"><bdi style="color:green">"${join}"</bdi></b>`
        }
        else if (!zozo.has(join)) {
          let li = document.createElement("li");
          li.innerText = join
          ol2.append(li);
          li.scrollIntoView();
          malesNames.add(join);
        }
      }
    }
  })
  ,
  listObserver = new MutationObserver(_ => {
    personsGotMyMsg1.forEach(name => {
      let regex = new RegExp(name + "\n!", "g");
      if (listTarget.innerText.match(regex)) {
        stream[name].excuterObj.next();
      }
    })
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
      mainTarget = _fmain.document.querySelector("#text");
      myNick = _fwindowlist.mynickname;
      joiningPplClass = _fmain.document.getElementsByClassName("main-nickg");
      listTarget = _fwindowlist.document.getElementById("windowlist");
      input = parent.fform.document.querySelector("#say");
      listObserver.observe(listTarget, objConfig);
      input.placeholder = `you have ${oldFlength} female names`
      fform.onkeydown = keysHandelr;
      fform.fns = _ => true;
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
      _fwindowlist["Witems"] = new Proxy(_fwindowlist["Witems"], {
        set(target, p, v) {
          if (checkForFemaleName(p, testFset) || p == myNick || personsGotMyMsg1.has(p)) {
            return Reflect.set(target, p, v)
          }
          else {
            return false
          }
        }
      });
      _fwindowlist.witemadd = function (name, channel) {
        if (_fwindowlist.Witems[name] || _fwindowlist.findwin(name)) return;
        name = name.replace(/\"/g, '&quot;');
        _fwindowlist.Witems[name] = { activity: 0, text: [], channel: channel, speak: 1, info: 0 };
        if (channel) {
          try {
            _fwindowlist.Witems[name].users = {};
            _fwindowlist.Witems[name].topic = '';

          } catch {
          }
        }
        if (!_fwindowlist.currentwindow) _fwindowlist.currentwindow = name;
        _fwindowlist.wlistredraw();
      }
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
      ol1.style.overflow = "auto"
      ol2.id = "ol2";
      controlDiv.style.width = "100%"
      controlDiv.style.background = "black"
      controlDiv.style.color = "white"
      controlDiv.style.border = "1px solid green"
      controlDiv.style.display = "flex"
      controlDiv.style.flexDirection = "column"
      controlDiv.style.alignItems = "center"
      controlDiv.style.justifyContent = "space-evenly"
      controlDiv.style.overflow = "auto"
      controlDiv.innerHTML = ` 
      <div id ="switcher" style="cursor:pointer;font-size:1.2rem;">females</div> 
      <textarea id="inputo" style = "background: black;color:white;width:90%" ></textarea>
      <div id="butcot" style="width:100%;display:flex;justify-content:space-around">
            <button id="ctrlObserver">ON</button>
            <button id="getnew">G</button>
            <button id="updtlocal">U<sub>L</sub></button>
            <button id="updtremote">U<sub>R</sub></button>  
            <button id="dlta">D</button>
        </div>
        <div id="mutablediv" style="overflow:auto;width:90%;height:30%;white-space:nowrap;">  
        <ul></ul>
        </div>  
      `
      switcherc = controlDiv.querySelector("#switcher");
      inputc = controlDiv.querySelector("#inputo");
      butGet = controlDiv.querySelector("#getnew");
      butDelete = controlDiv.querySelector("#dlta");
      butAddL = controlDiv.querySelector("#updtlocal");
      butAddR = controlDiv.querySelector("#updtremote");
      observerCtrl = controlDiv.querySelector("#ctrlObserver");
      mutablediv = controlDiv.children[3];
      observerCtrl.onclick = function () {
        if (this.innerText == "ON") {
          mainObserver.disconnect();
          this.innerText = "OFF"
        }
        else {
          mainObserver.observe(mainTarget, objConfig);
          this.innerText = "ON"
        }

      }
      switcherc.onclick = function () {
        this.innerText = this.innerText.startsWith("f") ? "males" : "females";
      }
      butGet.onclick = function () {
        mutablediv.innerHTML = "";
        if (newNamesM.length || newNamesF.length || newNamesFd.length || newNamesMd.length) {
          let table = document.createElement("table")
          table.innerHTML = `
          <tr>
          <th style="color:green">F<sub>${newNamesF.length}</sub></th>
          <th style="color:red">F<sub>${newNamesFd.length}</sub></th>
          <th style="color:green" >M<sub>${newNamesM.length}</sub></th> 
          <th style="color:red">M<sub>${newNamesMd.length}</sub></th>      
          </tr>
          `
          let maxLength = Math.max(newNamesF.length, newNamesM.length, newNamesFd.length, newNamesMd.length);
          if (maxLength) {
            for (let index = 0; index < maxLength; index++) {
              let tr = document.createElement("tr");
              let f = newNamesF[index] ? newNamesF[index] : "";
              let m = newNamesM[index] ? newNamesM[index] : "";
              let fd = newNamesFd[index] ? newNamesFd[index] : "";
              let md = newNamesMd[index] ? newNamesMd[index] : "";
              tr.innerHTML = `<td>${f}</td><td>${fd}</td> <td>${m}</td><td>${md}</td>`
              table.append(tr);
            }
            mutablediv.append(table)
          }
        }
        else {
          mutablediv.innerHTML = "no new names";
        }
      }
      butGet.click();
      butDelete.onclick = function () {
        let vlu = inputc.value.trim().toLowerCase();
        mutablediv.innerHTML = ""
        if (vlu && switcherc.innerText.startsWith("f") && newNamesF.includes(vlu)) {
          newNamesF = newNamesF.filter(x => x != vlu);
          femalesNames.delete(vlu)
          testFset.delete(vlu)
          localStorage.f = newNamesF.join();
          mutablediv.innerText = `${vlu} removed from newNamesF`

        }
        else if (vlu && switcherc.innerText.startsWith("m") && newNamesM.includes(vlu)) {
          newNamesM = newNamesM.filter(x => x != vlu);
          notWanted.delete(vlu)
          localStorage.m = newNamesM.join();
          mutablediv.innerText = `${vlu} removed from newNamesM`
        }
        else if (!vlu) {
          mutablediv.innerText = `there is no name to delete`
        }
        else if (newNamesF.includes(vlu)) {
          mutablediv.innerText = `${vlu} exists in newNamesF`

        }
        else if (newNamesM.includes(vlu)) {
          mutablediv.innerText = `${vlu} exists in newNamesM`
        }
        else if (notWanted.has(vlu) && switcherc.innerText.startsWith("m")) {
          notWanted.delete(vlu);
          newNamesMd.push(vlu);
          localStorage.md = newNamesMd.join();
          mutablediv.innerText = `${vlu} removed from old male names`;
        }
        else if (testFset.has(vlu) && switcherc.innerText.startsWith("f")) {
          femalesNames.delete(vlu)
          testFset.delete(vlu)
          newNamesFd.push(vlu);
          localStorage.fd = newNamesFd.join();
          mutablediv.innerText = `${vlu} removde from  old female names`
        }
        else if (notWanted.has(vlu)) {
          mutablediv.innerText = `${vlu} exists in old male names,click switcher to delete it`;
        }
        else if (testFset.has(vlu)) {
          mutablediv.innerText = `${vlu} exists in old female names,click switcher to delete it`
        }
        else {
          mutablediv.innerText = `${vlu} doesn't exist in either newNames or oldNames`
        }
      }

      butAddL.onclick = function () {
        let vlu = inputc.value.trim().toLowerCase();
        if (vlu) {
          if (switcherc.innerText.startsWith("f") && !testFset.has(vlu) && !newNamesF.includes(vlu) && !notWanted.has(vlu) && !newNamesFd.includes(vlu) && !newNamesMd.includes(vlu)) {
            newNamesF.push(vlu);
            if (femalesNames.size) {
              femalesNames.add(vlu)
            }
            testFset.add(vlu)
            localStorage.f = newNamesF.join()
            mutablediv.innerHTML = ""
            mutablediv.innerText = `${vlu} added to  newNamesF`
            malesNames.forEach(x => {
              if (checkForFemaleName(x, testFset)) {
                malesNames.delete(x)
              }
            })
          }
          else if (switcherc.innerText.startsWith("m") && !notWanted.has(vlu) && !newNamesM.includes(vlu) && !testFset.has(vlu) && !newNamesMd.includes(vlu) && !newNamesFd.includes(vlu)) {
            newNamesM.push(vlu);
            notWanted.add(vlu)
            localStorage.m = newNamesM.join()
            mutablediv.innerHTML = ""
            mutablediv.innerText = `${vlu} added to  newNamesM`
          }
          else if (newNamesFd.includes(vlu)) {
            newNamesFd = newNamesFd.filter(x => x != vlu);
            localStorage.fd = newNamesFd.join();
            if (femalesNames.size) {
              femalesNames.add(vlu);
            }
            testFset.add(vlu)
            mutablediv.innerText = `${vlu} went back to old female names`
          }
          else if (newNamesMd.includes(vlu)) {
            newNamesMd = newNamesMd.filter(x => x != vlu);
            localStorage.md = newNamesMd.join();
            notWanted.add(vlu)
            mutablediv.innerText = `${vlu} went back to old male names`
          }
          else if (testFset.has(vlu)) {
            mutablediv.innerHTML = ""
            mutablediv.innerText = `${vlu} already exist in Females`
          }
          else if (notWanted.has(vlu)) {
            mutablediv.innerHTML = ""
            mutablediv.innerText = `${vlu} already exist in Males`
          }
          else {
            return false
          }
        }
        else {
          mutablediv.innerHTML = ""
          mutablediv.innerText = `there is no name to add`

        }
      }
      butAddR.onclick = async function () {
        if (switcherc.innerText.startsWith("f")) {
          if (newNamesF.length || newNamesFd.length) {
            try {
              await fetch(fmlgiturl, { method: 'PUT', headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${TOKEN}`, }, body: JSON.stringify({ message: 'Add new names', content: btoa(encodeURIComponent(JSON.stringify([...testFset]))), sha: shaf, }), });
              mutablediv.innerHTML = ""
              mutablediv.innerText = "females updated on git hub"
              localStorage.f = ""
              localStorage.fd = ""
              newNamesF = [];
              newNamesFd = [];
            } catch (error) {
              mutablediv.innerHTML = ""
              mutablediv.innerText = `${error.message}`
            }
          }
          else {
            mutablediv.innerHTML = "";
            mutablediv.innerText = `females already updated`;
          }
        }
        else {
          if (newNamesM.length || newNamesMd.length) {
            try {
              await fetch(mlsgiturl, { method: 'PUT', headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${TOKEN}`, }, body: JSON.stringify({ message: 'Add new names', content: btoa(encodeURIComponent(JSON.stringify([...notWanted]))), sha: sham, }), });
              mutablediv.innerHTML = ""
              mutablediv.innerText = "males updated on git hub"
              localStorage.m = ""
              localStorage.md = ""
              newNamesM = [];
              newNamesMd = [];
            } catch (error) {
              mutablediv.innerHTML = ""
              mutablediv.innerText = `${error.message}`
            }
          }
          else {
            mutablediv.innerHTML = "";
            mutablediv.innerText = `males already updated`;
          }
        }

      }
      ol2.style.background = "black";
      ol2.style.color = "white"
      ol2.style.overflow = "auto"
      ol2.style.display = "block";
      containersDiv.append(ol1, controlDiv, ol2)
      _fmain.document.body.append(buttonContainers, containersDiv);
      _fmain.document.head.append(style)
      _fmain.document.querySelector(".main-closepic").remove();
      _fmain.document.querySelector(".userlist-hiddeni").remove();
      _fmain.document.querySelector("#hidderbtn").style.display = "none";
      _fmain.document.querySelector("#mainplusbtn").remove();
      buttons = [...buttonContainers.children];
      R = _fwindowlist.document.getElementsByName("R")[0].value;
      kalamngySend = function (target, msg) {
        return fetch("https://www.kalamngychat.com/chat/client-perl.cgi", { method: "POST", headers: { "Content-type": "application/x-www-form-urlencoded" }, body: `item=say&cmd=say&say=${msg}&target=${target}&R=${R}&xmlhttp=1` });
      };
      doIt(myNick);
      mainObserver.observe(mainTarget, objConfig);
      _fwindowlist["Witems"][roomName]["users"] = new Proxy(_fwindowlist["Witems"][roomName]["users"], {
        deleteProperty(target, prop) {
          if (zozo.has(prop)) {
            zozo.delete(prop)
            if (!femalesNames.size) {
              mutablediv.innerHTML = `<b style="font-size: 1.5em;"><bdi style="color:red">"${prop}"</bdi></b>`
            }
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
          if (num && _fwindowlist.currentwindow != roomName && behinedJoiner && !personsGotMyMsg1.has(behinedJoiner) && behinedJoiner in users && (regex.test(behinedJoiner) || checkForFemaleName(behinedJoiner, testFset))) {
            doIt(behinedJoiner);
          }
        }
      }, 50);
      setTimeout(_ => {
        Object.keys(users).forEach(x => {
          if (checkForFemaleName(x, testFset) && !Object.keys(users[x]).length) {
            zozo.add(x);
          }
        });
        let prsntPplMsg = setInterval(_ => {
          if (zozo.size < 1) {
            clearInterval(prsntPplMsg);
          }
          else {
            let name = [...zozo].at((Math.floor(Math.random() * zozo.size)));
            if (_fmain.document.getElementById("togf").innerText != "OFF" && _fwindowlist.currentwindow == roomName && num1 < 2) {
              doIt(name);
            }
          }

        }, 60000);
      }, 4000)
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
        _fwindowlist["Witems"] = new Proxy(_fwindowlist["Witems"], {
          set(target, p, v) {
            if (checkForFemaleName(p, testFset) || p == myNick || personsGotMyMsg1.has(p)) {
              return Reflect.set(target, p, v)
            }
            else {
              return false
            }
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
    message1 = "تتناكى صوت ؟";
    message2 = "جتسى ,تلجرام او جستوك عندك ايه";
    message3 = "؟";
    message4 = "ما تردى عليا يا لبوتى"
    input.placeholder = `the bad message`;
    toggles.add("dodend1");
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
  }
  else {
    message1 = (new Date().getHours() >= 2 && new Date().getHours() <= 14) ? "صباح الخير" : "مساء الخير";
    message2 = "على 42 منصوره";
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
  for (let index = 1; index <= 17; index++) {
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
      case 16:
        button.id = "togf";
        button.style.background = "black";
        button.style.color = "white";
        button.innerText = "justF"
        button.onclick = function () {
          if (num1 == 0) {
            regex = justKamangy;
            this.innerText = "F+K";
            num1++;

          }
          else if (num1 == 1) {
            femalesNames.clear();
            this.innerText = "justK";
            num1++;

          }
          else if (num1 == 2) {
            regex = /onedaymothersaidgetupearlytogotoschool/;
            guesto = /onedaymothersaidgetupearlytogotoschool/;
            this.innerText = "OFF"
            num1++;
          }
          else {
            femalesNames = structuredClone(testFset);
            this.innerText = "justF";
            guesto = /^guest[^a-zA-Z]*$/i;
            num1 = 0;
          }
        };
        break;
      case 17:
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
    block(_fwindowlist.currentwindow);
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
_fmain.document.addEventListener('click', function (event) {
  if (event.target.matches('.main-nickg')) {
    let txt = event.target.innerText;
    if (!personsGotMyMsg1.has(txt)) {
      doIt(txt);
    }

  }
});
function checkForFemaleName(str, set) {
  if (str.includes("|")) {
    return false
  }
  if (set.has(str.toLowerCase()) || guesto.test(str)) {
    return true
  }
  let words = str.split(/(\u00A0|_|\s)/)
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
  words = str.split(/[^\p{L}]/u);
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
function getPattern(str, set) {
  let words = str.split(/[^\p{L}]/u);
  if (set.has(str) || /^guest[^a-zA-Z]*$/i.test(str)) {
    return str
  }
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
  words = str.split(/(?=[A-Z])/);
  for (const word of words) {
    if (set.has(word.toLowerCase())) {
      return word;
    }
  }
}
function toggleFemales() {
  if (!toggles.has("ok3")) {
    mainObserver.disconnect();
    toggles.add("ok3");
    _fmain.document.getElementById("togf").innerText = "off"

  }
  else {
    mainObserver.observe(mainTarget, objConfig);
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
async function* stramMsg(name) {
  await kalamngySend(name, message1);
  if (stream[name]) {
    let li1 = document.createElement("li");
    if (randomizeMessage) {
      li1.innerHTML = `<bdi>${name}</bdi> ⏪ <bdi style="color:white">${stream[name].msg}</bdi>`;
    }
    else {
      li1.innerText = name;
    }
    li1.style.cursor = "pointer";
    li1.style.width = "fit-content";
    li1.id = stream[name].id
    li1.style.color = (testFset.has(name)) ? "green" : "#FFA500";
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
    audio.play().catch(_ => true)
    await kalamngySend(name, message2);
    await kalamngySend(name, message3);
    let txt = _fwindowlist["Witems"][_fwindowlist.currentwindow].text[0];
    let tmpoDiv = document.createElement("div");
    tmpoDiv.innerHTML = txt
    let str = tmpoDiv.childNodes[0].childNodes[4].innerText
    let li = _fmain.document.getElementById(stream[name].id);
    li.innerText = "";
    li.innerHTML = `<bdi>${name}</bdi> ⏩ <bdi style="color:white">${str}</bdi> ⏪ <bdi style="color:white">${stream[name].msg}</bdi>`;
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
    audio.play().catch(_ => true)
    let txt = _fwindowlist["Witems"][_fwindowlist.currentwindow].text[0];
    let tmpoDiv = document.createElement("div");
    tmpoDiv.innerHTML = txt
    let str = tmpoDiv.childNodes[0].childNodes[4].innerText
    let li = _fmain.document.getElementById(stream[name].id);
    li.innerText = "";
    li.innerHTML = `<bdi>${name}</bdi>${hrdspc} ⏩ ${hrdspc}<bdi style="color:white">${str}</bdi>`;
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
    bll.play().catch(_ => true)
    kalamngySend(name, `/query ${name}`);
    yield 4
  }
}
class User {
  constructor(msg, id, esm) {
    this.msg = msg;
    this.id = id;
    this.name = esm;
    this.excuterObj = stramMsg(esm);
    this.timeout = (condition) ? setTimeout(() => { stream[esm].excuterObj.next(true); }, 60000) : "";
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
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${filename}.json`;
  a.click();
  URL.revokeObjectURL(url);
}
async function fetchJsons(url) {
  let x = await fetch(url, {
    headers: {
      'Authorization': `token ${TOKEN}`
    }
  })
  x = await x.json()
  return [new Set(JSON.parse(decodeURIComponent(atob(x.content)))), x.sha]
}
(async function () {
  let response = await fetchJsons(fmlgiturl);
  femalesNames = response[0];
  testFset = structuredClone(femalesNames)
  shaf = response[1];
  oldFlength = femalesNames.size
  response = await fetchJsons(mlsgiturl);
  notWanted = response[0];
  sham = response[1];
  oldMlength = notWanted.size
  response = await fetchJsons(msgsgiturl);
  messages = response[0];
  shrr3 = response[1];
  if (localStorage["f"]) {
    newNamesF = localStorage.f.split(",");
    for (let i = 0; i < newNamesF.length; i++) {
      if (femalesNames.has(newNamesF[i])) {
        newNamesF = newNamesF.filter(nm => nm != newNamesF[i])
      }
      else {
        femalesNames.add(newNamesF[i]);
        testFset.add(newNamesF[i]);
      }
    }
    localStorage.f = newNamesF.join()
  }
  else {
    localStorage.f = ""
  }
  if (localStorage["m"]) {
    newNamesM = localStorage.m.split(",");
    for (let i = 0; i < newNamesM.length; i++) {

      if (notWanted.has(newNamesM[i])) {
        newNamesM = newNamesM.filter(nm => nm != newNamesM[i])
      }
      else {
        notWanted.add(newNamesM[i]);
      }
    }
    localStorage.m = newNamesM.join();
  }
  else {
    localStorage.m = ""
  }
  if (localStorage["fd"]) {
    newNamesFd = localStorage.fd.split(",")
    for (let i = 0; i < newNamesFd.length; i++) {

      if (!femalesNames.has(newNamesFd[i])) {
        newNamesFd = newNamesFd.filter(nm => nm != newNamesFd[i])
      }
      else {
        femalesNames.delete(newNamesFd[i])
        testFset.delete(newNamesFd[i])
      }
    }
    localStorage.fd = newNamesFd.join()
  }
  else {
    localStorage.fd = ""
  }
  if (localStorage["md"]) {

    newNamesMd = localStorage.md.split(",")
    for (let i = 0; i < newNamesMd.length; i++) {

      if (!notWanted.has(newNamesMd[i])) {
        newNamesMd = newNamesMd.filter(nm => nm != newNamesMd[i])
      }
      else {
        notWanted.delete(newNamesMd[i])
      }
    }
    localStorage.md = newNamesMd.join()
  }
  else {
    localStorage.md = ""
  }
  await sleep(3000);
  runCode();
})();  
