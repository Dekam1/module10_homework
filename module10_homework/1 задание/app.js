//Задание 1.

//Сверстайте кнопку, которая будет содержать в себе icon_01 (как в примере в последнем видео). При клике на кнопку иконка должна меняться на icon_02. Повторный клик меняет иконку обратно.

const icon = document.querySelector(".icon");
icon.addEventListener("click", () => {
  const items = icon.querySelectorAll(".my-style");
  items.forEach((item) => {
    item.classList.toggle("none");
  });
});
