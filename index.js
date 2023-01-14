import speaker from './module/data.js';

const guestSpeacker = document.querySelector('#guest');
// Mobile menue ------------
const hamburger = document.querySelector('.hamburger');
const mobileLink = document.querySelectorAll('.mobile-link');
const mobileMenue = document.querySelector('.mobile-menu');
function mobileToggleClassActive() {
  hamburger.classList.toggle('active');
  mobileMenue.classList.toggle('active');
}

hamburger.addEventListener('click', mobileToggleClassActive);
mobileLink.forEach((element) => {
  element.addEventListener('click', mobileToggleClassActive);
});

guestSpeacker.innerHTML = `
<h2 class="feature-h2">Feature Speakers</h2>
    <hr class="feature-hr">
    <div class="feature-container">
      <div class="speakers">
        <div class="guestSpeaker">
          <div class="guestSpeaker-img">
            <img src="${speaker[0].image}" class="quest-img" alt="img">
          </div>
          <div class="content">
            <h2 class="name">${speaker[0].name}</h2>
            <p class="profession">${speaker[0].profession}
            </p>

            <p class="about-me">${speaker[0].aboutMe}</p>
          </div>
        </div>
        <div class="guestSpeaker">
          <div class="guestSpeaker-img">
            <img src="${speaker[1].image}" class="quest-img" alt="img">
          </div>
          <div class="content">
            <h2 class="name">${speaker[1].name}</h2>
            <p class="profession">${speaker[1].profession}</p>

            <p class="about-me">${speaker[1].aboutMe}</p>
          </div>
        </div>
      </div>
      <div>
        <div class="guestSpeaker">
          <div class="guestSpeaker-img">
            <img src="${speaker[2].image}" class="quest-img" alt="img">
          </div>
          <div class="content">
            <h2 class="name">${speaker[2].name}</h2>
            <p class="profession">${speaker[2].profession}</p>

            <p class="about-me">${speaker[2].aboutMe}</p>
          </div>
        </div>
        <div class="guestSpeaker last">
          <div class="guestSpeaker-img">
            <img src="${speaker[3].image}" class="quest-img" alt="img">
          </div>
          <div class="content">
            <h2 class="name">${speaker[3].name}</h2>
            <p class="profession">${speaker[3].profession} </p>

            <p class="about-me">${speaker[3].aboutMe}</p>
          </div>
        </div>
      </div>
    </div>
`;