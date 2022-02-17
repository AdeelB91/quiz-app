const showButton = document.querySelector('.showanswerbutton');
const answerText = document.querySelector('.answer');
const typeQuestCounter = document.querySelector('[data-js="counter"]');
const textQuestArea = document.querySelector('[data-js="questtextarea"]');
const textAnswerArea = document.querySelector('[data-js="answertextarea"]');
const typeAnswerCounter = document.querySelector('[data-js="answercounter"]');
const textTagArea = document.querySelector('[data-js="tagtextarea"]');
const typeTagCounter = document.querySelector('[data-js="tagcounter"]');

showButton?.addEventListener('click', () => {
  answerText.classList.toggle('answer');
});

textQuestArea?.addEventListener('input', () => {
  typeQuestCounter.textContent = textQuestArea.value.length;
});

textAnswerArea?.addEventListener('input', () => {
  typeAnswerCounter.textContent = textAnswerArea.value.length;
});

textTagArea?.addEventListener('input', () => {
  typeTagCounter.textContent = textTagArea.value.length;
});
