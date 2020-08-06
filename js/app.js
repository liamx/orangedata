
//Navbar toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelector(".nav-item");


hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    hamburger.classList.toggle("open");
});
//Nav-link toggle
$(document).ready(function(){
  $('.nav-item').on('click', function(){
    $('.nav-links').removeClass('open');
    $('.hamburger').removeClass('open');
  })
});

//Intersection Observer for intro scroll
// const sectionOne = document.querySelector(".Pop-detail");

// const popUp = document.querySelector(".Pop-container");




// const sectionOneOptions = {
//   root: null, // it is the viewport
//   threshold: 0.2, // if 1 = 100% content must be inside, 0 any pieces inside can fire
//   rootMargin: "900px"
// };

// const sectionOneObserver = new IntersectionObserver(function
//   (entries, sectionOneobserver){
//     entries.forEach(entry => {
//       if(entry. isIntersecting){
//         console.log("is intersecting!");
//         popUp.classList.add("active");
//       } else {
//         console.log("is not intersecting!");
//         popUp.classList.remove("active");
//       };
//     });
//   }, sectionOneOptions);

//   sectionOneObserver.observe(sectionOne);



//Service Lottie animation
var animation1 = bodymovin.loadAnimation({
    container: document.getElementById('oneAnim'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animation/oneAnim/oneAnim.json'
  });
  var animation2 = bodymovin.loadAnimation({
    container: document.getElementById('twoAnim'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animation/twoAnim/twoAnim.json'
  });
  var animation3 = bodymovin.loadAnimation({
    container: document.getElementById('threeAnim'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animation/threeAnim/threeAnim.json'
  });
var animation4 = bodymovin.loadAnimation({
    container: document.getElementById('fourAnim'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animation/fourAnim/fourAnim.json'
  });
var animation5 = bodymovin.loadAnimation({
    container: document.getElementById('fiveAnim'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animation/fiveAnim/fiveAnim.json'
  });
var animation6 = bodymovin.loadAnimation({
  container: document.getElementById('sixAnim'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'animation/sixAnim/sixAnim.json'
});
//not too big
var animation7 = bodymovin.loadAnimation({
  container: document.getElementById('notTooBigAnim'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'animation/notTooBigAnim/notTooBigAnim.json'
});
//arrow down
var animation8 = bodymovin.loadAnimation({
  container: document.getElementById('arrowAnim'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'animation/arrowAnim/arrowAnim.json'
});
var animation8 = bodymovin.loadAnimation({
  container: document.getElementById('arrowAnim2'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'animation/arrowAnim/arrowAnim.json'
});
// intro
// var animation6 = bodymovin.loadAnimation({
//   container: document.getElementById('introAnim'),
//   renderer: 'svg',
//   loop: true,
//   autoplay: true,
//   path: 'animation/introAnim/introAnim.json'
// });


//drop orange animation
//this has a duration and animates the playhead on the Lottie animation for a smoother result
ScrollLottie({
  target: '#introAnim',
  path: 'animation/introAnim/introAnim.json', 
  duration: 3, 
  speed: 'medium'
 })

 ScrollLottie({
  target: '#dropAnim',
  path: 'animation/dropAnim/dropAnim.json', 
  duration: 3, 
  speed: 'medium'
 })
 ScrollLottie({
  target: '#dropMobileAnim',
  path: 'animation/dropMobileAnim/dropMobileAnim.json', 
  duration: 3, 
  speed: 'medium'
 })



// Way To Go lottie
LottieInteractivity.create({
  mode:"scroll",
  player:'#wayToGoAnim',
  actions: [
    {
      visibility:[0, 0.3],
      type: "stop",
      frames: [0]
    },
    {
      visibility:[0.3, 0.5],
      type: "seek",
      frames: [0,130]
    },
    {
      visibility:[ 0.5,1],
      type: "stop",
      frames: [130,180]
    }
  ]  
});

// Email validation

// Get element with ".animated" class, which has "data-sal" attribute
const element = document.querySelector('.animated');

element.addEventListener('sal:in', ({ detail }) => {
  console.log('entering', detail.target);
});



