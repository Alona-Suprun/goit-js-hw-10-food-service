const body = document.querySelector('body');
const switcher = document.querySelector('#theme-switch-toggle');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const onChangeSwitcherTheme = e => {
  if (e.target.checked === true) {
    body.classList.add(Theme.DARK);
    body.classList.remove(Theme.LIGHT);
    localStorage.setItem('custom-theme', Theme.DARK);
  } else {
    body.classList.add(Theme.LIGHT);
    body.classList.remove(Theme.DARK);
    localStorage.setItem('custom-theme', Theme.LIGHT);
  }
};

switcher.addEventListener('change', onChangeSwitcherTheme);

const saveTheme = () => {
  const customTheme = localStorage.getItem('custom-theme');

  body.classList.add(customTheme);
  if (customTheme === Theme.DARK) {
    switcher.checked = true;
  } else {
    body.classList.add(Theme.LIGHT);
  }
};

saveTheme();
