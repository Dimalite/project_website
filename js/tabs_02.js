function tabs(tabsId) {
  let tabsParent = document.querySelector(tabsId);
  let tabsContents = tabsParent.children;

  let ul = document.createElement("ul");
  ul.classList.add("tabs_togglers_list");

  Array.from(tabsContents).forEach((item) => {
    let li = document.createElement("li");
    let button = document.createElement("button");
    button.classList.add("tabs_toggler");
    button.innerText = item.title;

    button.addEventListener("click", (e) => {
      const tabButtons = document.querySelectorAll(".tabs_toggler");
      const allItemTabs = document.querySelectorAll(".tabs__item");

      if (e.target === tabButtons[0]) {
        allItemTabs.forEach((e) => {
          e.classList.remove("tabs__item--active");
        });
        allItemTabs[0].classList.add("tabs__item--active");
      } else if (e.target === tabButtons[1]) {
        allItemTabs.forEach((e) => {
          e.classList.remove("tabs__item--active");
        });
        allItemTabs[1].classList.add("tabs__item--active");
      } else if (e.target === tabButtons[2]) {
        allItemTabs.forEach((e) => {
          e.classList.remove("tabs__item--active");
        });
        allItemTabs[2].classList.add("tabs__item--active");
      }
    });

    li.appendChild(button);
    ul.appendChild(li);
  });

  tabsParent.insertBefore(ul, tabsContents[0]);
}

tabs("#tabs1");
