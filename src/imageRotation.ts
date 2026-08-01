const heroImages = ['assets/images/UA.jpg', 'assets/images/USAF.jpg', 'assets/images/DEV.jpg'];
const hobbiesImages = ['assets/images/WoW.jpg', 'assets/images/Cinemark.jpg', 'assets/images/Tinker.png'];

export function initImageRotation(): void {
  const heroAvatar = document.getElementById('hero-avatar') as HTMLImageElement | null;
  const hobbiesAvatar = document.getElementById('hobbies-avatar') as HTMLImageElement | null;

  if (!heroAvatar || !hobbiesAvatar) {
    return;
  }

  let heroIndex = 0;
  let hobbiesIndex = 0;

  window.setInterval(() => {
    heroAvatar.style.opacity = '0';
    window.setTimeout(() => {
      heroIndex = (heroIndex + 1) % heroImages.length;
      heroAvatar.src = heroImages[heroIndex];
      heroAvatar.style.opacity = '1';
    }, 500);
  }, 3000);

  window.setInterval(() => {
    hobbiesAvatar.style.opacity = '0';
    window.setTimeout(() => {
      hobbiesIndex = (hobbiesIndex + 1) % hobbiesImages.length;
      hobbiesAvatar.src = hobbiesImages[hobbiesIndex];
      hobbiesAvatar.style.opacity = '1';
    }, 500);
  }, 5000);
}
