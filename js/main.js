/*=============== CHANGE BACKGROUND HEADER ===============*/
const nav_menu = document.querySelector('.nav .nav_menu');

function scrollHeader(){
    const header = document.getElementById('header');
    if(this.scrollY > 30){
        header.classList.add('scroll_header');
        nav_menu.classList.add('after_scroll');

    }
    else{
        header.classList.remove('scroll_header');
        nav_menu.classList.remove('after_scroll');
       
    }
}

window.addEventListener('scroll' , scrollHeader)

/*=============== SERVICES MODAL ===============*/

const modalViews = document.querySelectorAll('.services_wrapper .services_modal');
console.log(modalViews);

const servicesBtn = document.querySelectorAll('.services_wrapper .services_btn');
console.log(servicesBtn);

const servicesClose = document.querySelectorAll(' .services_modal  .services_modal_close');
console.log(servicesClose);


// let  modal = function(modalClick){
//     modalViews[modalClick].classList.add('active_modal');
// }
// modal(i);

servicesBtn.forEach((mb , i) =>{
   mb.addEventListener('click', () =>{
    modalViews[i].classList.add('active_modal');
   })
}) 

servicesClose.forEach((nb , i) =>{
  nb.addEventListener('click' , ()=>{
    modalViews[i].classList.remove('active_modal');
  })
})


/*=============== MIXITUP FILTER PORTFOLIO ===============*/

let mixer = mixitup('.work_container', {
  selectors: {
      target: '.work_card'
  },
  animation: {
      duration: 300
  }
});


/* Link active work */ 

const linkWork = document.querySelectorAll('.work_item');

 function activeWork(){
   linkWork.forEach(L=> L.classList.remove('active_work'));
   this.classList.add('active_work');
 }

 linkWork.forEach(L=> L.addEventListener('click', activeWork ))


/*=============== SWIPER TESTIMONIAL ===============*/


var swipertestimonial = new Swiper(".testimonial_container", {
  spaceBetween: 30,
  autoplay:true,
  loop:true,
  grabCursor:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    400:{
      slidesPerView: 1,
 
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// responsive break points

/*var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

});
*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*const  navLink = document.querySelectorAll('.nav_link');


function activeLink(){
  navLink.forEach(L => L.classList.remove('active_link'));
  this.classList.add('active_link');
}


navLink.forEach(L=> L.addEventListener('click', activeLink))


*/
const  sections = document.querySelectorAll('section[id]');

 console.log(sections)

function scrollActive(){
  const scrollY = window.pageYOffset;
  // console.log(scrollY)
  sections.forEach(current =>{ 
     const sectionHeight = current.offsetHeight,
      sectinTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id')

      if(scrollY > sectinTop && scrollY <=  sectinTop + sectionHeight){
        document.querySelector( '.nav_menu a[href*='+ sectionId + ']').classList.add('active_link');
      }
      else{
        document.querySelector( '.nav_menu a[href*='+ sectionId + ']').classList.remove('active_link');
      }
  })
  
}

window.addEventListener('scroll' , scrollActive)

/*=============== LIGHT DARK THEME ===============*/ 

const themeBtn = document.getElementById('change_cheme');
const lightTheme = 'light_theme';
const iconTheme = 'bx-sun';

// priviously selectd topic (if user selected )

const selectedTheme = localStorage.getItem('selected_theme');
const selectedIcon = localStorage.getItem('selected_icon');

// we obtailn the current theme that interface has by validating the light_theme class 

const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' :'light';

const getCurrentIcon = () => document.themeBtn.classList.contains(iconTheme) ?  ' bx bx-moon': 'bx  bx-sun';


// we validate if the  user previously chose a topic 
if(selectedTheme){

  document.body.classList[selectedTheme === 'dark' ? 'add': 'remove'](lightTheme);
  themeBtn.classList[selectedIcon === 'bx bx-moon' ? 'add': 'remove'](iconTheme)
}


themeBtn.addEventListener('click' , () =>{
  document.body.classList.toggle(lightTheme);
  themeBtn.classList.toggle(iconTheme);

  // we save the theme and the current icon that user

  localStorage.setItem('selected_theme' , getCurrentTheme());
  localStorage.setItem('selected_theme' , getCurrentIcon());
  
})


/*=============== SCROLL REVEAL ANIMATION ===============*/

