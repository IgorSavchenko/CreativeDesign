//======================================================
//navigation menu open/close
const ACTIVE_CLASS = 'is-active';
const HAMBURGER = $('.navbar-burger');
const MENU = $('.navbar-menu');

HAMBURGER.click(() => {
  MENU.toggleClass(ACTIVE_CLASS);
  HAMBURGER.toggleClass(ACTIVE_CLASS);
});
//======================================================
// menu navigation status change using jQuery
$('.navbar-menu .navbar-item').on('click', function() {
  $('.navbar-menu .navbar-item').removeClass(ACTIVE_CLASS);
  $(this).addClass(ACTIVE_CLASS);
});
//======================================================
// siema slider
import Siema from 'siema';
//default function
// function onInitCallback() {
//   console.log('Siema initialised bro :)');
// }
//default function
// function onChangeCallback() {
//   console.log(`The index of current slide is: ${this.currentSlide}`);
// }

Siema.prototype.addArrows = function() {

  // make buttons & append them inside Siema's container
  this.prevArrow1 = document.querySelector('.slider-button--prev');
  this.nextArrow1 = document.querySelector('.slider-button--next');
  this.prevArrow2 = document.querySelector('.slider-button--prev--dark');
  this.nextArrow2 = document.querySelector('.slider-button--next--dark');
  // this.prevArrow.textContent = 'previous slide';
  // this.prevArrow.classList.add('slider-button', 'slider-button--prev');
  // this.nextArrow.textContent = 'next slide';
  // this.nextArrow.classList.add('slider-button', 'slider-button--next');
  // this.selector.appendChild(this.prevArrow)
  // this.selector.appendChild(this.nextArrow)

  // event handlers on buttons
  this.prevArrow1.addEventListener('click', () => this.prev());
  this.nextArrow1.addEventListener('click', () => this.next());
  this.prevArrow2.addEventListener('click', () => this.prev());
  this.nextArrow2.addEventListener('click', () => this.next());
}
// Add a function that generates pagination to Siema
function addNavigation() {
  let length = this.innerElements.length;
  for (let i = 0; i < length; i++) {
    const BTN = document.createElement('button');
    BTN.classList.add('slider-navigation-button');
    if (i == 0) BTN.classList.add('slider-navigation-button--active');
    BTN.addEventListener('click', () => this.goTo(i));
    this.selector.nextSibling.appendChild(BTN);
  }
}
// Add a function that change buttons in slider
function setActiveButton(){
  document.querySelectorAll('.slider-navigation-button').forEach((b, i) => {
    if (i == (this.currentSlide || 0)){
      b.classList.add("slider-navigation-button--active");
    } else {
      b.classList.remove("slider-navigation-button--active");
    }
  });
}
//init slider1
const MY_SIEMA1 = new Siema({
  selector: '.works .slider',
  perPage: 1,
  startIndex: 0,
  loop: true,
  draggable: true,
  duration: 500,
  onInit: addNavigation,
  onChange: setActiveButton
});
// listen for keydown event
setInterval(() => MY_SIEMA1.next(), 5000);
//add arrows to slider1
MY_SIEMA1.addArrows();
//init slider2
const MY_SIEMA2 = new Siema({
  selector: '.team .slider',
  perPage: 3,
  startIndex: 0,
  loop: true,
  draggable: true,
  duration: 500
});
//add arrows to slider2
MY_SIEMA2.addArrows();
//======================================================
//smooth scroll effect
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
//======================================================
//init google map
var map;
function initMap() {
  var beetroot = {lat: 49.569, lng: 34.583};
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 49.568, lng: 34.582},
    zoom: 15,
    center: beetroot
  });
  var customIcon = 'assets/img/Pin.png';
  var marker = new google.maps.Marker({
        position: beetroot,
        map: map,
        title: 'Beetroot',
        animation: google.maps.Animation.DROP,
        icon: customIcon
      });
}
initMap();
//======================================================
// Scroll Reveal effects
window.sr = ScrollReveal({ reset: true , mobile: true});
// sr.reveal( '.navbar', { duration: 500 }, 250);
sr.reveal('.navbar-item', { container: '.navbar-brand' , duration: 2000});
// sr.reveal('.navbar-item', { container: '.navbar' , rotate: {y: 90}, duration: 2500});
// sr.reveal('.about', { duration: 500 , viewOffset: { top: 100, right: 0, bottom: 100, left: 0 }});
// sr.reveal('.works', { duration: 500 , viewOffset: { top: 100, right: 0, bottom: 100, left: 0 }});
// sr.reveal('.contact', { duration: 500 , origin: 'left', distance: '500px'});
//======================================================
// animation of social links icons on hover using .css animation
$('.footer-social-link img').mouseover(function() {
  $(this).addClass('animated tada');
});
$('.footer-social-link img').mouseleave(function() {
  $(this).removeClass('animated tada');
});
//======================================================
$('.navbar-brand .navbar-item svg').mouseover(function() {
  $(this).addClass('animated rubberBand');
});
$('.navbar-brand .navbar-item svg').mouseleave(function() {
  $(this).removeClass('animated rubberBand');
});
