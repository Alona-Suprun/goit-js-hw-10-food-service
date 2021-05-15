import menuItem from './menu.json';
import menuTemplate from './templates/templates.hbs';
import './switcher.js';
import './styles.css';

const menuContainer = document.querySelector('.js-menu');

const createMenu = menuItem => {
  return menuTemplate(menuItem);
};

const menuList = createMenu(menuItem);
menuContainer.insertAdjacentHTML('beforeend', menuList);
