import menuItem from './menu.json';
import menuTemplate from './templates/templates.hbs';
import './switcher.js';
import './styles.css';

const menuContainer = document.querySelector('.js-menu');

const menu = menuItem => {
  return menuItem.map(menuTemplate).join('');
};

const menuList = menu(menuItem);
menuContainer.insertAdjacentHTML('beforeend', menuList);
