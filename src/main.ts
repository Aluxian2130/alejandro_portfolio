import { initTheme } from './theme';
import { initImageRotation } from './imageRotation';
import { initProjects } from './projects';
import { initScrollSpy } from './scrollSpy';
import { initSparkles } from './sparkles';

export {};

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initImageRotation();
  initScrollSpy();
  initProjects();
  initSparkles();
});
