export default create;

function create() {
  const typeQuestCounter = document.querySelector('[data-js="counter"]');
  const textQuestArea = document.querySelector('[data-js="questtextarea"]');
  const textAnswerArea = document.querySelector('[data-js="answertextarea"]');
  const typeAnswerCounter = document.querySelector('[data-js="answercounter"]');
  const textTagArea = document.querySelector('[data-js="tagtextarea"]');
  const typeTagCounter = document.querySelector('[data-js="tagcounter"]');
  const maxCharacters = 200;

  textQuestArea.addEventListener('input', () => {
    if (textQuestArea.value.length <= maxCharacters) {
      typeQuestCounter.textContent = ` ${textQuestArea.value.length} /${maxCharacters}`;
    }
  });

  textAnswerArea.addEventListener('input', () => {
    if (textAnswerArea.value.length <= maxCharacters) {
      typeAnswerCounter.textContent = `${textAnswerArea.value.length}/${maxCharacters}`;
    }
  });

  textTagArea.addEventListener('input', () => {
    if (textTagArea.value.length <= maxCharacters) {
      typeTagCounter.textContent = `${textTagArea.value.length} /${maxCharacters}`;
    }
  });
}
