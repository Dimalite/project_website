const dropdownBtn = document.querySelector(".dropdown__button");
const dropdownList = document.querySelector(".dropdown__list");
const dropdownListItems = dropdownList.querySelectorAll(".dropdown__list-item");
const dropdownInput = document.querySelector(".dropdown__input-hidden");



dropdownBtn.addEventListener("click", function () {
	dropdownList.classList.toggle("dropdown__list--visible");
		this.classList.toggle("dropdown__button--active");
		
	});

	// Select a list item, set the selected value , close the dropdown
let themes = [];
let count = 0;

dropdownListItems.forEach(function (listItem) {
	listItem.addEventListener("click", function (e) {
		

		const newId = this.innerText;                 //new id 

		if (!themes.includes(newId)) {          //checking weather array contain the id
			themes.push(newId);               //adding to array because value doesn't exists
		} else {
			themes.splice(themes.indexOf(newId), 1);  //deleting
		}

		this.classList.toggle('active');
		e.stopPropagation();

		dropdownBtn.innerText = this.innerText;
       
		// How many themes
		count = themes.length;

		if (themes.length == 1) {
			dropdownBtn.innerText = '(' + count + ') ' + 'Тема';
		} else if (themes.length >= 2) {
			dropdownBtn.innerText = '(' + count + ') ' + 'Темы';
		} else {
			dropdownBtn.innerText = 'Тема встречи';

		}

		// dropdownList.classList.remove("dropdown__list--visible");
		dropdownBtn.classList.remove("dropdown__button--active");
		
		dropdownInput.value = this.dataset.value;
		console.log(themes);
	});
});

// Click from outside dropdown, close dropdown

document.addEventListener("click", function (e) {
	console.log("Document Click");
	if (e.target !== document.querySelector(".dropdown__button")) {
		dropdownBtn.classList.remove("dropdown__button--active");
		dropdownList.classList.remove("dropdown__list--visible");
		
	}
});

// buttons Tab and Escape close dropdown
document.addEventListener("keydown", function (e) {
	if (e.key === 'Tab' || e.key === 'Escape') {
		dropdownBtn.classList.remove("dropdown__button--active");
		dropdownList.classList.remove("dropdown__list--visible");
	}
})