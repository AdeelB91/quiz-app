const questionCard = document.querySelectorAll('[data-js="card"]');

questionCard.forEach(card => {
  const bookmarkIcon = card.querySelector('[data-js="bookmark"]');
  const showButton = card.querySelector('[data-js="answerbutton"]');
  const answerText = card.querySelector('[data-js="card-answer"]');
  const showAnswerText = card.querySelector('[data-js="showAnswer"]');
  const hideAnswerText = card.querySelector('[data-js="hideButton"]');

  bookmarkIcon.addEventListener('click', () => {
    bookmarkIcon.classList.toggle('markedBookmark');
  });

  showButton.addEventListener('click', () => {
    answerText.classList.toggle('hidden');
    showAnswerText.classList.toggle('hidden');
    hideAnswerText.classList.toggle('hidden');
  });
});

const navHome = document.querySelector('[data-js="homePage"]');
const navBookmarks = document.querySelector('[data-js="bookmarkPage"]');
const navCreate = document.querySelector('[data-js="createPage"]');
const navProfile = document.querySelector('[data-js="profilePage"]');

const homeButton = document.querySelector('[data-js="homeButton"]');
const bookmarkButton = document.querySelector('[data-js="bookmarkButton');
const createButton = document.querySelector('[data-js="createButton');
const profileButton = document.querySelector('[data-js="profileButton');

const array = [homeButton, bookmarkButton, createButton, profileButton];
const array2 = [navHome, navBookmarks, navCreate, navProfile];

array.forEach(function (button1, index) {
  button1.addEventListener('click', () => {
    click(array2[index]);
  });
});

function click(aktion) {
  array2.forEach(function (button) {
    if (button == aktion) {
      aktion.classList.remove('hidden');
    } else {
      button.classList.add('hidden');
    }
  });
}

const typeQuestCounter = document.querySelector('[data-js="counter"]');
const textQuestArea = document.querySelector('[data-js="questtextarea"]');
const textAnswerArea = document.querySelector('[data-js="answertextarea"]');
const typeAnswerCounter = document.querySelector('[data-js="answercounter"]');
const textTagArea = document.querySelector('[data-js="tagtextarea"]');
const typeTagCounter = document.querySelector('[data-js="tagcounter"]');
const maxCharacters = 200;

textQuestArea?.addEventListener('input', () => {
  if (textQuestArea.value.length <= maxCharacters) {
    typeQuestCounter.textContent = ` ${textQuestArea.value.length} /${maxCharacters}`;
  }
});

textAnswerArea?.addEventListener('input', () => {
  if (textAnswerArea.value.length <= maxCharacters) {
    typeAnswerCounter.textContent = `${textAnswerArea.value.length} /${maxCharacters}`;
  }
});

textTagArea?.addEventListener('input', () => {
  if (textTagArea.value.length <= maxCharacters) {
    typeTagCounter.textContent = `${textTagArea.value.length} /${maxCharacters}`;
  }
});
