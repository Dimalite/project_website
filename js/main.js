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

// counters
window.onscroll = function () {
    
    var count_1 = document.getElementById('num1')
    var count_2 = document.getElementById('num2')
    var count_3 = document.getElementById('num3')

    var count1 = 0;
    var project1 = setInterval(counter1, 10);
    var count2 = 0;
    var project2 = setInterval(counter2, 1);
    var count3 = 0;
    var project3 = setInterval(counter3, 10);
    
    function counter1() {
        count1++;    
        count_1.innerHTML = count1;
        if (count1 == 120) clearInterval(project1);
    }
    function counter2() {
        count2++;    
        count_2.innerHTML = count2;
        if (count2 == 200) clearInterval(project2);
    }
    function counter3() {
        count3++;    
        count_3.innerHTML = count3;
        if (count3 == 75) clearInterval(project3);
    }
}
