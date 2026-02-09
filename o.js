let ol = document.createElement("ol")
let p = document.createElement("h2")
p.id = "begin"
let up = document.createElement("div")
let a = document.createElement("a")
a.href = `#${p.id}`


p.innerText = "Index"
ol.style.height = "150px"
ol.style.overflow = "auto"
ol.style.border = "1px solid black"
document.body.prepend(p, ol)
let h3 = document.getElementsByTagName("h3"), num = 0

Array.from(h3).forEach(element => {
    element.id = `h${num}`
    num++
    let li = document.createElement("li")
    let a = document.createElement("a")
    a.href = `#${element.id}`
    a.innerText = element.innerText
    li.appendChild(a)

    ol.appendChild(li)
});
up.innerText = "⬆️"
up.style.position = "fixed"
up.style.bottom = "0px"
up.style.right = "0px"
up.style.fontSize = "3rem"
up.style.cursor = "pointer"
document.body.appendChild(up)
up.onclick = _ => {

    a.click()
}