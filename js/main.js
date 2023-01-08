// let header = document.querySelector('#header')
// let offer = document.querySelector('.offer')
// document.addEventListener('scroll', function () {
//     if (offer.getBoundingClientRect().top < 0) {

//     } else {
//         header.classList.remove('.header--fixed')
//     }
// })

function counter(elemClassName) {
  let counterTarget = document.querySelectorAll(elemClassName);

  let counted = false;

  document.addEventListener("scroll", function () {
    for (i = 0; i < counterTarget.length; i++) {
      if (counterTarget[i].offsetTop - 500 < window.pageYOffset && !counted) {
        startCounter(i);
      }
    }
  });

  function startCounter(index) {
    let current = 0;
    let target = counterTarget[index];
    let max = target.getAttribute("data-max");

    let counterId = setInterval(function () {
      if (current <= max) {
        target.innerText = current;
        current++;
      } else {
        clearInterval(counterId);
        counted = true;
      }
    }, 800 / max);
  }
}
counter(".services__number");

function showNotification(notificationId) {
  let target = document.querySelector(notificationId);

  setInterval(function () {
    target.classList.toggle("notification--active");
  }, 3000);
}
// showNotification('#test')


