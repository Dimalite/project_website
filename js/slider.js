function customSlider(sliderClassName, x) {
  let slider = document.querySelector(sliderClassName);
  let slides = slider.querySelectorAll(".slider__elem");

  let sliderNext = document.querySelector(".custom_slider__arrow--next");
  sliderNext.addEventListener("click", nextSlide);

  let sliderPrev = document.querySelector(".custom_slider__arrow--prev");
  sliderPrev.addEventListener("click", prevSlide);

  let index = 0;

  function changeSlide(index) {
    slides.forEach((item) => {
      item.classList.remove("slider__elem--active");
    });

    if (x === 1) {
      index >= slides.length ? (index = 0) : null;
      index <= -1 ? (index = slides.length - 1) : null;
    } else {
      index == 2
        ? sliderNext.classList.add("hidden")
        : sliderNext.classList.remove("hidden");
      index == 0
        ? sliderPrev.classList.add("hidden")
        : sliderPrev.classList.remove("hidden");
    }

    slides[index].classList.add("slider__elem--active");
  }

  function nextSlide() {
    if (index == slides.length - 1) {
      index = 0;

      prepareCurrentSlide(index);
    } else {
      index++;
      prepareCurrentSlide(index);
    }
  }
  function prevSlide() {
    if (index == 0) {
      index = slides.length - 1;
      prepareCurrentSlide(index);
    } else {
      index--;
      prepareCurrentSlide(index);
    }
  }

  let list = document.createElement("ul");
  list.classList.add("custom_slider__dots");
  slider.appendChild(list);

  for (i = 0; i < slides.length; i++) {
    let btn = document.createElement("button");
    let li = document.createElement("li");

    btn.classList.add("custom_slider__dot");

    li.appendChild(btn);
    list.appendChild(li);
  }

  const dots = document.querySelectorAll(".custom_slider__dot");

  const activeDot = (n) => {
    for (let dot of dots) {
      dot.classList.remove("custom_slider__dot--current");
    }
    dots[n].classList.add("custom_slider__dot--current");
  };

  dots.forEach((item, indexDot) => {
    item.addEventListener("click", () => {
      index = indexDot;
      prepareCurrentSlide(index);
    });
  });

  const prepareCurrentSlide = (index) => {
    changeSlide(index);
    activeDot(index);
  };
  prepareCurrentSlide(index);
}

customSlider(".slider", 1);
