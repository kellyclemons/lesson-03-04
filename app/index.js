import 'whatwg-fetch';

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
    <h2 class="profile__company">Company Name</h2>

    <h3 class="profile__location">Country, City</h3>

    <p class="profile__skill">Skill</p>
  </div>`;

  gridItem.querySelector('.profile__company').innerText = profile.company;
  gridItem.querySelector('.profile__location').innerText = `${profile.country}, ${profile.city}`;
  gridItem.querySelector('.profile__skill').innerText = profile.skill;

  return gridItem;
}

const yahoo = createProfileElement({ company: 'Yahoo' });

// Add the gridItem for Yahoo to the end of the "grid" element
grid.appendChild(yahoo);
// document.body.querySelector('.profile__company').innerText = 'THIS IS THE FIRST ONE!!!';
