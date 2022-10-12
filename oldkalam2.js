let x = fmain.document.getElementsByClassName("main-nickg")
  , elsora = fmain.document.querySelector("#mainplusbtn")
  , y = fmain.document.getElementsByTagName("font")
  , elTarget = fmain.document.querySelector(".main-span")
  , pp = "#مصر"
  , audio = new Audio("https://soundbible.com/mp3/A-Tone-His_Self-1266414414.mp3")
  , bll = new Audio("https://www.soundjay.com/phone/cell-phone-1-nr0.mp3")
  , gn = fmain.document.getElementsByClassName("main-item")
  , msg = "صباح الخير"
  , toto = /^Kalamngy_\d{4}$/
  , reg = 0
  , ppls = []
  , _cc = fmain.document.getElementById("F1").parentElement.children
  , msgt = []
  , shown = parent.fmain.document.createElement("span")
  , currnt = []
  , sentme = []
  , synth = window.speechSynthesis
  , voices = window.speechSynthesis.getVoices();
shown.innerText = " ✓";
if (new Date().getHours() >= 2 && new Date().getHours() <= 14) {
    msg = "صباح الخير";
} else {
    msg = "مساء الخير"
}
elsora.style.display = "none";
vkpy = msg;
function speak(text) {
    if (text !== '') {
        var utterThis = new SpeechSynthesisUtterance(text);
        var selectedOption = "Microsoft Anna - English (United States)";
        for (i = 0; i < voices.length; i++) {
            if (voices[i].name === selectedOption) {
                utterThis.voice = voices[i];
                break;
            }
        }
        utterThis.pitch = "0.7";
        utterThis.rate = "0.7";
        synth.speak(utterThis);
    }
}
;different_return = (function() {
    let x = 0;
    return function() {
        return x += 1
    }
}
)();
function uniCharCode(event) {
    let char = event.which || event.keyCode;
    if (char == 119 && fwindowlist.currentwindow !== Object.keys(parent.fwindowlist.Witems)[1]) {
        ppls = ppls.filter((x)=>{
            return x != fwindowlist.currentwindow
        }
        );
        parent.fwindowlist.sendcmd(`/winclose ${fwindowlist.currentwindow}`);
        parent.fmain.document.body.querySelectorAll("#ol>li").forEach(function(x, y, z) {
            if (x.textContent.startsWith(fwindowlist.currentwindow)) {
                let block = parent.fmain.document.createElement("span");
                block.className = "material-icons w3-text-red w3-small";
                block.textContent = "block";
                x.appendChild(block);
                fmain.document.body.querySelector("#ol").appendChild(x);
                x.scrollIntoView();
            }
        });
        return false;
    } else if (char == 112 && fwindowlist.currentwindow !== Object.keys(parent.fwindowlist.Witems)[1]) {
        parent.fwindowlist.sendcmd(`/winclose ${fwindowlist.currentwindow}`);

        return false;
    } else if (char == 120 && fwindowlist.currentwindow == Object.keys(parent.fwindowlist.Witems)[1]) {

        fmain.document.getElementById("F9").click();

    } else if (char == 112 && fwindowlist.currentwindow == Object.keys(parent.fwindowlist.Witems)[1]) {
        return false;
    } else if (char == 116) {
        parent.fwindowlist.sendcmd("/query Status");
        function fsl() {
            parent.fwindowlist.sendcmd("/reconnect");
        }
        ;setTimeout(fsl, 2000);
        return false;
    } else if (char == 115 && fwindowlist.currentwindow !== Object.keys(parent.fwindowlist.Witems)[1]) {
        fwindowlist.sendcmd_real("say", "انا على 37 سنه من المنصوره", fwindowlist.currentwindow);
        function fsl() {
            fwindowlist.sendcmd_real("say", "وانتى؟", fwindowlist.currentwindow);
        }
        setTimeout(fsl, 1000);
    } else if (char == 117) {
        fwindowlist.sendcmd_real("say", msg, fwindowlist.mynickname);
        function fsl() {
            fwindowlist.sendcmd_real("say", `/winclose ${fwindowlist.mynickname}`, fwindowlist.currentwindow)
        }
        ;setTimeout(fsl, 1000);
        return false;
    } else if (char == 118) {
        parent.fwindowlist.sendcmd(`/query ${Object.keys(parent.fwindowlist.Witems)[1]}`);
        return false;
    } else if (char == 114 && fwindowlist.currentwindow !== Object.keys(parent.fwindowlist.Witems)[1]) {
        fwindowlist.sendcmd_real("say", "الو؟", fwindowlist.currentwindow);
        fwindowlist.sendcmd_real("say", "مشغوله؟", fwindowlist.currentwindow);
        return false;
    } else if (char == 113) {
        msg = prompt("msg1 is:", msg);
        return false;
    } else if (char == 121) {
        if (reg == 0) {

            toto = /^.{1,6}$/;
            fmain.document.querySelector("#names").innerText = "short names";
            reg++
        } else if (reg == 1) {
            toto = /^[\u0621-\u064A\xA0\x5F\0-9]{1,7}$/;
            fmain.document.querySelector("#names").innerText = "arabic short names";
            reg++
        } else if (reg == 2) {
            toto = /\d+$/;
            fmain.document.querySelector("#names").innerText = "Names ended with digits";
            reg++
        } else if (reg == 3) {
            toto = /^[\u0621-\u064A\xA0\x5F\0-9]+$/;
            fmain.document.querySelector("#names").innerText = "arabic names";
            reg++
        } else if (reg == 4) {
            toto = /^.+$/;
            fmain.document.querySelector("#names").innerText = "any name";
            reg++
        } else if (reg == 5) {
            toto = /(^.{1,5}$|^Kalamngy_)/i;
            fmain.document.querySelector("#names").innerText = "just Kalamngy or short";
            reg++
        } else if (reg == 6) {
            toto = /^Kalamngy_\d{4}$/;
            fmain.document.querySelector("#names").innerText = "just Kalamngy";
            reg = 0
        }
        ;return false
    } else if (char == 122) {

        fwindowlist.sendcmd_real("say", "/quit", fwindowlist.currentwindow);
        return false;

    } else if (char == 40) {

        let sentme = Object.keys(parent.fwindowlist.Witems);
        for (let i = 0; i < sentme.length; i++) {
            if (sentme[i] == Object.keys(parent.fwindowlist.Witems)[1] || sentme[i] == Object.keys(parent.fwindowlist.Witems)[0]) {
                continue
            }
            fwindowlist.sendcmd_real("say", `/winclose ${sentme[i]}`)
        }
        ;parent.fwindowlist.sendcmd(`/query ${Object.keys(parent.fwindowlist.Witems)[1]}`);

    } else if (char == 39) {
        ppls = [fwindowlist.mynickname];
        currnt = [fwindowlist.mynickname];
        msgt = [fwindowlist.mynickname];
    } else if (char == 38) {

        if (!msg.includes("من")) {
            msg = "انيكك فويس؟";
            fmain.document.querySelector("#names").innerText = "the bad";
        } else {
            msg = vkpy;
            fmain.document.querySelector("#names").innerText = "the good";
        }
    }
}
;fform.onkeydown = uniCharCode;
ppls.push(fwindowlist.mynickname);
fmain.document.querySelector("#F1").onclick = ()=>{
    if (fwindowlist.currentwindow !== Object.keys(parent.fwindowlist.Witems)[1]) {
        parent.fwindowlist.sendcmd(`/winclose ${fwindowlist.currentwindow}`);
    }
}
;
fmain.document.querySelector("#F2").onclick = ()=>{
    msg = prompt("msg1 is:", msg);
}
;
fmain.document.querySelector("#F3").onclick = ()=>{
    if (fwindowlist.currentwindow !== Object.keys(parent.fwindowlist.Witems)[1]) {
        fwindowlist.sendcmd_real("say", "الو؟", fwindowlist.currentwindow);
        fwindowlist.sendcmd_real("say", "مشغوله؟", fwindowlist.currentwindow);
    }
}
;
fmain.document.querySelector("#F4").onclick = ()=>{
    if (fwindowlist.currentwindow !== Object.keys(parent.fwindowlist.Witems)[1]) {
        fwindowlist.sendcmd_real("say", "انا على 37 سنه من المنصوره", fwindowlist.currentwindow);
        function fsl() {
            fwindowlist.sendcmd_real("say", "وانتى؟", fwindowlist.currentwindow);
        }
        setTimeout(fsl, 1000);
    }
}
;
fmain.document.querySelector("#F5").onclick = ()=>{
    parent.fwindowlist.sendcmd("/query Status");
    function fsl() {
        parent.fwindowlist.sendcmd("/reconnect");
    }
    ;setTimeout(fsl, 2000);
}
;
fmain.document.querySelector("#F6").onclick = ()=>{
    fwindowlist.sendcmd_real("say", msg, fwindowlist.mynickname);
    if (msg.includes("من")) {
        parent.fwindowlist.sendcmd_real("say", "؟", fwindowlist.mynickname);
    }
    ;function fsl() {
        fwindowlist.sendcmd_real("say", `/winclose ${fwindowlist.mynickname}`, fwindowlist.currentwindow)
    }
    ;setTimeout(fsl, 1000);
}
;
fmain.document.querySelector("#F7").onclick = ()=>{
    parent.fwindowlist.sendcmd(`/query ${Object.keys(parent.fwindowlist.Witems)[1]}`);

}
;
fmain.document.querySelector("#F8").onclick = ()=>{
    if (fwindowlist.currentwindow !== Object.keys(parent.fwindowlist.Witems)[1] && fwindowlist.currentwindow !== fwindowlist.mynickname) {
        ppls = ppls.filter((x)=>{
            return x != fwindowlist.currentwindow
        }
        );
        parent.fwindowlist.sendcmd(`/winclose ${fwindowlist.currentwindow}`);
        parent.fmain.document.body.querySelectorAll("#ol>li").forEach(function(x, y, z) {
            if (x.textContent.startsWith(fwindowlist.currentwindow)) {
                let block = parent.fmain.document.createElement("span");
                block.className = "material-icons w3-text-red w3-small";
                block.textContent = "block";
                x.appendChild(block);
                fmain.document.body.querySelector("#ol").appendChild(x);
                x.scrollIntoView();
            }
        });
    }
}
;
fmain.document.querySelector("#F9").onclick = ()=>{
    let sentme = Object.keys(parent.fwindowlist.Witems);
    for (let i = 0; i < sentme.length; i++) {
        if (sentme[i] == Object.keys(parent.fwindowlist.Witems)[1] || sentme[i] == Object.keys(parent.fwindowlist.Witems)[0]) {
            continue
        }
        fwindowlist.sendcmd_real("say", `/winclose ${sentme[i]}`)
    }
    ;parent.fwindowlist.sendcmd(`/query ${Object.keys(parent.fwindowlist.Witems)[1]}`);
}
;
fmain.document.querySelector("#names").onclick = ()=>{
    if (reg == 0) {

        toto = /^.{1,6}$/;
        fmain.document.querySelector("#names").innerText = "*[<=5]";
        reg++
    } else if (reg == 1) {
        toto = /^[\u0621-\u064A\xA0\x5F\0-9]{1,7}$/;
        fmain.document.querySelector("#names").innerText = "ar<=5";
        reg++
    } else if (reg == 2) {
        toto = /\d+$/;
        fmain.document.querySelector("#names").innerText = "*digts";
        reg++
    } else if (reg == 3) {
        toto = /^[\u0621-\u064A\xA0\x5F\0-9]+$/;
        fmain.document.querySelector("#names").innerText = "ar*";
        reg++
    } else if (reg == 4) {
        toto = /^.+$/;
        fmain.document.querySelector("#names").innerText = "*";
        reg++
    } else if (reg == 5) {
        toto = /(^.{1,5}$|^Kalamngy_)/i;
        fmain.document.querySelector("#names").innerText = "k|short";
        reg++
    } else if (reg == 6) {
        toto = /^Kalamngy_\d{4}$/;
        fmain.document.querySelector("#names").innerText = "^k$";
        reg = 0
    }
}
;
fmain.document.querySelector("#F10").onclick = ()=>{
    open("https://kalamngy.netlify.app/", "_self");
}
;
fmain.document.querySelector("#F11").onclick = ()=>{
    fwindowlist.sendcmd_real("say", "/quit", fwindowlist.currentwindow);
}
;
fmain.document.querySelector("#F12").onclick = ()=>{}
;
function fnHandler() {

    try {
        if (toto.test(x[x.length - 1].innerText) && /joined/i.test(x[x.length - 1].parentElement.innerText) && !msgt.includes(x[x.length - 1].innerText)) {
            parent.fwindowlist.sendcmd_real("say", msg, x[x.length - 1].innerText);
            if (msg.includes("من")) {
                parent.fwindowlist.sendcmd_real("say", "لو حبه تعالى نتكلم صوت جيتسى ولو جريئه ممكن نتقابل", x[x.length - 1].innerText);
            }
            ;ppls.push(x[x.length - 1].innerText);
            msgt.push(x[x.length - 1].innerText);
            let li = document.createElement("li");
            li.innerText = ppls[ppls.length - 1];
            li.onclick = function() {
                fwindowlist.sendcmd(`/query ${this.innerText}`);
                fwindowlist.sendcmd_real("say", "الو؟", this.innerText);
                fwindowlist.sendcmd_real("say", "مشغوله؟", this.innerText);
                setTimeout(function() {
                    fwindowlist.sendcmd(`/winclose ${li.innerText}`);
                }, 1500);
            }
            ;
            fmain.document.querySelector("#ol").appendChild(li);
            li.scrollIntoView();
            fmain.document.querySelector("#div").style.setProperty("top", "15%");
            setTimeout(()=>{
                fmain.document.querySelector("#div").style.setProperty("top", "20%");
            }
            , 100);
            parent.fwindowlist.sendcmd(`/winclose ${y[y.length - 1].childNodes[1].innerText}`);
        }
    } catch (err) {
        return true;
    }
}
;let observer = new MutationObserver(e=>{
    fnHandler();
    addedNodes = e[0].addedNodes;
    removedNodes = e[0].removedNodes;
    join = addedNodes[addedNodes.length - 1].children[1].childNodes[2];
    if (join) {
        console.log(join.previousElementSibling.textContent);

    }
    ;

}
)
  , objConfig = {
    childList: true,
    subtree: true,
    attributes: false,
    characterData: false
};
timeone = 0;
observer.observe(elTarget, objConfig);
setInterval(function() {
    parent.fwindowlist.sendcmd(`/clear ${Object.keys(parent.fwindowlist.Witems)[1]}`)
}, 60000);
let xxx = fwindowlist.document.getElementsByClassName("wlist-chooser")
  , elTargete = fwindowlist.document.querySelector(".wlist-table")
  , yyy = fwindowlist.document.getElementsByClassName("wlist-infon");

