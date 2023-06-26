let names = [
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
]
let changNmae = document.querySelector("#changeName")
let nameRandom = document.querySelector("#nameRandom")
let index = 0
let nms = document.querySelector("#nms")
let namInput = document.getElementsByName("nk")[0]
function randomNamee() {
    for (let index = 0; index < 10; index++) {

        let sd = names[Math.ceil(Math.random() * names.length)]
        document.getElementsByName("ag")[0].value = 35
        if (!sd) {
            continue
        }
        namInput.value = sd
        break;
    }
}
let uniCharCode = _ => {
    namInput.value = names[index]
    index++
    if (index == names.length) {
        index = 0
    }
}
document.getElementsByName("ag")[0].value = 35
document.getElementById("male").checked = true
changNmae.onclick = uniCharCode
nameRandom.onclick = randomNamee
for (let name of names) {
    let opt = document.createElement("option")
    opt.value = name
    nms.appendChild(opt)
}