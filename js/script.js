document.addEventListener("DOMContentLoaded", () => {
  const trigger = document.querySelector(".ball-block");
  const answerNode = document.querySelector(".ball-res");

  const answers = [
    "Так",
    "Ні",
    "Мабуть",
    "Я не знаю",
    "Треба спробувати",
    "Звичайно так!",
    "Краще не треба",
    "Перефразуй питання та спробуй ще",
    "Можливо",
    "Це не можливо",
    "Краще поїж",
    "Твоєї усмішки буде достатньо",
    "Спробуй це",
    ":-)",
    "Так, зроби це!",
    "Обов'язково",
  ];

  trigger.addEventListener("click", () => {
    answerNode.classList.remove("fadeIn");
    answerNode.innerHTML = answers[Math.floor(Math.random() * answers.length)];
    requestAnimationFrame(() => {
      answerNode.classList.add("fadeIn");
    });
  });
});
