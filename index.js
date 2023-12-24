const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    }, 
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  const swiper2 = new Swiper('.swiper2', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    }, 
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  let block = document.querySelector('.poopUpLink');
  let poopup = document.querySelector('.poopup');
  let closeBlock = document.querySelector('.poopupClose');

block.addEventListener('click', function(e){
  e.preventDefault();
  poopup.classList.add('poopup_open');
})
closeBlock.addEventListener('click', () =>{
  poopup.classList.remove('poopup_open');
})

let lmopen = document.querySelector('.pullOut-menu');
let leftMenu = document.querySelector('.leftMenu');
let menuBtn = document.querySelector('.menu-btn');
lmopen.addEventListener('click', ()=>{
  leftMenu.classList.toggle('leftMenuOpen')
})
menuBtn.addEventListener('click', function(e){
  e.preventDefault();
  leftMenu.classList.remove('leftMenuOpen')
})

let bluur = document.querySelector('.ful__blur');
lmopen.addEventListener('click', ()=>{
  bluur.classList.toggle('body__blur')
})
menuBtn.addEventListener('click', function(e){
  e.preventDefault();
  bluur.classList.remove('body__blur')
})

let cards = document.querySelector('.cards');
let cardsbtn = document.querySelector('.card__vector');
cardsbtn.addEventListener('click', function(e){
  e.preventDefault();
  cards.classList.toggle('cards__up')
})
cardsbtn.addEventListener('click', function(e){
  e.preventDefault();
  cardsbtn.classList.toggle('card__vector-active')
})
let desctopBtn  = document.querySelector('.desctom__remem');
desctopBtn.addEventListener('click', function(e){
  e.preventDefault();
  poopup.classList.add('poopup_open');
})
let seller1 = document.querySelector('.seller1');
seller1.addEventListener('click', function(e){
  e.preventDefault();
  poopup.classList.add('poopup_open');
})
let seller5 = document.querySelector('.seller5');
seller5.addEventListener('click', function(e){
  e.preventDefault();
  poopup.classList.add('poopup_open');
})
let seller6 = document.querySelector('.footer__pc');
seller6.addEventListener('click', function(e){
  e.preventDefault();
  poopup.classList.add('poopup_open');
})
let seller7 = document.querySelector('.futer__mob');
seller7.addEventListener('click', function(e){
  e.preventDefault();
  poopup.classList.add('poopup_open');
})
let hederActive = document.querySelector('.header');
lmopen.addEventListener('click', ()=>{
  hederActive.classList.toggle('header_active')
})
menuBtn.addEventListener('click', ()=>{
  hederActive.classList.remove('header_active')
})