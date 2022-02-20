export default cards;

function cards() {
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
}
