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
      if (counterTarget[i].offsetTop - 1000 < window.pageYOffset && !counted) {
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

function tabs(tabsId) {
  let tabsParent = document.querySelector(tabsId);
  let tabsContents = tabsParent.children;

  let ul = document.createElement('ul');
  ul.classList.add('tabs_togglers_list');

  Array.from(tabsContents).forEach(item => {
    let li = document.createElement('li');
    let button = document.createElement('button');
    button.classList.add('tabs_toggler');
    button.innerText = item.title;
    li.appendChild(button);
    ul.appendChild(li);
  });

  tabsParent.insertBefore(ul, tabsContents[0]);
}

tabs('#tabs1')
