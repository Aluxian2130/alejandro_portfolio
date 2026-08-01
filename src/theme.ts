declare global {
  interface Window {
    toggleDarkMode: () => void;
  }
}

export {};

export function initTheme(): void {
  const updateTheme = (isDark: boolean): void => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };

  const savedTheme = localStorage.getItem('theme');

  if (!savedTheme) {
    updateTheme(true);
    return;
  }

  updateTheme(savedTheme === 'dark');

  window.toggleDarkMode = () => {
    const isDark = document.documentElement.classList.contains('dark');
    updateTheme(!isDark);
  };
}
