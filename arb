//cod
let sweetAlert = document.createElement("script")
sweetAlert.src = "https://sweetalert.js.org/assets/sweetalert/sweetalert.min.js",
    document.head.appendChild(sweetAlert),
    pplJoin = id("on"),
    elTarget = document.querySelector("#on"),
    fmlgiturl = 'https://raw.githubusercontent.com/Alisodsin/alisodsin.github.io/main/femaleNames.json',
    mlsgiturl = 'https://raw.githubusercontent.com/Alisodsin/alisodsin.github.io/main/males.json',
    idArray = new Set(),
    oltEsmy = new Set(),
    femaleNames = new Set(),
    messages = new Set(),
    males = new Set(),
    add = false,
    kashida = "ـ",
    blockedPPl = new Set(),
    secondRepleyers = new Set(),
    objConfig = {
        childList: true,
        subtree: true,
        attributes: true,
        characterData: false
    },
    females = document.getElementsByClassName("f"),
    allPeople = pplJoin.children,
    msg1 = "",
    input = id("ta"),
    msg2 = "على 42 منصوره , وانتى؟",
    audio = new Audio("https://alisodsin.github.io/Short.mp3"),
    bll = new Audio("https://www.soundjay.com/phone/cell-phone-1-nr0.mp3"),
    inbox = id("hs"),
    tile = id("tt"),
    onn = false,
    myNick = "",
    fucking = ["جوجل", "للموقع", "Everyone Chat", "انضم", "الشات", "وأجانب", "التسجيلات", "متحركة", "طريقة", "الموقع", "https", "Join", "المستعمل", "بالشات", "إنتظاركم", "تقنية", "تسجيل"],
    myId = "",
    msgSwitch = 0,
    names = [
        "دكر_عنيف",
        "true_man",
        "فحل_للتعشير",
        "انيكك_فويس",
        "رومانسى",
        "من_المنصوره",
        "راجل_بجد",
        "Guest_",
        "_ali_",
        "ابحث_عنكى",
        "Crazy_Kid",
        "صديق جاد",
        "غريب_الاطوار",
        "صافي الود",
        "صدى الصورة",
        "قلب من ورق",
        "شموس طيفك",
        "ساحر جفونك",
        "دنيآآآآ الحب",
        "هنروح و نيجي",
        "مالك القلب",
        "بلا ميعاد",
        "صنع بحب",
        "الضوء الساطع",
        "المحروم",
        "صافى الود",
        "معاند جروحه",
        "Before sunrise",
        "Killer smile",
        "عيش اللحظة",
        "أنا الملاذ لك",
        "لصمتي حكاية",
        "والله دنيا",
        "عيون الليل",
        "قلب من دهب",
        "أجمل حب",
        "الدنيا لحظة",
        "روح الروح",
        "مميز للغاية",
        "رجل بلا قلب",
        "loveless",
        "مكسور",
        "عساني طايح",
        "الفيلسوف",
        "ضاع الحب",
        "الغريب",
        "عاشق_الهدوء",
        "القنوع",
        "ملك روحى",
        "شوق العمر",
        "سموه الاحساس",
        "همس القلوب",
        "غريب الدار",
        "دموع القمر",
        "صمت الوداع",
        "امير بزمن حقير",
        "سفير المحبه",
        "عاشق الغروب",
        "اسير القمر",
        "ساحر القلوب",
        "العيون السود",
        "طائر النورس",
        "قصاد عينى",
        "لامكان لاوطن",
        "جفاء الريح",
        "تلج مشوى",
        "شحنه حب",
        "صمت الرجوله",
        "لعيونك انا",
        "نبع الوفا",
        "كاتم الاحزان",
        "اهات الحب",
        "متحدى زمانى",
        "عازف الاهات",
        "قلب ميت",
        "بحر الود",
        "انفاس الحب",
        "مولع بهواها",
        "عيونو سحر",
        "ملكتنى",
        "ملك بلا مملكه",
        "شموخ رجل",
        "وحيد يا ليل",
        "منحرف بس محترف",
        "عاشق الجنان",
        "المبتسم",
        "الذيب",
        "دموع الليالي",
        "دمعة شوق",
        "ضوء القمر",
        "مرسول الحب",
        "علمتني الحياة",
        "الصقر الحر",
        "طيف الأحزان",
        "لعيونك",
        "شايل جروحى بروحى",
        "صدى الشوق",
        "لغز الحياة",
        "القلب الحنون",
        "حسونه",
        "غسق الدجى",
        "صمت الاحساس",
        "الورد الابيض",
        "نهر الحزن",
        "سمو المشاعر",
        "بياع الورد",
        "سهم الغدر",
        "حب العمر",
        "لعيونك جيت",
        "غريب انا فيها",
        "وهم الاقنعه",
        "لحسه مخ",
        "طويل العمر",
    ],
    fatherDiv = document.createElement("div"),
    peopleWhoReplyAgain = document.createElement("ol"),
    buttonsContainer = document.createElement("div"),
    namesContainer = document.createElement("ol"),
    whoReply = document.createElement("ol"),
    whoLeaveAndJoin = document.createElement("ol"),
    style = document.createElement("style"),
    button1 = document.createElement("button"),
    button2 = document.createElement("button"),
    button3 = document.createElement("button"),
    button4 = document.createElement("button"),
    button5 = document.createElement("button"),
    button6 = document.createElement("button"),
    button7 = document.createElement("button"),
    button8 = document.createElement("button"),
    button9 = document.createElement("button"),
    button10 = document.createElement("button"),
    button11 = document.createElement("button"),
    button12 = document.createElement("button"),
    button13 = document.createElement("button"),
    button14 = document.createElement("button"),
    button15 = document.createElement("button"),
    button16 = document.createElement("button"),
    observer = new MutationObserver(e => {
        if (Boolean(e[0].removedNodes[0])) {
            if (secondRepleyers.has(e[0].removedNodes[0].id)) {
                let li = document.createElement("li")
                li.innerHTML = `<bdi style="color:#51b5a9">${e[0].removedNodes[0].children[1].textContent}</bdi> <bdi style="color:#fade8b">leave</bdi>`
                whoLeaveAndJoin.append(li)
                li.scrollIntoView()
                idArray.delete(e[0].removedNodes[0].id)
            }
        }
        if (elTarget.style.display) {
            namesContainer.style.display = "none"
            whoLeaveAndJoin.style.display = "none"
            peopleWhoReplyAgain.style.height = "100%"
            whoReply.style.display = "none"
        }
        else {
            namesContainer.style.display = ""
            whoLeaveAndJoin.style.display = ""
            peopleWhoReplyAgain.style.height = "50%"
            whoReply.style.display = ""
        }
    });

