'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to')
const section1 = document.querySelector('#section--1')

const openModal = function (e) {
  e.preventDefault()
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal))
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
const header = document.querySelector('.header')
const allSections = document.querySelectorAll('.section')
//console.log("ALLSECTIONS", allSections)

document.getElementById('.section--1')
const allButtons = document.getElementsByTagName('.button')
//console.log("ALLBUTTONS", allButtons)
//console.log(document.getElementsByClassName('btn'))
const message = document.createElement('div')
message.classList.add('cookie-message')
// message.textContent = 'we use cookies to improve functionality and analytics'
message.innerHTML = 'we use cookies to improve functionality and analytics <button class ="btn btn--close-cookie">Got It </button>'
header.prepend(message)
header.append(message)//lastchild
// header.append(message.cloneNode(true)) //to inser multiple copies of the same element. first clone a node

header.before(message) //before the header
header.after(message)
//delete elements
document.querySelector('.btn--close-cookie')
addEventListener('click', function (){
  message.remove()
})
//inline styles
message.style.backgroundColor = '#37383d'
console.log("message.style.backgroundColor", message.style.backgroundColor)
message.style.width = '120%'

//computes styles
console.log(getComputedStyle(message).height)
message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px'
document.documentElement.style.setProperty('--color-primary', 'orangered')
//Attributes
const logo = document.querySelector('.nav__logo')
console.log(logo.alt)
console.log(logo.src)
console.log(logo.className)
//set or change the attribute
logo.alt= "Beautiful Minimalist LOGo"

//No standard 
console.log(logo.designer)
console.log(logo.getAttribute('designer'))
logo.setAttribute('company', 'Bankist')
//below both hvae diff res. one shows full link and another only attributes
console.log(logo.src)
console.log(logo.getAttribute('src'))

const link = document.querySelector('.nav__link--btn')
console.log(link.href)// absolute url
console.log(link.getAttribute('href'))//url as rendered in html

//data attributes- cpecial kind of attributes that start with the word data like data-version-number in img
console.log(logo.dataset.versionNumber) //when you store data in user interface
//classes
// logo.classList.add()
// logo.classList.remove()
// logo.classList.toggle()
// logo.classList.contains()
//Alternatively you can use the following but don't do it as it will override all the classses and will let you put omly 1 class on that element
//logo.className = 'Sneha'
//oldschool way of button scroll
//->>>>> BUTTON SCROLLING <<<<----\\\\\\\\\\

btnScrollTo.addEventListener('click', function(e){
  const s1coords = section1.getBoundingClientRect()
  console.log("ss1coords", s1coords)
  console.log(e.target.getBoundingClientRect())//shows the coordinates on any click
  // console.log('Current Scroll (X/Y', window.pageXOffset, pageYOffset)
  // console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth)
  // //scrolling
  // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top+ window.pageYOffset)
  section1.scrollIntoView({behavior: 'smooth'})
})

//////////\\\\\\\\\\\\//->>>>>#### PAGE NAVIGATION\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// the following func will be called every time you click on a nav(imagine if you have 100 navs) so avoid this by using event delegation
// where an event will be callied in parent element and will be propogated to children
// document.querySelectorAll('.nav__link').forEach(function(el){
//   el.addEventListener('click', function(e){
//     e.preventDefault()//prevent an anchor href = "#section--1" to reach sectione from section-> id
//     console.log('LINK')
//     const id = this.getAttribute('href')
//     console.log(id)// this will only give attribute like section--1/--2 and not entire link if you write this.href
//     document.querySelector(id).scrollIntoView({
//       behavior:'smooth'
//     })
//   })
// })
//solution add event listener tp common parent element
//Determine what element originated the event
document.querySelector('.nav__links').addEventListener('click', function (e){
  console.log(e.target)
  e.preventDefault()
  //Matching strategy to make sure that the element we are clicking on hits the event
  if(e.target.classList.contains('nav__link')){
    const id = e.target.getAttribute('href')
    document.querySelector(id).scrollIntoView({behavior:'smooth'})
  }
})




