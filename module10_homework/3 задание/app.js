//Задание 3.

// 1) Реализовать чат на основе эхо-сервера wss://echo-ws-service.herokuapp.com.
// Интерфейс состоит из input, куда вводится текст сообщения, и кнопки «Отправить».
// При клике на кнопку «Отправить» сообщение должно появляться в окне переписки.
// Эхо-сервер будет отвечать вам тем же сообщением, его также необходимо выводить в чат:
// 2)Добавить в чат механизм отправки гео-локации:


function initApp() {
  const btn = document.getElementById("btn");
  const btnGeo = document.getElementById("btnGeo");
  const chat = document.querySelector(".chat");
  const input = document.querySelector(".input");
  const client = document.querySelector(".client");
  const server = document.querySelector(".server");
  const wsUrl = "wss://echo-ws-service.herokuapp.com";

  let websocket = new WebSocket(wsUrl);

  const definitionGeo = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    let create = `
    <a target="_blank" style='display: block'href='https://www.openstreetmap.org/#map=18/${latitude}/${longitude}' class="message-client">Гео-локация</a>
    `;
    client.innerHTML += create;
    websocket.send(position);
  };

  function addMessageServer() {
    websocket.onmessage = function (evt) {
      let message = evt.data;
      if (message == "[object GeolocationPosition]") {
        return;
      }
      let create = `
      <div class="message-server">${message}</div>
      `;
      server.innerHTML += create;
    };
  }

  function addMessageClient() {
    let message = input.value;
    if (!message) return;
    let create = `
    <div class="message-client">${message}</div>
    `;
    client.innerHTML += create;
    websocket.send(message);
  }

  btn.addEventListener("click", addMessageClient);
  btn.addEventListener("click", addMessageServer);
  btnGeo.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(definitionGeo);
  });
}

document.addEventListener("DOMContentLoaded", initApp);


