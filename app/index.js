import 'whatwg-fetch';
import companyList from './company';

const grid = document.querySelector('.grid');

/**
 * Creates a grid__item element filled in with a profile information
 * @param  {object} profile
 * @return {Element}
 */
function createProfileElement(profile) {
  // Create a new div element in memory
  const gridItem = document.createElement('div');

  // NOTE: We are adding a class name not specifying a class query selector
  // So no `.` here
  gridItem.classList.add('grid__item');
  gridItem.innerHTML = `
  <div class="profile">
    <h2 class="profile__company"></h2>

    <h3 class="profile__location"></h3>

    <p class="profile__skill"></p>
  </div>`;

  // Fill the
  gridItem.querySelector('.profile__company').innerText = profile.company;
  gridItem.querySelector('.profile__location').innerText = `${profile.country}, ${profile.city}`;
  gridItem.querySelector('.profile__skill').innerText = profile.skill;

  return gridItem;
}

// Clear the grid that we are about to fill
grid.innerHTML = '';

// for (let i = 0; i < companyList.length; i++) {
//   const company = companyList[i];
companyList.forEach((company) => {
  const profileElement = createProfileElement(company);

  // Add the profileElement to the end of the "grid" element
  grid.appendChild(profileElement);
});
