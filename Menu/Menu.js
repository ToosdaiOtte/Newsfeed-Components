
const toggleMenu = () => {
  menu.classList.toggle('menu--open');
  // Toggle the "menu--open" class on your menu refence. 
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// // Menu left slideIn Animation using GSAP *not done*
// TweenLite.from(menu, 2, {left: 0, ease: Power0.easeNone, y: -500 });
// TweenLite.to(menu, 2, {left: '110px', ease: Power0.easeNone, y: -500});
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', () => {
  toggleMenu();
})


