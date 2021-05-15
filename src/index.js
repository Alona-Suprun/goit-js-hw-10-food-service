import menuItem from './menu.json';
import menuTemplate from './templates/templates.hbs';
import './switcher.js';
import './styles.css';

const menuContainer = document.querySelector('.js-menu');
const menuMarkUp = menuListRender(menuItem);

const menuRender = menuItem => {
  return menuItem.map(menuTemplate).join('');
};

menuContainer.insertAdjacentHTML('beforeend', menuMarkUp);
