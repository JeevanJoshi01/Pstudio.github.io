const Slides = document.querySelectorAll('.Slide')

window.addEventListener('scroll', checkBoxes)

checkBoxes()
function checkBoxes() {
    const triggerBottom = window.innerHeight /5 * 4

    Slides.forEach(box =>{
        const boxTop = box.getBoundingClientRect().top
        
        if(boxTop < triggerBottom) {
            box.classList.add('anime')
        } else {
            box.classList.remove('anime')
        }
    })
}
