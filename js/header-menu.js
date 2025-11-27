// Mobile menu toggle logic for Clarity Bot landing
// Accessible: updates aria-expanded, traps focus minimal.

(function () {
  const burger = document.querySelector('.header__burger');
  const menu = document.getElementById('mobileMenu');
  if (!burger || !menu) return;

  function toggleMenu() {
    const open = menu.classList.toggle('mobile-menu--active');
    burger.setAttribute('aria-expanded', open);
    if (open) {
      // move focus into menu
      const firstLink = menu.querySelector('a');
      firstLink && firstLink.focus();
      // prevent body scroll
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      burger.focus();
    }
  }

  burger.addEventListener('click', toggleMenu);
  const closeBtn = menu.querySelector('.mobile-menu__close');
  closeBtn && closeBtn.addEventListener('click', toggleMenu);

  // Close on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('mobile-menu--active')) {
      toggleMenu();
    }
  });
})();
