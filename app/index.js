import 'whatwg-fetch';

const grid = document.querySelector('.grid');

// Create a new div element in memory
const gridItem = document.createElement('div');

// NOTE: We are adding a class name not specifying a class query selector
// So no `.` here
gridItem.classList.add('grid__item');
gridItem.innerText = 'YAY I MADE A NEW ELEMENT!';
console.log(gridItem);

debugger;

const company = document.createElement('h2');
company.classList.add('profile__company');
company.innerText = 'Yahoo';

gridItem.appendChild(company);

// Add the gridItem to the end of the "grid" element
grid.appendChild(gridItem);
