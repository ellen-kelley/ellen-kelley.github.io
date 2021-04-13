// Calculator Range Input

let slider = document.querySelector("#slider");
let output = document.querySelector("#output");

output.value = slider.value;

slider.oninput = function () {
  output.value = this.value;
};
output.oninput = function () {
  slider.value = this.value;
};
