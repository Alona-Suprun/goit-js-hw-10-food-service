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
  } else {
    body.classList.add(Theme.LIGHT);
    body.classList.remove(Theme.DARK);
  }

  localStorage.setItem('custom-theme', body.classList.value);
};

switcher.addEventListener('change', onChangeSwitcherTheme);

const saveTheme = e => {
  const customTheme = localStorage.getItem('custom-theme');
  if (customTheme) {
    body.classList.add(customTheme);
    if (e.target.value === Theme.DARK) {
      switcher.checked = true;
    } else {
      body.classList.add(Theme.LIGHT);
    }
  }
};

saveTheme();
