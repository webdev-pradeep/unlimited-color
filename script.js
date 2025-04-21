const colorChang = function () {
  let hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalId;

function startBgChange() {
  document.body.style.background = colorChang();
  document.body.style.color = "white";
}
document.querySelector("#start").addEventListener("click", () => {
  if (!intervalId) {
    intervalId = setInterval(startBgChange, 1000);
  }
});

document.querySelector("#stop").addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
});
