const slides = document.querySelectorAll(".slider")
var counter = 0;
slides.forEach(
    (slide,index) =>{
        slide.style.left = `${index * 100}%`
    }
)
const gonext = () =>{
    counter++
    
    age()
}
const goprev = () =>{
    counter--
    age()
}
const age = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}
 