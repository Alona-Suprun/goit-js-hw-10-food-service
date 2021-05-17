const body = document.querySelector('body');
const switcher = document.querySelector('#theme-switch-toggle');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switchTheme = (oldTheme, newTheme) => {
  body.classList.add(newTheme);
  body.classList.remove(oldTheme);
  localStorage.setItem('custom-theme', newTheme);
};

const onChangeSwitcherTheme = e => {
  if (e.target.checked) {
    switchTheme(Theme.LIGHT, Theme.DARK);
  } else {
    switchTheme(Theme.DARK, Theme.LIGHT);
  }
};

switcher.addEventListener('change', onChangeSwitcherTheme);

const saveTheme = () => {
  if (localStorage.getItem('custom-theme') === Theme.DARK) {
    body.classList.add(Theme.DARK);
    switcher.checked = true;
  } else {
    body.classList.add(Theme.LIGHT);
  }
};

saveTheme();