//rgb (255, 255, 255)
// const randomInt = (min, max) => {
//   return Math.floor(Math.random()* (max-min+1) + min)
// }
// const randomColor = ()=> `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`

// document.querySelector('.nav__link').addEventListener('click', function(e){
//   console.log('LINK', e.target, e.currentTarget)
//   this.style.backgroundColor = randomColor()
//   console.log(e.currentTarget === this)
//   //how to stop event propogation-> event won't reach parents so this event will not reach below two functions
//  // e.stopPropagation()
// })

// document.querySelector('.nav__links').addEventListener('click', function(e){
//   console.log('LINK2', e.target, e.currentTarget)
//   this.style.backgroundColor = randomColor()
// })

// document.querySelector('.nav').addEventListener('click', function(e){
//   console.log('LINK3',e.target, e.currentTarget)
//   this.style.backgroundColor = randomColor()
// }, false) //by setting this true event handler will no longer listen to event in bubbling phase but will in capturing phase
// //this is usuful in event delegation

// const h1 =document.querySelector('h1')
// //going downwards selecting child elements
// console.log(h1.querySelectorAll('.highlight'))
// //console.log(h1.childNodes)//gives nodelist -> every single node of every single type
// console.log(h1.children)//gives HTML collecton live collection so its updated. holds only for "direct children"
// h1.firstElementChild.style.color = 'white'
// h1.lastElementChild.style.color = 'orangered'
// //going upwards child to parent or selecting parents
// console.log(h1.parentNode)
// console.log(h1.parentElement)
// //to find direct parent in case there are numerous h1's. do h1.closest(parent query string). this is used for event delegation
// //if this selector matches the one on which we are calling the closest then that will be the element and it will return that element
// h1.closest('.header').style.background = 'var(--gradient-secondary)'
// //calling this on another h1 element. IAnd the closest h1 is the h1 element itself. so it will call it on itself
// h1.closest('.h1').style.background = 'var(--gradient-primary)'
// //closest is the opposite of queryselector as queryselector finds children and closest finds parents
// //Going sideways finding siblings
// console.log(h1.previousElementSibling)//returns null
// console.log(h1.nextElementSibling)// will return h4
// //finding nodes
// console.log(h1.previousSibling)//will return text
// console.log(h1.nextSibling) 
// //if you need all siblings then move to parent element and get all its' children
// console.log(h1.parentElement.children)//will return HTMLcollection, which will be iterable 
// const arrays = [...h1.parentElement.children].forEach(function(el){
//   if(el !== h1) el.style.transform = 'scale(0.5)'
// })
//////////////////////////////BUILDING A TAB COMPONENT///////////////////////////////////////////////
//whole tab component called operations
const tabs = document.querySelectorAll('.operations__tab')
const tabContainer = document.querySelector('.operations__tab-container')
const tabsContent = document.querySelectorAll('.operations__content')
//Attach event handler on each tab
// tabs.forEach(t=> t.addEventListener('click', ()=> console.log('TAB'))) not a good practice because we will have to generate
//multiple functions per each tab. use event delegation instead, by handling event delegation on common parent element
//of the all tabs. In this case common parent element is tab container
tabContainer.addEventListener('click', function(e){
  //const clicked = e.target.parentElement instead of this use closest
  const clicked = e.target.closest('.operations__tab')
  console.log("CLICKED", clicked)
  //null error check or guard clause
  if(!clicked) return
  //remove the class from all tabs and add them on one of them so that the only tab that is clicked goes up and other tabs stay below
  tabs.forEach(t=> t.classList.remove('operations__tab--active'))
  //also remove all the content
  tabsContent.forEach(c=>c.classList.remove('operations__content--active'))
  //activate tab
  clicked.classList.add('operations__tab--active')
  //activate content area refer data-tab number and look for the operations__content--number
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')
  console.log("clicked.dataset.tab",clicked.dataset.tab)
})
//Menu Fade Navigation
const nav = document.querySelector('.nav')
///////////////////////////////////////
// Menu fade animation
const handleHover = function (e) {
  console.log("ThiS", this)
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) 
      el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

