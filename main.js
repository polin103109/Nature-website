
document.addEventListener('DOMContentLoaded', function () {
  const checkbox = document.getElementById('nav-toggle');
  const navigationButton = document.querySelector('.navigation__button');
  const navigationNav = document.querySelector('.navigation__nav');
 // const navigationBackground = document.querySelector('.navigation__background');

  navigationButton.addEventListener('click', function () {
      checkbox.checked = !checkbox.checked;
      updateNavigationState();
  });

  // Update navigation state on checkbox change
  checkbox.addEventListener('change', function () {
      updateNavigationState();
  });

  function updateNavigationState() {
      const isOpen = checkbox.checked;
      document.body.classList.toggle('nav-open', isOpen);
      navigationNav.style.opacity = isOpen ? 1 : 0;
      navigationNav.style.width = isOpen ? '100%' : '0';
     // navigationBackground.style.transform = isOpen ? 'scale(80)' : 'scale(0)';
  }
});
