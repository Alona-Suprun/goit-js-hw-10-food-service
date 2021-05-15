const body = document.querySelector('body');
const switcher = document.querySelector('#theme-switch-toggle');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const onChangeSwitcherTheme = () => {
  body.classList.add(Theme.LIGHT);
  if (body.classList.value === Theme.LIGHT) {
    body.classList.add(Theme.DARK);
    body.classList.remove(Theme.LIGHT);
  } else {
    body.classList.add(Theme.LIGHT);
    body.classList.remove(Theme.DARK);
  }
};

switcher.addEventListener('change', onChangeSwitcherTheme);
