import UA from '../assets/images/UA.jpg';
import USAF from '../assets/images/USAF.jpg';
import DEV from '../assets/images/DEV.jpg';

import WoW from '../assets/images/WoW.jpg';
import Cinemark from '../assets/images/Cinemark.jpg';
import Tinker from '../assets/images/Tinker.png';

const heroImages = [UA, USAF, DEV];
const hobbiesImages = [WoW, Cinemark, Tinker];

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
