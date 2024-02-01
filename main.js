const nav = document.querySelector('.nav-background');
const toggler = document.querySelector('.menu__toggler');
toggler.addEventListener('click', () => {
  toggler.classList.toggle('active');
  nav.classList.toggle('active');
})
