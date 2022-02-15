const showButton = document.querySelector(".showanswerbutton");
const answerText = document.querySelector(".answer");
showButton.addEventListener("click", () => {
  answerText.classList.toggle("answer");
});
