const body = document.querySelector('body');
const switcher = document.querySelector('#theme-switch-toggle');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

body.classList.add(Theme.LIGHT);
const onChangeSwitcherTheme = e => {
  if (e.target.classList.contains(Theme.LIGHT)) {
    e.classList.remove(Theme.LIGHT);
    e.classList.add(Theme.DARK);
  } else {
    e.classList.remove(Theme.DARK);
    e.classList.add(Theme.LIGHT);
  }
};

switcher.addEventListener('change', onChangeSwitcherTheme);
