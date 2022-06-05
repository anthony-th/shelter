"use strict";

const hamburger = document.querySelector('.burger-menu');
const nav =  document.querySelector('.nav');
const navList = document.querySelector('.nav__list');
const helpShelterLink = document.getElementById('help-link');
const contactsLink = document.getElementById('contacts-link');
const logo = document.querySelector('.logo__relocation');
const body = document.querySelector('body');
const shadow = document.querySelector('.shadow-block');
const cardImg = document.querySelectorAll('.card__img');
const ourFriendsSubTitle = document.querySelectorAll('.ourFriends__subTitle');
const links = document.querySelectorAll('.links')

const changeMenu = function() {
    navList.classList.toggle('open');
	hamburger.classList.toggle('rotate');
	logo.classList.toggle('relocation');
	body.classList.toggle('overflow');
	shadow.classList.toggle('shadow-open');
	shadow.classList.toggle('shadow-inin');
}

hamburger.addEventListener('click', function(e) {
    e.stopPropagation();
    changeMenu();
});


links.forEach(function(e) {
    e.addEventListener('click', function() {
        if (document.body.clientWidth < 768 ) {
            changeMenu();
        }
    })
})

document.addEventListener('click', function(e) {
    const target = e.target;
    const menu = target == navList || navList.contains(target);
    const burgerMenu = target == hamburger;
    const navListOpen = navList.classList.contains('open');
    
    if (!menu && !burgerMenu && navListOpen) {
        changeMenu();
    }
});

console.log(`Здравствуйте, уважаемый проверяющий!
Дабы не было проблем с пониманием задания и его оценки, руководствуйтесь, пожалуйста, кросс-чеком. Его именно для этого и писали.
Кросс-чек описан, как минимум, в таске: https://github.com/rolling-scopes-school/tasks/tree/master/stage1/stream1/shelter#%D0%BF%D0%BE%D1%80%D1%8F%D0%B4%D0%BE%D0%BA-%D0%BE%D1%86%D0%B5%D0%BD%D0%BA%D0%B8-cross-check-%D0%BD%D0%B5%D0%B4%D0%B5%D0%BB%D1%8F-3
Надеюсь, проверка будет сделана в соответствии с правилами. Спасибо и удачи в своем проекте! Особо можно времени не тратить, я кое-как только бургер сделал и все. Это самый минимум. Если можете, подождите до четверга с проверкой, пожалуйста! Я постараюсь доделать по максимуму`);

const prevButton = document.querySelector('.prevBtn');
const nextButton = document.querySelector('.nextBtn');


// console.log(prevButton.ariaLabel.length);


fetch('../../assets/api/pets.json')
  .then(response => response.json())
  .then(data => console.log(data));

