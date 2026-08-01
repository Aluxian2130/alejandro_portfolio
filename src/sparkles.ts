export function initSparkles(): void {
  const sparklesBg = document.getElementById('sparkles-bg');

  if (!sparklesBg) {
    return;
  }

  const sparkleCount = 30;
  const sparkles: HTMLDivElement[] = [];

  const randomBetween = (min: number, max: number): number => min + Math.random() * (max - min);

  for (let index = 0; index < sparkleCount; index += 1) {
    const sparkle = document.createElement('div');
    const size = randomBetween(1, 5);

    sparkle.style.position = 'absolute';
    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;
    sparkle.style.borderRadius = '50%';
    sparkle.style.background = 'radial-gradient(circle, #60aaff 60%, rgba(96,170,255,0.2) 100%)';
    sparkle.style.opacity = `${randomBetween(0.5, 0.9)}`;
    sparkle.style.left = `${randomBetween(0, 100)}%`;
    sparkle.style.top = `${randomBetween(0, 100)}%`;
    sparkle.style.filter = 'blur(0.5px)';
    sparkle.style.pointerEvents = 'none';
    sparkle.dataset.dx = `${randomBetween(-0.2, 0.2)}`;
    sparkle.dataset.dy = `${randomBetween(-0.1, 0.1)}`;

    sparklesBg.appendChild(sparkle);
    sparkles.push(sparkle);
  }

  const animateSparkles = (): void => {
    sparkles.forEach((sparkle) => {
      let left = parseFloat(sparkle.style.left);
      let top = parseFloat(sparkle.style.top);
      const dx = parseFloat(sparkle.dataset.dx ?? '0');
      const dy = parseFloat(sparkle.dataset.dy ?? '0');

      left += dx;
      top += dy;

      if (left < 0) {
        left = 100;
      }
      if (left > 100) {
        left = 0;
      }
      if (top < 0) {
        top = 100;
      }
      if (top > 100) {
        top = 0;
      }

      sparkle.style.left = `${left}%`;
      sparkle.style.top = `${top}%`;
    });

    window.requestAnimationFrame(animateSparkles);
  };

  animateSparkles();
}