function fnHandlere() {
    try {
        if (yyy[yyy.length - 1].innerText == "!" && (ppls.includes(yyy[yyy.length - 1].previousElementSibling.innerText) || yyy[yyy.length - 1].previousElementSibling.innerText.includes("Guest"))) {
            parent.fwindowlist.sendcmd(`/query ${yyy[yyy.length - 1].previousElementSibling.innerText}`);
            audio.play();
            fmain.document.body.querySelectorAll("#ol>li").forEach(function(x, y, z) {
                if (x.textContent.startsWith(yyy[yyy.length - 1].previousElementSibling.innerText)) {
                    x.appendChild(shown);
                    fmain.document.body.querySelector("#ol").appendChild(x);
                    x.scrollIntoView();
                }
            });
        } else {
            parent.fwindowlist.sendcmd(`/winclose ${yyy[yyy.length - 1].previousElementSibling.innerText}`);
        }
    } catch (err) {
        return true;
    }
}
let observere = new MutationObserver(fnHandlere)
  , objConfige = {
    childList: true,
    subtree: true,
    attributes: false,
    characterData: false
};
fmain.nickmenu = function(event, nick) {

    if (!ppls.includes(nick)) {
        ppls.push(nick);
        currnt.push(nick);
        msgt.push(nick);
    }
    ;parent.fwindowlist.sendcmd_real("say", msg, nick);
    if (msg.includes("من")) {
        parent.fwindowlist.sendcmd_real("say", "لو حبه تعالى نتكلم صوت جيتسى ولو جريئه ممكن نتقابل", x[x.length - 1].innerText);
    }
    ;fwindowlist.sendcmd_real("say", `/winclose ${nick}`)
}
;
observere.observe(elTargete, objConfige);
parent.fmain.document.getElementById("menu").remove();
parent.fmain.document.getElementById("mainplusbtn").click();
parent.fform.addEventListener("contextmenu", function(e) {
    e.stopPropagation()
}, true);
parent.fmain.addEventListener("contextmenu", function(e) {
    e.stopPropagation()
}, true);
spin = 0;
let no = 0
  , oneTime = 0;
