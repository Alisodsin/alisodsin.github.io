let ol = document.createElement("ol");
ol.style.lineHeight = "25px";
let previousState = new Set();
let p = document.createElement("h2");
let up = document.createElement("div");
p.id = "begin";
p.innerText = "JavaScript Index";
p.style.color = "white";
ol.style.height = "150px";
ol.style.overflow = "auto";
ol.style.border = "1px solid #00ffff";
ol.style.borderRadius = "5%"
document.body.prepend(p, ol);
let h3 = document.getElementsByTagName("h3"), num = 1;
Array.from(h3).forEach(element => {
    element.id = `h${num}`;
    num++;
    let li = document.createElement("li");
    li.style.listStyle = "decimal";
    li.style.color = "#00ffff"
    let a = document.createElement("a");
    a.href = `#${element.id}`;
    a.style.textDecoration = "none";
    a.style.color = "#00ffff";
    a.textContent = element.textContent;
    a.onclick = function (e) {
        if ([...previousState].at(-1)) {
            let sub = document.getElementById([...previousState].at(-1));
            sub.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.toggleAttribute("open");
            sub.parentElement.parentElement.parentElement.toggleAttribute("open");
        }
        let sub = document.getElementById(element.id);
        sub.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.toggleAttribute("open");
        sub.parentElement.parentElement.parentElement.toggleAttribute("open");
        sub.scrollIntoView();
        previousState.add(element.id);
        e.preventDefault();
    }
    li.appendChild(a);
    ol.appendChild(li);
});
up.innerText = "⬆️";
up.style.position = "fixed";
up.style.bottom = "0px";
up.style.right = "0px";
up.style.fontSize = "3rem";
up.style.cursor = "pointer";
document.body.prepend(up);
up.onclick = _ => {
    p.scrollIntoView();
} 