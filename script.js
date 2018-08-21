var css = document.querySelector("h3");
var clrIpt = document.querySelector("#clrIpt");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.getElementById("gradient");
var rndBtn = document.querySelector("#rnd-btn");

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background;
  clrIpt.value = body.style.background;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function generateRandomColors() {
  color1.value = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
  color2.value = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
  setGradient();
}

css.onclick = function() {
  document.execCommand("copy");
};

css.addEventListener("copy", function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", css.textContent);
    console.log(event.clipboardData.getData("text"));
  }
});

rndBtn.addEventListener("click", generateRandomColors);

generateRandomColors();
