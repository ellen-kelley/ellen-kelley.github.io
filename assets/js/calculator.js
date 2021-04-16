// Calculator Range Input

let sliderRange = document.querySelector("#slider");
let sliderOutput = document.querySelector("#output");

sliderOutput.value = sliderRange.value;

sliderRange.oninput = function () {
  sliderOutput.value = this.value;
};
sliderOutput.oninput = function () {
  sliderRange.value = this.value;
};

let select = document.querySelector(".form-select");
let square = document.querySelector(".square-wrapper");
let cm = document.querySelector(".cm-wrapper");
let slider = document.querySelector(".slider-wrapper");
let result = document.querySelector(".result");

// result.innerText = output.value * 5000;
let sliderPrice, squarePrice, cmPrice;
let finalPrice = document.querySelector("#final-price");

select.onchange = () => {
  let i = select.selectedIndex;

  // console.log(i);

  // if (i == 2) {
  //   slider.classList.add("hidden");
  //   cm.classList.add("hidden");
  //   square.classList.remove("hidden");
  // }
  // if (i == 3) {
  //   slider.classList.add("hidden");
  //   square.classList.add("hidden");
  //   cm.classList.remove("hidden");
  // }

  switch (i) {
    case 0:
      square.classList.add("hidden");
      cm.classList.add("hidden");
      slider.classList.add("hidden");
      result.classList.add("hidden");
      break;
    case 1:
      square.classList.add("hidden");
      cm.classList.remove("hidden");
      slider.classList.remove("hidden");
      result.classList.remove("hidden");
      sliderPrice = 1;
      cmPrice = 2500;
      squarePrice = 1;
      // console.log(cmPrice, squarePrice, sliderPrice);
      break;
    case 2:
      slider.classList.add("hidden");
      cm.classList.add("hidden");
      square.classList.remove("hidden");
      result.classList.remove("hidden");
      cmPrice = 1200;
      squarePrice = 400;
      sliderPrice = 1;
      // console.log(cmPrice, squarePrice, sliderPrice);
      break;
    case 3:
      slider.classList.add("hidden");
      square.classList.add("hidden");
      cm.classList.remove("hidden");
      result.classList.remove("hidden");
      cmPrice = 3000;
      squarePrice = 700;
      sliderPrice = 1;
      // console.log(cmPrice, squarePrice, sliderPrice);
      break;
    case 4:
      square.classList.add("hidden");
      cm.classList.remove("hidden");
      slider.classList.remove("hidden");
      result.classList.remove("hidden");
      sliderPrice = 1000;
      cmPrice = 800;
      squarePrice = 1;
      // console.log(cmPrice, squarePrice, sliderPrice);
      break;
    case 5:
      cm.classList.add("hidden");
      slider.classList.add("hidden");
      square.classList.remove("hidden");
      result.classList.remove("hidden");
      sliderPrice = 1;
      cmPrice = 1;
      squarePrice = 1;
      // console.log(cmPrice, squarePrice, sliderPrice);
      break;
    default:
      text = "No value found";
  }
  finalPrice.innerText = sliderOutput.value * sliderPrice * cmPrice * squarePrice;
  let squareValue = document.querySelector("#square-value-1").value;
// let cmValue = document.querySelector("#cm-value");
console.log(squareValue);
};

slider.oninput = () => {
  finalPrice.innerText = sliderOutput.value * cmPrice * squarePrice;
};
cm.oninput = () => {
  finalPrice.innerText = sliderOutput.value * cmPrice * squarePrice;
};
square.oninput = () => {
  let squareValue = document.querySelector("#square-value-1").value;
  finalPrice.innerText = cmPrice * squarePrice * squareValue * 1000;
};
