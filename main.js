const hamburger_icon = document.querySelector(".hamburger_icon")
const item_nav_mobile = document.querySelectorAll(".item_nav_mobile")
const toggleMenu = () => {
    item_nav_mobile.forEach(element => {
        element.classList.toggle("toggleMenu")
    })
    console.log("hello")
}
hamburger_icon.addEventListener("click", toggleMenu, false)