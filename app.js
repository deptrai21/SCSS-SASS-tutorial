const mobileMenu = document.querySelector('.mobile-menu');
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
//open menu

burger.addEventListener('click', function() {
    mobileMenu.classList.toggle('open-mobile-menu')
})

//primary colors
const colors =  {
    primaryColor : '#1e3a57',
    secondaryColor : '#ff9a8a',
    thirdColor : "#a09bd7"
}

window.addEventListener('scroll', function() {
  if(pageYOffset > 500) {
    nav.style.borderBottom = '0.1px solid rgba(30, 58, 87, 0.2)'
  } else if (pageYOffset < 500) {
    nav.style.borderBottom = 'none'  
  }

  if(pageYOffset >= 1000) {
      document.querySelector('body').style.backgroundColor = colors.thirdColor;
      nav.style.backgroundColor = colors.thirdColor;
  } else {
    document.querySelector('body').style.backgroundColor = colors.secondaryColor;
    nav.style.backgroundColor = colors.secondaryColor; 
  }
})