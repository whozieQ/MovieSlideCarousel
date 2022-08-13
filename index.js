const slides = document.getElementsByClassName("carousel-item")
let slidePosition = 0
const totalSlides = slides.length

document.getElementById("carousel-button-next").addEventListener("click", moveToNext)
document.getElementById("carousel-button-prev").addEventListener("click", moveToPrev)
const positions = document.getElementById("position").getElementsByClassName("position-marker")

function moveToNext(){
    if (slidePosition === (totalSlides-1)){
        slidePosition = 0
    } else {
        slidePosition++
    }
    renderSlide()

}
function moveToPrev(){
    if (slidePosition === 0){
        slidePosition = totalSlides - 1
    } else {
        slidePosition--
    }
    renderSlide()
}
function renderSlide(){
        hideAllSlides()
        removeHighlightAllPositions()
        slides[slidePosition].classList.add("carousel-item-visible")
        positions[slidePosition].classList.add("currentPosition")
}
function hideAllSlides(){
    for (let slide of slides){
        slide.classList.add("carousel-item-hidden")
        slide.classList.remove("carousel-item-visible")
    }
}
function removeHighlightAllPositions(){
    for(let position of positions){
        position.classList.remove("currentPosition")
    }
}