fmain.document.querySelector("#move").onclick = ()=>{
    if (no == 0) {
        fmain.document.querySelector("#div").style.setProperty("height", "5vw");
        fmain.document.querySelector("#move").textContent = "expand";
        no = 1;
    } else {
        fmain.document.querySelector("#div").style.removeProperty("height");
        fmain.document.querySelector("#move").textContent = "compress";
        no = 0;
    }
}
;
fmain.document.querySelector("#rotate").onclick = ()=>{
    if (oneTime == 0) {
        fmain.document.querySelector("#div").style.setProperty("transform", "translate(0%,0%) rotate(360deg)");
        oneTime = 1
    } else {
        fmain.document.querySelector("#div").style.setProperty("transform", "translate(0%,0%) rotate(0deg)");
        oneTime = 0
    }
}
;

fmain.document.querySelector("#F12").onclick = ()=>{
    if (fmain.document.querySelector("#div").style.display == "block") {
        fmain.document.querySelector("#div").style.display = "none"
    } else {
        fmain.document.querySelector("#div").style.display = "block"
    }
}
;

fmain.document.querySelector("#F13").onclick = ()=>{
    if (timeone == 0) {
        for (let i = 0; i < _cc.length; i++) {
            if (i == 12) {
                continue;
            }
            _cc[i].style.display = "none";
        }
        timeone = 1;
    } else {
        for (let i = 0; i < _cc.length; i++) {
            if (i == 12) {
                continue;
            }
            _cc[i].style.display = "";
        }
        timeone = 0;
    }
}
;

fmain.document.querySelector("#F14").onclick = ()=>{
    parent.fwindowlist.hideuserlist();
}