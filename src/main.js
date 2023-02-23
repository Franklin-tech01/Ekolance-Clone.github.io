const hams = document.querySelector(".ham")
const menu = document.querySelector(".nav__link")

hams.addEventListener("click",() => {
    hams.classList.toggle("active");
    menu.classList.toggle("active");
})

document.querySelector(".link").forEach(n => n.addEventListener("click", () => {
    hams.classList.remove("active")
    menu.classList.remove("active")
}))