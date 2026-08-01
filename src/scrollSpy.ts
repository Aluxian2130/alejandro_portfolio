export function initScrollSpy(): void {
  const sections = Array.from(document.querySelectorAll<HTMLElement>('section[id]'));
  const navLinks = Array.from(document.querySelectorAll<HTMLElement>('.nav-link'));

  const setActiveLink = (): void => {
    let current = '';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 80;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id') ?? '';
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active-link');
      const href = link.getAttribute('href') ?? '';
      if (href.includes(current)) {
        link.classList.add('active-link');
      }
    });
  };

  window.addEventListener('scroll', setActiveLink);
  setActiveLink();
}