////sticky navigation
// const initialCoords = section1.getBoundingClientRect()
// console.log("initiacoords", initialCoords)
// window.addEventListener('scroll', function(e){
//   console.log("scroleld Y", window.scrollY)
//   if(this.window.scrollY > initialCoords.top) 
//     nav.classList.add('sticky')
//     else nav.classList.remove('sticky')
// })
////sticky navigation Intersection Observer API
// const obsCallback = function (entries, observer) { //entries are/ can be the arrays of the threshold entries
//   entries.forEach(entry=> {
//     console.log("ENTRY", entry)
//   })
// }

// const obsOptions = {
//   root: null, //root is the element where the target is intersectiong
//   threshold:[0, 0.2] //0% means each time target element moves out of the view CB will trigger  
//}
//whenever the target i.e. section1 is intersecting the VP at 10% the function obsCallback will be called
//the IntersectionObserver accepts two parameters a callback function as well as object
//use the const observer to observe a certain target
// const observer = new IntersectionObserver(obsCallback, obsOptions)//CB func will be called wgenever the element section1 is intersecting the target(in this case VP) at the percent threshold stated(10%)
// observer.observe(section1)//call observer to observe a certain target 
 const headerr = document.querySelector('.header')
 const navHeight = nav.getBoundingClientRect().height

 const stickyNav = function(entries){
  const [entry] = entries
  //console.log(entry)
  if(!entry.isIntersecting) nav.classList.add('sticky')
  else nav.classList.remove('sticky')
}
const headerObserver = new IntersectionObserver(
  stickyNav, {
    root:null,
    threshold:0,
    rootMargin: `-${navHeight}px`
  }
)
headerObserver.observe(headerr)

//Reveal Sections
const allSectionss = document.querySelectorAll('.section')

const revealSection = function(entries, observer){
  const [entry] = entries
  //console.log("SECTION ENTRY", entry)
  if(!entry.isIntersecting) return;//don't have an effect at the start the first entry is isIntersecting:false
  entry.target.classList.remove('section--hidden')
  observer.unobserve(entry.target) //target comes from api check the console //no more events after you scroll down//target helps you to figure out for which section the intersection turned truw
}
//observe all 4 sections using this observe
const sectionObserver = new IntersectionObserver(
  revealSection, {
    root:null,
    threshold:0.15
  }
)
allSectionss.forEach(function(section){
  sectionObserver.observe(section)
  //section.classList.add('section--hidden')
})
//perf related lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]') // select all images that have property of data src
//console.log(imageTargets)

const loadImg = function (entries, observer) {
  const [entry] = entries
  console.log(entry)
  //guard close
  //if they arent intersecting we want early return
  //if they are, then replace placeholder img which is src with data-src
  entry.target.src = entry.target.dataset.src

  entry.target.addEventListener('load', function(e){
    entry.target.classList.remove('lazy-img')
  })

//stop observing images as you have already performed the task of loading
observer.unobserve(entry.target)
}

const imageObserver = new IntersectionObserver(
  loadImg, {
    root:null,
    threshold: 0,
    rootMargin: '-200px' //exactly 200 px before we reach any of the images
  })

imgTargets.forEach(img => imageObserver.observe(img))
//slider




//const slider = document.querySelector('.slider')

// slider.style.transform = 'scale(0.4) translateX(-800px)'//translateX so that move images to left
// slider.style.overflow = 'visible'// instad of hidden just to be able to see slides

//refactored into goToSLide(0) to automatically put slide 0 in the beginninbg
// slides.forEach((s,i) => (s.style.transform = `translateX(${100 * i}%)`))
  //first slide:-100% 2nd Slide: 0% 3rd Slide: 100%, 4th Slide:200%
  //for this to happen take current index and then subtract the currentslide
  //currentSlide = 1 so 0-1 = -1 -1*100 = -100%

const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();


//
document.addEventListener('DOMContentLoaded', function(e){
  console.log('HTML parsed and DOM tree built!', e)
})
window.addEventListener('load', function(e){
  console.log('Page fully loaded!', e)
})
//created before user leaves the page
// window.addEventListener('beforeunload', function(e){
//   e.preventDefault()
//   console.log(e)
//   e.returnValue = 'message'
// })