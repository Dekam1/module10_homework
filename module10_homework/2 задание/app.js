//Задание 2.

//Сверстайте кнопку, клик на которую будет выводить данные о размерах экрана с помощью alert. 

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  alert(
    `Ширина вашего экрана: ${window.screen.width} Высота вашего экрана: ${window.screen.height}`
  );
});

