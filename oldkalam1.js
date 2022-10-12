// ==UserScript==
// @name         oldKalamngyScript
// @namespace    Violentmonkey Scripts
// @match        https://www.kalamngychat.com/chat/chat.cgi
// @grant        none
// @version      2.0
// @author      -
// @description  4/22/2021
// ==/UserScript==
(function () {
    'use strict';
    var xnx = setInterval(function () {
        if (Boolean(parent.fwindowlist)) {
            Object.keys(parent.fwindowlist).forEach((x) => { if (x.includes("_0x") || x.includes("mynickpre")) { parent.fwindowlist[x] = "" } })
            clearInterval(xnx)
        };
    }, 10)
    var checkExist = setInterval(function () {
        if (Boolean(Object.keys(parent.fwindowlist.Witems)[1])) {
            (function () {
                let ele = document.createElement("script"),
                    m = document.createElement("style"),
                    mm = document.createElement("style"),
                    big_box = document.createElement("div"),
                    link_w3cs1 = document.createElement("div"),
                    link_googleIcons1 = document.createElement("div"),
                    buttonCreate = function buttonCreate() {
                        let btncontainer = document.createElement("div"), textArea = document.createElement("div");
                        textArea.id = "names";
                        textArea.innerText = "just Kalamngy";
                        textArea.className = "w3-blue w3-xlarge";
                        textArea.setAttribute("style", "width:99%;text-align:center;border-radius:2vw;word-spacing:10vw");
                        btncontainer.setAttribute("style", "display:flex;justify-content:space-around;top:0;flex-wrap:wrap;width:100%");
                        btncontainer.className = "w3-display-topmiddle";
                        for (let i = 1; i <= 13; i++) {
                            let butt = document.createElement("button"); butt.innerText = `F${i}`;
                            butt.id = `F${i}`;
                            if (i == 8) {
                                butt.className = "w3-round-xlarge w3-container w3-red"
                            }
                            else if (i == 1) {
                                butt.className = "w3-round-xlarge w3-container w3-deep-purple"
                            }
                            else if (i == 2) {
                                butt.className = "w3-round-xlarge w3-container w3-black"
                            }
                            else if (i == 3) {
                                butt.className = "w3-round-xlarge w3-container w3-blue"
                            }
                            else if (i == 4) {
                                butt.className = "w3-round-xlarge w3-container w3-teal"
                            }
                            else if (i == 5) {
                                butt.className = "w3-round-xlarge w3-container w3-black"
                            }
                            else if (i == 6) {
                                butt.className = "w3-round-xlarge w3-container w3-black"
                            }
                            else if (i == 7) {
                                butt.className = "w3-round-xlarge w3-container w3-black"
                            }
                            else if (i == 9) {
                                butt.className = "w3-round-xlarge w3-container w3-black"
                            }
                            else if (i == 10) {
                                butt.className = "w3-round-xlarge w3-container w3-black"
                            }
                            else if (i == 11) {
                                butt.className = "w3-round-xlarge w3-container w3-black"
                            }
                            else if (i == 12) {
                                butt.className = "w3-round-xlarge w3-container w3-black"
                            }
                            else if (i == 13) {
                                butt.className = "w3-round-xlarge w3-container w3-black"
                            }
                            btncontainer.appendChild(butt);
                        }
                        btncontainer.appendChild(textArea);
                        fmain.document.querySelector("#maincontain").insertBefore(btncontainer, fmain.document.querySelector("#text"));
                    };
                ele.innerText = `
let x = fmain.document.getElementsByClassName("main-nickg"),
y = fmain.document.getElementsByTagName("font"),
elTarget = fmain.document.querySelector(".main-span"),
pp = "#مصر",
audio = new Audio("https://soundbible.com/mp3/A-Tone-His_Self-1266414414.mp3"),
bll = new Audio("https://www.soundjay.com/phone/cell-phone-1-nr0.mp3"),
gn = fmain.document.getElementsByClassName("main-item"),
msg = "صباح الخير",
toto =/^Kalamngy_\\d{4}$/,
reg=0,
ppls = [],
_cc = fmain.document.getElementById("F1").parentElement.children,
msgt = [],
shown = parent.fmain.document.createElement("span"),
currnt = [],
sentme = [],
synth = window.speechSynthesis,
voices=window.speechSynthesis.getVoices();
shown.innerText=" ✓";
if (new Date().getHours() >= 2 && new Date().getHours() <= 14) {
msg = "صباح الخير";
} else {
msg = "مساء الخير"
}
vkpy = msg;
function speak(text){
    if (text !== '') {
    var utterThis = new SpeechSynthesisUtterance(text);
    var selectedOption = "Microsoft Anna - English (United States)";
    for (i = 0; i < voices.length ; i++) {
      if(voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
        break;
      }
    }
    utterThis.pitch ="0.7";
    utterThis.rate = "0.7";
    synth.speak(utterThis);
  }
};
different_return = (function () { let x = 0; return function () {return x+=1 } })();
function uniCharCode(event) {
    let char = event.which || event.keyCode;
    if (char == 119 && fwindowlist.currentwindow !== Object.keys(parent.fwindowlist.Witems)[1]) {
      ppls = ppls.filter((x)=>{return x != fwindowlist.currentwindow});
      parent.fwindowlist.sendcmd(\`/winclose $\{fwindowlist.currentwindow}\`);
     parent.fmain.document.body.querySelectorAll("#ol>li").forEach(
          function(x,y,z){
          if (x.textContent.startsWith(fwindowlist.currentwindow)){
      let block=parent.fmain.document.createElement("span");
      block.className = "material-icons w3-text-red w3-small";
      block.textContent = "block";
          x.appendChild(block);
          fmain.document.body.querySelector("#ol").appendChild(x);
          x.scrollIntoView();
          }});
      return false;
    } else if (char == 112 && fwindowlist.currentwindow !== Object.keys(parent.fwindowlist.Witems)[1]) {
      parent.fwindowlist.sendcmd(\`/winclose $\{fwindowlist.currentwindow}\`);

      return false;
    }
    else if(char == 120 && fwindowlist.currentwindow == Object.keys(parent.fwindowlist.Witems)[1]){
    
        fmain.document.getElementById("F9").click();

    }
    else if (char == 112 && fwindowlist.currentwindow == Object.keys(parent.fwindowlist.Witems)[1]) {
      return false;
    } else if (char == 116) {
      parent.fwindowlist.sendcmd("/query Status");
      function fsl() {
          parent.fwindowlist.sendcmd("/reconnect");
      };
      setTimeout(fsl, 2000);
      return false;
    } else if (char == 115 && fwindowlist.currentwindow !== Object.keys(parent.fwindowlist.Witems)[1]) {
      fwindowlist.sendcmd_real("say", "انا على 37 سنه من المنصوره", fwindowlist.currentwindow);
      function fsl() {
          fwindowlist.sendcmd_real("say", "وانتى؟", fwindowlist.currentwindow);
      }
      setTimeout(fsl, 1000);
    } else if (char == 117) {
      fwindowlist.sendcmd_real("say",msg, fwindowlist.mynickname);
      function fsl() {
          fwindowlist.sendcmd_real("say", \`/winclose $\{fwindowlist.mynickname}\`, fwindowlist.currentwindow)
      };
      setTimeout(fsl, 1000);
      return false;
    } else if (char == 118) {
      parent.fwindowlist.sendcmd(\`/query $\{Object.keys(parent.fwindowlist.Witems)[1]}\`);
      return false;
    } else if (char == 114 && fwindowlist.currentwindow !== Object.keys(parent.fwindowlist.Witems)[1]) {
      fwindowlist.sendcmd_real("say", "الو؟", fwindowlist.currentwindow);
      fwindowlist.sendcmd_real("say", "مشغوله؟", fwindowlist.currentwindow);
      return false;
    } else if (char == 113) {
      msg = prompt("msg1 is:" ,msg);
      return false;
    } else if (char == 121) {
        if ( reg == 0 ){

            toto =/^.{1,6}$/;
            fmain.document.querySelector("#names").innerText ="short names";
            reg++
            }
            else if( reg == 1 ){
            toto =/^[\\u0621-\\u064A\\xA0\\x5F\\0-9]{1,7}$/;
            fmain.document.querySelector("#names").innerText ="arabic short names";
            reg++
            }
            else if(reg == 2){
              toto =/\\d+$/;
              fmain.document.querySelector("#names").innerText ="Names ended with digits";
            reg++
            }
            else if(reg == 3){
              toto =/^[\\u0621-\\u064A\\xA0\\x5F\\0-9]+$/;
              fmain.document.querySelector("#names").innerText ="arabic names";
            reg++
            }
            else if(reg == 4){
              toto =/^.+$/;
              fmain.document.querySelector("#names").innerText ="any name";
            reg++
            }
            else if(reg == 5){
              toto =/(^.{1,5}$|^Kalamngy_)/i;
              fmain.document.querySelector("#names").innerText ="just Kalamngy or short";
            reg++
            }
            else if(reg == 6){
                toto =/^Kalamngy_\\d{4}$/;
                fmain.document.querySelector("#names").innerText ="just Kalamngy";
              reg=0
              };
    return false
    } else if (char == 122) {

      fwindowlist.sendcmd_real("say", "/quit", fwindowlist.currentwindow);
      return false;

    } else if (char == 40) {

      let sentme = Object.keys(parent.fwindowlist.Witems);
      for (let i = 0; i < sentme.length; i++) {
          if (sentme[i] == Object.keys(parent.fwindowlist.Witems)[1] || sentme[i] == Object.keys(parent.fwindowlist.Witems)[0]) {
              continue
          }
          fwindowlist.sendcmd_real("say", \`/winclose $\{sentme[i]}\`)
      };
      parent.fwindowlist.sendcmd(\`/query $\{Object.keys(parent.fwindowlist.Witems)[1]}\`);

    } else if (char == 39) {
      ppls = [fwindowlist.mynickname];
      currnt = [fwindowlist.mynickname];
      msgt = [fwindowlist.mynickname];
    } else if (char == 38) {

      if (!msg.includes("من")) {
          msg ="تحبى تترزعى اوى فى كسك وتتناكى جامد من من دكر عنيف؟";
          fmain.document.querySelector("#names").innerText = "the bad";
      } else {
          msg = vkpy;
          fmain.document.querySelector("#names").innerText = "the good";
      }
    }
    };
fform.onkeydown = uniCharCode;
ppls.push(fwindowlist.mynickname);
fmain.document.querySelector("#F1").onclick = ()=>{
    if (fwindowlist.currentwindow !== Object.keys(parent.fwindowlist.Witems)[1]){
    parent.fwindowlist.sendcmd(\`/winclose $\{fwindowlist.currentwindow}\`);
}};
fmain.document.querySelector("#F2").onclick = ()=>{
    msg = prompt("msg1 is:");
};
fmain.document.querySelector("#F3").onclick = ()=>{
    if (fwindowlist.currentwindow !== Object.keys(parent.fwindowlist.Witems)[1]){
    fwindowlist.sendcmd_real("say", "الو؟", fwindowlist.currentwindow);
    fwindowlist.sendcmd_real("say", "مشغوله؟", fwindowlist.currentwindow);
}};
fmain.document.querySelector("#F4").onclick = ()=>{
    if (fwindowlist.currentwindow !== Object.keys(parent.fwindowlist.Witems)[1]){
        fwindowlist.sendcmd_real("say", "انا على 37 سنه من المنصوره", fwindowlist.currentwindow);
        function fsl() {
            fwindowlist.sendcmd_real("say", "وانتى؟", fwindowlist.currentwindow);
        }
        setTimeout(fsl, 1000);
}};
fmain.document.querySelector("#F5").onclick = ()=>{
    parent.fwindowlist.sendcmd("/query Status");
    function fsl() {
        parent.fwindowlist.sendcmd("/reconnect");
};
    setTimeout(fsl, 2000);
};
fmain.document.querySelector("#F6").onclick = ()=>{
    fwindowlist.sendcmd_real("say",msg, fwindowlist.mynickname);
    if(msg.includes("من")){
        parent.fwindowlist.sendcmd_real("say","لو حبه تعالى نتكلم صوت جيتسى ولو جريئه ممكن نتقابل",fwindowlist.mynickname);
    };
    function fsl() {
        fwindowlist.sendcmd_real("say", \`/winclose $\{fwindowlist.mynickname}\`, fwindowlist.currentwindow)
    };
    setTimeout(fsl, 1000);
};
fmain.document.querySelector("#F7").onclick = ()=>{
    parent.fwindowlist.sendcmd(\`/query $\{Object.keys(parent.fwindowlist.Witems)[1]}\`);

};
fmain.document.querySelector("#F8").onclick = ()=>{
    if (fwindowlist.currentwindow !== Object.keys(parent.fwindowlist.Witems)[1] && fwindowlist.currentwindow !== fwindowlist.mynickname ){
        ppls = ppls.filter((x)=>{return x != fwindowlist.currentwindow});
        parent.fwindowlist.sendcmd(\`/winclose $\{fwindowlist.currentwindow}\`);
       parent.fmain.document.body.querySelectorAll("#ol>li").forEach(
            function(x,y,z){
            if (x.textContent.startsWith(fwindowlist.currentwindow)){
        let block=parent.fmain.document.createElement("span");
        block.className = "material-icons w3-text-red w3-small";
        block.textContent = "block";
            x.appendChild(block);
            fmain.document.body.querySelector("#ol").appendChild(x);
            x.scrollIntoView();
            }});
}};
fmain.document.querySelector("#F9").onclick = ()=>{
    let sentme = Object.keys(parent.fwindowlist.Witems);
    for (let i = 0; i < sentme.length; i++) {
        if (sentme[i] == Object.keys(parent.fwindowlist.Witems)[1] || sentme[i] == Object.keys(parent.fwindowlist.Witems)[0]) {
            continue
        }
        fwindowlist.sendcmd_real("say", \`/winclose $\{sentme[i]}\`)
    };
    parent.fwindowlist.sendcmd(\`/query $\{Object.keys(parent.fwindowlist.Witems)[1]}\`);
};
fmain.document.querySelector("#names").onclick = ()=>{
    if ( reg == 0 ){

        toto =/^.{1,6}$/;
        fmain.document.querySelector("#names").innerText ="short names";
        reg++
        }
        else if( reg == 1 ){
        toto =/^[\\u0621-\\u064A\\xA0\\x5F\\0-9]{1,7}$/;
        fmain.document.querySelector("#names").innerText ="arabic short names";
        reg++
        }
        else if(reg == 2){
          toto =/\\d+$/;
          fmain.document.querySelector("#names").innerText ="Names ended with digits";
        reg++
        }
        else if(reg == 3){
          toto =/^[\\u0621-\\u064A\\xA0\\x5F\\0-9]+$/;
          fmain.document.querySelector("#names").innerText ="arabic names";
        reg++
        }
        else if(reg == 4){
          toto =/^.+$/;
          fmain.document.querySelector("#names").innerText ="any name";
        reg++
        }
        else if(reg == 5){
          toto =/(^.{1,5}$|^Kalamngy_)/i;
          fmain.document.querySelector("#names").innerText ="just Kalamngy or short";
        reg++
        }
        else if(reg == 6){
            toto =/^Kalamngy_\\d{4}$/;
            fmain.document.querySelector("#names").innerText ="just Kalamngy";
          reg=0
          }
};
fmain.document.querySelector("#F10").onclick = ()=>{
window.open("https://kalamngy.netlify.app/","_self") ;
};
fmain.document.querySelector("#F11").onclick = ()=>{
    fwindowlist.sendcmd_real("say", "/quit", fwindowlist.currentwindow);
};
fmain.document.querySelector("#F12").onclick = ()=>{
};
function fnHandler() {
    
try {
    if (toto.test(x[x.length-1].innerText) && /joined/i.test( x[x.length-1].parentElement.innerText ) && !msgt.includes(x[x.length-1].innerText)) {
        parent.fwindowlist.sendcmd_real("say", msg,x[x.length-1].innerText);
        if(msg.includes("من")){
            parent.fwindowlist.sendcmd_real("say","لو حبه تعالى نتكلم صوت جيتسى ولو جريئه ممكن نتقابل",x[x.length-1].innerText);
        };
        ppls.push(x[x.length-1].innerText);
        msgt.push(x[x.length-1].innerText);
        let li = document.createElement("li");
        li.innerText=ppls[ppls.length - 1];
        li.onclick = function(){
            fwindowlist.sendcmd(\`/query $\{this.innerText}\`);
            fwindowlist.sendcmd_real("say", "الو؟",this.innerText);
            fwindowlist.sendcmd_real("say", "مشغوله؟",this.innerText);
            setTimeout(function(){
                fwindowlist.sendcmd(\`/winclose $\{li.innerText}\`);
            },1500);
        };
        fmain.document.querySelector("#ol").appendChild(li);
        li.scrollIntoView();
        fmain.document.querySelector("#div").style.setProperty("top","15%");
   setTimeout(()=>{
   fmain.document.querySelector("#div").style.setProperty("top","20%");
   },100);
        parent.fwindowlist.sendcmd(\`/winclose $\{y[y.length - 1].childNodes[1].innerText}\`);
    }
} catch (err) {
    return true;
}
};
let observer = new MutationObserver(fnHandler),
objConfig = {
    childList: true,
    subtree: true,
    attributes: false,
    characterData: false
};
timeone=0;
observer.observe(elTarget, objConfig);
setInterval(function () {
parent.fwindowlist.sendcmd(\`/clear $\{Object.keys(parent.fwindowlist.Witems)[1]}\`)
}, 60000);
let xxx = fwindowlist.document.getElementsByClassName("wlist-chooser"),
elTargete = fwindowlist.document.querySelector(".wlist-table"),
yyy = fwindowlist.document.getElementsByClassName("wlist-infon");

function fnHandlere() {
try {
    if (yyy[yyy.length - 1].innerText == "!" && (ppls.includes(yyy[yyy.length - 1].previousElementSibling.innerText)|| yyy[yyy.length - 1].previousElementSibling.innerText.includes("Guest"))) {
        parent.fwindowlist.sendcmd(\`/query $\{yyy[yyy.length - 1].previousElementSibling.innerText}\`);
        audio.play();
fmain.document.body.querySelectorAll("#ol>li").forEach(
function(x,y,z){
if (x.textContent.startsWith(yyy[yyy.length - 1].previousElementSibling.innerText)){
x.appendChild(shown);
fmain.document.body.querySelector("#ol").appendChild(x);
x.scrollIntoView();
}});
    }
    else{
        parent.fwindowlist.sendcmd(\`/winclose $\{yyy[yyy.length - 1].previousElementSibling.innerText}\`);
    }
} catch (err) {
    return true;
}
}
let observere = new MutationObserver(fnHandlere),
objConfige = {
    childList: true,
    subtree: true,
    attributes: false,
    characterData: false
};
 fmain.nickmenu = function (event, nick) {

                           if(!ppls.includes(nick)){
                            ppls.push(nick);
                            currnt.push(nick);
                            msgt.push(nick);
                           };
                            parent.fwindowlist.sendcmd_real("say", msg, nick);
                            if(msg.includes("من")){
                                parent.fwindowlist.sendcmd_real("say","لو حبه تعالى نتكلم صوت جيتسى ولو جريئه ممكن نتقابل",x[x.length-1].innerText);
                            };
                            fwindowlist.sendcmd_real("say", \`/winclose $\{nick}\`)
                        };
observere.observe(elTargete, objConfige);
parent.fmain.document.getElementById("menu").remove();
parent.fmain.document.getElementById("mainplusbtn").click();
parent.fform.addEventListener("contextmenu", function (e) {
e.stopPropagation()
}, true);
parent.fmain.addEventListener("contextmenu", function (e) {
e.stopPropagation()
}, true);
spin=0;
let no = 0 , oneTime=0;
fmain.document.querySelector("#move").onclick = ()=>{
     if (no == 0) {
         fmain.document.querySelector("#div").style.setProperty("height","5vw");
         fmain.document.querySelector("#move").textContent="expand";
         no = 1;
     } else {
        fmain.document.querySelector("#div").style.removeProperty("height");
        fmain.document.querySelector("#move").textContent="compress";
         no = 0;
     }
     };
     fmain.document.querySelector("#rotate").onclick = () => {
        if (oneTime == 0) {
            fmain.document.querySelector("#div").style.setProperty("transform", "translate(0%,0%) rotate(360deg)");
            oneTime = 1
        }
        else {
            fmain.document.querySelector("#div").style.setProperty("transform", "translate(0%,0%) rotate(0deg)");
            oneTime = 0}};
     fmain.document.querySelector("#F12").onclick=()=>{fmain.document.querySelector("#div").style.display="block"}; 
	 
	 fmain.document.querySelector("#F13").onclick=()=>{
		 if(timeone == 0){
			for (let i = 0; i < _cc.length; i++) {
                if (i == 12) {
                    continue;
                }
                _cc[i].style.display = "none";
            }
			 timeone = 1;
		 }
		 else{
            for (let i = 0; i < _cc.length; i++) {
                if (i == 12) {
                    continue;
                }
                _cc[i].style.display = "";
            }
			 timeone = 0;
		 }
		 }
     `;
                m.textContent = `
        #div{
		border-radius:10%;
		width:50vw;
		height:20vw;
		overflow:auto;
		transition-property:transform;
		transition-duration: 1s;
		scroll-behavior: smooth;
		scrollbar-width: none;
		}
        @media screen and (max-width:500px){
            #div{
                width:45vw;
                height:50vh;
            }
        }
	#div::-webkit-scrollbar{
		display:none;
		}
	.w3-display-middle{
		position:absolute;
		top:20%;
		left:20%;
		transform:translate(0%,0%) rotate(0deg);
		}
        ol>li{
        cursor: pointer;
        width:max-content;
        width:fit-content;
        }`;
                mm.textContent = `
       ::placeholder{
       color: red !important;
       opacity: 1 !important;
       }`;
                big_box.innerHTML = `<div id="div" class="w3-display-container w3-card-4  w3-display-middle w3-center w3-black" >
  <div style=" position: sticky;top: 0;font-size: 20px;margin-bottom:10vw">
            <span id="move" style="font-size:1em;cursor:pointer" class="material-icons  w3-ripple w3-display-topleft w3-green w3-container w3-xlarge ">compress</span>
            <span id="cancel" style="font-size:1em;cursor:pointer" class="material-icons w3-ripple w3-display-topright w3-red w3-container w3-xlarge" onclick="this.parentElement.parentElement.style.display='none'">cancel</span>
            <h5 id="rotate" class="w3-center w3-round-large w3-blue w3-display-topmiddle w3-container" style="cursor:pointer">Names</h5>
  </div>
            <ol type="1" start="1" id="ol" class="w3-left-align" style="margin-left:0px"></ol>
        </div>`;
                link_w3cs1.innerHTML = `<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">`;
                link_googleIcons1.innerHTML = `<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">`;
                let box = big_box.children[0],
                    link_w3cs = link_w3cs1.children[0],
                    link_googleIcons = link_googleIcons1.children[0];
                fmain.document.head.appendChild(link_w3cs);
                fmain.document.head.appendChild(link_googleIcons);
                fmain.document.body.appendChild(box);
                fmain.document.head.appendChild(m);
                fform.document.head.appendChild(mm);
                buttonCreate();
                setTimeout(function () {
                    document.body.appendChild(ele);
                }, 1000);
            })()
            clearInterval(checkExist);
        }
    }, 100);
    function stoperror() { return true; };
    window.onerror = stoperror;
})();