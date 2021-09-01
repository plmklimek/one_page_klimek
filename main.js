const hamburger_icon = document.querySelector(".hamburger_icon")
const item_nav_mobile = document.querySelectorAll(".item_nav_mobile")
const left_arrow = document.querySelector(".left-arrow")
const right_arrow = document.querySelector(".right-arrow")
const slider_images = document.querySelectorAll(".slider_image")

slider_images.forEach((element,index,array)=> {
    if(index != slider_images.length - 1){
        element.classList.toggle("image_hidden")
    }
})

const getNumber = (min, max, val) => {
    if(val < min){
        return max
    }
    else if(val > max){
        return min
    }
    else{
        return val
    }
    
}

const toggleMenu = () => {
    item_nav_mobile.forEach(element => {
        element.classList.toggle("toggleMenu")
    })
    console.log("hello")
}
const beforeImage = () => {
    let block = 0
    slider_images.forEach((element,index,array)=> {
        if(element.classList.length == 1 && block == 0){
            element.classList.toggle("image_hidden")
            slider_images[getNumber(0, 2, index - 1)].classList.toggle("image_hidden")
            block = 1
        }
    })
}
const afterImage = () => {
    let block = 0
    slider_images.forEach((element,index,array)=> {
        if(element.classList.length == 1 && block == 0){
            element.classList.toggle("image_hidden")
            slider_images[getNumber(0, 2, index + 1)].classList.toggle("image_hidden")
            block = 1
        }
    })
}
left_arrow.addEventListener("click", beforeImage, false)
right_arrow.addEventListener("click", afterImage, false)
hamburger_icon.addEventListener("click", toggleMenu, false)