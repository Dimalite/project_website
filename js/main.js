const btns = document.querySelectorAll('.slider__arrow'),
    elementsSlider = document.querySelectorAll('.slider__elem'),
    next = btns[1],
    prev = btns[0];
let index = 0;

const activeSlide = n => {
    for (let slide of elementsSlider) {
        slide.classList.remove('slider__elem--active');
    }
    elementsSlider[n].classList.add('slider__elem--active');
}

const prepareCurrentSlide = () =>{
    activeSlide(index);

}

const nextSlide = () => {
    if (index == elementsSlider.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
}

const prevSlide = () => {
    if (index == 0) {
        index = elementsSlider.length - 1;
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