function runCode() {
    if (new Date().getHours() >= 2 && new Date().getHours() <= 14) {
        msg1 = "صباح الخير";
    } else {
        msg1 = "مساء الخير"
    }
    setTimeout(_ => {
        myNick = pplJoin.firstElementChild.childNodes[1].innerText
        myId = pplJoin.children[0].id
        tile.textContent = `${myNick} : ${myId}`

    }, 3000)
    let keepMsg = msg1
    function randomNamee() {
        for (let index = 0; index < 10; index++) {
            let sd = names[Math.ceil(Math.random() * names.length)]
            if (!sd) {
                continue
            }
            myNick = sd
            break;
        }
    }
    window.onkeydown = e => {


        if (e.key == "F1") {
            closeCurrentPerson();
            e.preventDefault()
        }
        else if (e.key == "F2") {
            button5.click()
            button9.click()
            e.preventDefault()
        }
        else if (e.key == "F3") {
            button12.click()
            e.preventDefault()
        }
        else if (e.key == "F4") {
            button8.click()
            e.preventDefault()
        }
        else if (e.key == "F5") {
            changeId();
            e.preventDefault()
        }
        else if (e.key == "F6") {
            button10.click()
            e.preventDefault()
        } else if (e.key == "F7") {
            blockAll();
            e.preventDefault()
        } else if (e.key == "F8") {
            blockCurrentPerson();
            e.preventDefault()
        }
        else if (e.key == "F9") {
            clearAll();
            e.preventDefault()
        } else if (e.key == "F10") {
            open("https://alisodsin.github.io/ArabyChat.htm", "_self")
            e.preventDefault()
        }
        else if (e.key == "F11") {
            socket.disconnect()
            e.preventDefault()
        }
        else if (e.key == "Control") {
            socket.connect()
            e.preventDefault()
        }
    }
    function speak(text) {
        let synth = window.speechSynthesis;
        let voices = window.speechSynthesis.getVoices();
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
    function changeId() {
        [...namesContainer.children].forEach(li => li.remove());
        [...peopleWhoReplyAgain.children].forEach(li => li.remove());
        [...whoLeaveAndJoin.children].forEach(li => li.remove());
        [...whoReply.children].forEach(li => li.remove());
        idArray.clear()
        oltEsmy.clear()
        blockedPPl.clear()
        secondRepleyers.clear()
        if (button11.innerText == "active") {

            button11.click();
        }
        randomNamee();
        let sub = "دخول+الدردشة";
        let req = new XMLHttpRequest();
        req.open("post", `https://araby.co/egypt/sub.php`);
        req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        req.send(`nk=${myNick}&ag=42&gn=m&sub=${sub}`);
        req.onload = function () {
            let parser = new DOMParser(), doc = parser.parseFromString(req.responseText, "text/html");
            socket.disconnect()
            socket.connect()
            setTimeout(_ => {
                myNick = pplJoin.firstElementChild.childNodes[1].innerText
                myId = pplJoin.children[0].id
                tile.textContent = `${myNick} : ${myId}`
            }, 3000)
        }
    }
    function sendMsgToAllPeople() {
        let num = 0
        for (let person of allPeople) {
            let _id = person.id
            socket.emit('is', [_id, msg1]);
            num++
        }
        swal({
            text: `you send mseesage to ${num} persons `,
            timer: 3000,
        });
    }
    function sendMsgToAllFemales() {
        let num = 0
        for (let female of females) {
            if (checkForFemaleName(female.children[1].textContent, femaleNames)) {
                socket.emit('is', [female.id, msg1]);
                num++
            }
        }
        swal({
            text: `you send mseesage to ${num} females `,
            timer: 3000,
        });
    }
    function blockCurrentPerson() {
        let _id = input.getAttribute("name")
        id("hsp").click()
        id(_id).children[1].click() // block 
        id(_id).children[2].click() // close
        blockedPPl.add(_id)
        id("onp").click()
    }
    socket.addEventListener("connect", _ => {
        speak("connected");
    })
    socket.addEventListener("disconnect", _ => {
        speak("disconnected");
    })
    function closeCurrentPerson() {
        let _id = input.getAttribute("name")
        id("hsp").click()
        id(_id).children[2].click() // close
        id("onp").click()
    }
    function blockAll() {
        let array = [...inbox.children];
        for (const iterator of array) {
            iterator.children[1].click()
            iterator.children[2].click()
        }
        id("onp").click()
    }
    function clearAll() {
        [...namesContainer.children].forEach(li => li.remove());
        [...peopleWhoReplyAgain.children].forEach(li => li.remove());
        [...whoLeaveAndJoin.children].forEach(li => li.remove());
        [...whoReply.children].forEach(li => li.remove());
        let array = [...inbox.children];
        for (const iterator of array) {
            iterator.children[2].click()
        }
        id("onp").click()
    }
    socket.on("ja", data => {
        if (onn) {
            if (data.includes("f") && !pplJoin.style.display && !idArray.has(data[0])) {
                if (oltEsmy.has(data[0])) {
                    let li = document.createElement("li")
                    li.innerHTML = `<bdi style="color:#51b5a9">${data[1]}</bdi> <bdi style="color:#fade8b">join</bdi>`
                    whoLeaveAndJoin.append(li)
                    li.scrollIntoView()
                    socket.emit("is", [data[0], "الو فينك؟"])
                }
                else {
                    if (checkForFemaleName(data[1], femaleNames)) {
                        let name = document.createElement("li")
                        name.innerText = data[1];
                        socket.emit('is', [data[0], msg1]);
                        name.style.cursor = "pointer";
                        name.style.width = "fit-content";
                        name.setAttribute("custom_id", data[0]);
                        name.onclick = _ => {
                            socket.emit("is", [data[0], "الو"])
                            socket.emit("is", [data[0], "مشغوله؟"])
                            name.style.color = "red"
                        }
                        namesContainer.appendChild(name);
                        name.scrollIntoView();
                        idArray.add(data[0]);

                    }
                }
            }
            if (!pplJoin.style.display) {
                tile.textContent = `UsersCount : ${allPeople.length}`
                id(data[0]).scrollIntoView()
            }
        }
    });
    function checkBad(da) {
        for (let bad of fucking) {
            if (da.includes(bad)) {
                return false
            }
        }
        return true;
    }
    socket.on("ig", data => {
        if (checkBad(data[2])) {
            if (!blockedPPl.has(data[0]) && !oltEsmy.has(data[0])) {
                let thisPersonReplyMe = document.createElement("li")
                thisPersonReplyMe.innerHTML = `<bdi style="color:#51b5a9">${data[1]}</bdi> ➡ <bdi style="color:#fade8b">${data[2]}</bdi>`
                thisPersonReplyMe.style.cursor = "pointer"
                thisPersonReplyMe.style.width = "fit-content"
                thisPersonReplyMe.onclick = _ => {
                    try {
                        id(data[0]).children[0].click()
                    }
                    catch (_) {
                        thisPersonReplyMe.innerText = "doesn't exist"
                    }
                }
                whoReply.appendChild(thisPersonReplyMe)
                thisPersonReplyMe.scrollIntoView()
                socket.emit("is", [data[0], msg2])
                audio.play().catch(_ => true)
                if (add && !messages.has(data[2].trim())) {
                    messages.add(data[2].trim());
                }
                oltEsmy.add(data[0]);
            }
            else {
                if (!blockedPPl.has(data[0])) {

                    let secondRepleyer = document.createElement("li")
                    secondRepleyer.innerHTML = `<bdi style="color:#51b5a9">${data[1]}</bdi> ➡ <bdi style="color:#fade8b">${data[2]}</bdi>`
                    bll.play().catch(_ => true)
                    secondRepleyer.style.color = "white"
                    secondRepleyer.style.cursor = "pointer"
                    secondRepleyer.style.width = "fit-content"
                    secondRepleyers.add(data[0])
                    secondRepleyer.onclick = _ => {
                        try {
                            id(data[0]).children[0].click()
                        }
                        catch (_) {
                            secondRepleyer.innerText = "doesn't exist"
                        }
                    }
                    peopleWhoReplyAgain.appendChild(secondRepleyer)
                    secondRepleyer.scrollIntoView()

                }
            }
        }
        else {
            document.getElementById(data[0]).children[2].click();
            document.querySelector(`[custom_id=${data[0]}]`)?.remove();
        }


    })
    buttonsContainer.style.display = "flex"
    buttonsContainer.style.justifyContent = "space-around"
    buttonsContainer.style.flexWrap = "wrap"
    buttonsContainer.style.height = "13vh"
    buttonsContainer.style.alignItems = "center"
    buttonsContainer.id = "buttonsContainer"
    button1.innerText = "msgAll"
    button1.onclick = sendMsgToAllPeople
    button2.innerText = "msgFs"
    button2.onclick = sendMsgToAllFemales
    button3.innerText = "block"
    button3.style.backgroundColor = "red"
    button3.style.color = "white"
    button3.onclick = blockCurrentPerson
    button4.innerText = "blockAll"
    button4.onclick = blockAll
    button5.innerText = "chgMsg1"
    button5.onclick = _ => {
        msg1 = prompt("type msg", msg1)
    }
    button6.innerText = "cls"
    button6.onclick = clearAll
    button7.innerText = "close"
    button7.style.backgroundColor = "green"
    button7.style.color = "white"
    button7.onclick = closeCurrentPerson
    button8.innerText = "F4"
    button8.onclick = _ => {
        input.value = "على 42 منصوره"
        id("snd").click()
        input.value = "وانتى؟"
        id("snd").click()
    }
    button9.innerText = "chMsg2"
    button9.onclick = _ => {
        msg2 = prompt("type msg", msg2)
    }

    button10.innerText = "F6"
    button10.onclick = _ => {
        socket.emit("is", [pplJoin.children[0].id, msg1])
    }
    button11.innerText = "inactive"
    button11.onclick = _ => {
        if (!onn) {
            onn = true
            button11.innerText = "active"
        }
        else {
            onn = false
            button11.innerText = "inactive"
        }
    }
    button12.innerText = "F3"
    button12.onclick = _ => {
        input.value = "الو"
        id("snd").click()
        input.value = "مشغوله؟"
        id("snd").click()

    }
    button13.innerText = "gdMsg"
    button13.onclick = _ => {
        if (msgSwitch == 0) {
            msg1 = "تتناكى صوت بعنف؟";
            msg2 = "جتسى, تلجرام او جستوك عندك ايه؟";
            button13.innerText = "bdMsg"
            msgSwitch = 1
        }
        else {
            msg1 = keepMsg
            msg2 = "على 42 سنه من المنصوره , ممكن نتعرف؟";
            button13.innerText = "gdMsg"
            msgSwitch = 0
        }
    }
    button14.innerText = "IdChanger"
    button14.onclick = changeId;
    button15.innerText = "strgcls"
    button15.onclick = _ => {
        location.reload();
    }
    button16.innerText = "notad"
    button16.onclick = _ => {
        if (button16.innerText == "notad") {
            add = true;
            button16.innerText = "add";
        }
        else {
            add = false;
            button16.innerText = "notad";
        }
    }
    namesContainer.style.backgroundColor = "#0b2359"
    namesContainer.style.color = "#f3ac3c"
    namesContainer.style.height = "50%"
    namesContainer.style.overflow = "auto"
    namesContainer.style.listStylePosition = "inside"
    namesContainer.style.whiteSpace = "pre"
    namesContainer.id = "namesContainer"
    peopleWhoReplyAgain.style.backgroundColor = "rgb(63,1,14)"
    peopleWhoReplyAgain.style.color = "#f7f3d7"
    peopleWhoReplyAgain.style.height = "50%"
    peopleWhoReplyAgain.style.overflow = "auto"
    peopleWhoReplyAgain.style.listStylePosition = "inside"
    peopleWhoReplyAgain.style.whiteSpace = "pre"
    peopleWhoReplyAgain.id = "peopleWhoReplyAgain"
    buttonsContainer.append(button1, button2, button3, button4, button5, button9, button6, button7, button8, button10, button11, button12, button13, button14, button15, button16)
    fatherDiv.style.display = "flex"
    fatherDiv.style.flexDirection = "column"
    fatherDiv.style.height = "30vh"
    whoReply.style.zIndex = "1"
    whoReply.style.width = "50vw"
    whoReply.style.height = "18vh"
    whoReply.style.listStyleType = "none"
    whoReply.style.whiteSpace = "pre"
    whoReply.style.borderRadius = "10%"
    whoReply.style.overflow = "auto"
    whoReply.className = "w3-display-container w3-card-4 w3-display-bottomleft w3-black"
    whoLeaveAndJoin.style.zIndex = "1"
    whoLeaveAndJoin.style.width = "50vw"
    whoLeaveAndJoin.style.height = "16vh"
    whoLeaveAndJoin.style.listStyleType = "none"
    whoLeaveAndJoin.style.whiteSpace = "pre"
    whoLeaveAndJoin.style.borderRadius = "10%"
    whoLeaveAndJoin.style.overflow = "auto"
    whoLeaveAndJoin.className = "w3-display-container w3-card-4 w3-display-bottommiddle w3-black"
    fatherDiv.append(namesContainer, peopleWhoReplyAgain)
    tile.before(fatherDiv)
    tile.before(buttonsContainer)
    tile.after(whoReply)
    tile.after(whoLeaveAndJoin)

    style.textContent = `
          @media screen and (max-width:768px){
          #buttonsContainer{
              display:flex;
              justify-content: space-around;
              flex-wrap: wrap;
              height: 19vw;
              align-items: stretch;
          }
          button{
           width: 17% !important;
           border-radius:50% !important;
           height:auto !important;
          }
          }
          @media screen and (max-height:500px){
          #hsp,#onp,#tt{
            display:none !important;
           }
        }
          button{
           width:13%;
           border-radius:10%;
          }
        .w3-display-container {
            position: relative
        }
        .w3-card-4 {
            box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19)
        }
        .w3-display-bottomleft {
            position: absolute;
            left: 1%;
            bottom: 0
        }
        .w3-black {
            color: #fff !important;
            background-color: #000 !important
        }

        .w3-display-bottommiddle {
            position: absolute;
            left: 26%;
            bottom:22%;
            transform: translate(-50%, 0%);
            -ms-transform: translate(-50%, 0%)
        }`
    function checkForFemaleName(str, set) {
        if (str?.includes("|")) {
            return false
        }
        if (str?.includes(kashida)) {
            str = str.replaceAll(kashida, "")
        }

        if (set.has(str?.toLowerCase())) {
            return true
        }
        let words = str?.split(/[^\p{L}\p{N}]+/ug).filter(x => x)
        for (const word of words) {
            if (males.has(word.toLowerCase())) {
                return false;
            }
        }
        for (const word of words) {
            if (set.has(word.toLowerCase())) {
                return true;
            }
        }
        words = str?.split(/[^\p{L}]/ug).filter(x => x);
        for (const word of words) {
            if (males.has(word.toLowerCase())) {
                return false;
            }
        }
        for (const word of words) {
            if (set.has(word.toLowerCase())) {
                return true;
            }
        }
        words = str?.split(/(\b[\p{L}\p{M}]+\b|\u00A0|_|\s)/ug).filter(x => x)
        for (const word of words) {
            if (set.has(word.toLowerCase())) {
                return true;
            }
        }
        words = str?.split(/(?=[A-Z|\u00A0|_|\s])/ug).filter(x => x);
        for (const word of words) {
            if (set.has(word.toLowerCase())) {
                return true;
            }
        }
        if (/ة[^\u0020\u00A0]/.test(str)) {
            let stro = str?.replaceAll("ة", "ة ")
            words = stro.split(/\p{Emoji}|[^\p{L}]/ug).filter(x => x)
            for (const word of words) {
                if (males.has(word.toLowerCase())) {
                    return false;
                }
                if (set.has(word)) {
                    return true
                }
            }
        }
        if (/ء[^\u0020\u00A0]/.test(str)) {
            let stro = str?.replaceAll("ء", "ء ")
            words = stro.split(/\p{Emoji}|[^\p{L}]/ug).filter(x => x);
            for (const word of words) {
                if (males.has(word.toLowerCase())) {
                    return false;
                }
                if (set.has(word)) {
                    return true
                }
            }
        }
        if (/د[^\u0020\u00A0]/.test(str)) {
            let stro = str?.replaceAll("د", "د ")
            words = stro.split(/\p{Emoji}|[^\p{L}]/ug).filter(x => x);
            for (const word of words) {
                if (males.has(word.toLowerCase())) {
                    return false;
                }
                if (set.has(word)) {
                    return true
                }
            }
        }
        if (/^(ال|أل)/.test(str)) {
            let stro = str.replaceAll(/^(ال|أل)/ug, "")
            words = stro.split(/\p{Emoji}|[^\p{L}]/ug).filter(x => x)
            for (const word of words) {
                if (males.has(word.toLowerCase())) {
                    return false;
                }
                if (set.has(word)) {
                    return true
                }
            }
        }
        return false;
    }

    document.head.appendChild(style)
    observer.observe(elTarget, objConfig)
    id("hmp").remove()
    id("nwp").remove()
    id("nt").style.opacity = "0"
    id("onp").click()
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
async function go() {
    femaleNames = await fetchJsons(fmlgiturl);
    males = await fetchJsons(mlsgiturl);
    runCode();
}
go();