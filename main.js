const menuToggle = document.querySelector('.menu-toggle');
const navItems = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  navItems.classList.toggle('active');
  menuToggle.classList.toggle('active');
});
