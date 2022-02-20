export default nav;

function nav() {
  const navHome = document.querySelector('[data-js="homePage"]');
  const navBookmarks = document.querySelector('[data-js="bookmarkPage"]');
  const navCreate = document.querySelector('[data-js="createPage"]');
  const navProfile = document.querySelector('[data-js="profilePage"]');

  const homeButton = document.querySelector('[data-js="homeButton"]');
  const bookmarkButton = document.querySelector('[data-js="bookmarkButton');
  const createButton = document.querySelector('[data-js="createButton');
  const profileButton = document.querySelector('[data-js="profileButton');

  const homeIconBlack = document.querySelector('[data-js="homeIconBlack"]');
  const homeIconWhite = document.querySelector('[data-js="homeIconWhite"]');
  const bookmarkIconBlack = document.querySelector(
    '[data-js="bookmarkIconBlack"]'
  );
  const bookmarkIconWhite = document.querySelector(
    '[data-js="bookmarkIconWhite"]'
  );
  const createIconBlack = document.querySelector('[data-js="createIconBlack"]');
  const createIconWhite = document.querySelector('[data-js="createIconWhite"]');
  const profileIconBlack = document.querySelector(
    '[data-js="profileIconBlack"]'
  );
  const profileIconWhite = document.querySelector(
    '[data-js="profileIconWhite"]'
  );

  const iconBlack = [
    homeIconBlack,
    bookmarkIconBlack,
    createIconBlack,
    profileIconBlack,
  ];
  const iconWhite = [
    homeIconWhite,
    bookmarkIconWhite,
    createIconWhite,
    profileIconWhite,
  ];

  const buttons = [homeButton, bookmarkButton, createButton, profileButton];
  const navPage = [navHome, navBookmarks, navCreate, navProfile];

  buttons.forEach(function (button, index) {
    button.addEventListener('click', () => {
      click(navPage[index]);
    });
  });

  function click(aktion) {
    navPage.forEach(function (button, index) {
      if (button == aktion) {
        aktion.classList.remove('hidden');

        iconWhite[index].classList.remove('hidden');
        iconBlack[index].classList.add('hidden');
      } else {
        button.classList.add('hidden');

        iconWhite[index].classList.add('hidden');
        iconBlack[index].classList.remove('hidden');
      }
    });
  }
}
