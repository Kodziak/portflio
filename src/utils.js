export default {
  setMenuState(component) {
    const menuButtons = document.querySelectorAll('.menu-btn');

    menuButtons.forEach((el) => {
      const clicked = el.textContent.replace(/\s/g, '').toLowerCase();
      const comp = component.replace(/\s/g, '').toLowerCase();
      el.classList.remove('menu-btn--active');
      if (clicked === comp) {
        el.classList.add('menu-btn--active');
      }
    });
  },
};
