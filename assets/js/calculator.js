// Calculator Range Input

let sliderRange = document.querySelector("#slider");
let sliderOutput = document.querySelector("#output");

// sliderOutput.value = sliderRange.value;

sliderRange.oninput = function () {
  sliderOutput.value = this.value;
};
sliderOutput.oninput = function () {
  sliderRange.value = this.value;
};

// Section - Data

const apartments = [
  {
    id: 0,
    type: function () {
      square.classList.add("hidden");
      cm.classList.add("hidden");
      slider.classList.add("hidden");
      result.classList.add("hidden");
    },
  },
  {
    id: 1,
    type: function () {
      sliderType();
    },
    cmPrice: 3000,
    squarePrice: 700,
  },
  {
    id: 2,
    type: function () {
      squareType();
    },
    cmPrice: 3000,
    squarePrice: 200,
  },
  {
    id: 3,
    type: function () {
      sliderType();
    },
    cmPrice: 100,
    squarePrice: 7000,
  },
];

// Section - Calculator functionality

// Select all elements to show and hide them when necessary
let select = document.querySelector(".form-select");
let square = document.querySelector(".square-wrapper");
let cm = document.querySelector(".cm-wrapper");
let slider = document.querySelector(".slider-wrapper");
let result = document.querySelector(".result");

const squareType = () => {
  result.classList.add("hidden");
  slider.classList.add("hidden");
  cm.classList.add("hidden");
  square.classList.remove("hidden");
};

const sliderType = () => {
  result.classList.add("hidden");
  square.classList.add("hidden");
  cm.classList.remove("hidden");
  slider.classList.remove("hidden");
};

const calculatePriceCM = () => {
  cmValue = document.querySelector("#cm-value").value;

  if (sliderOutput.value != "" && cmValue != "") {
    result.classList.remove("hidden");
  } else result.classList.add("hidden");

  price = sliderOutput.value * cmPrice * cmValue;
  finalPrice.innerText = price.toLocaleString();
};

const calculatePriceSquare = () => {
  // cmValue = document.querySelector("#cm-value").value;

  // if (sliderOutput.value != "" && cmValue != "") {
  //   result.classList.remove("hidden");
  // } else result.classList.add("hidden");

  // price = sliderOutput.value * cmPrice * cmValue;
  // finalPrice.innerText = price.toLocaleString();
};

let price, squarePrice, cmPrice;
let finalPrice = document.querySelector("#final-price");

select.onchange = () => {
  let i = select.selectedIndex;

  apartments[i].type();
  // sliderPrice = apartments[i].sliderPrice;
  cmPrice = apartments[i].cmPrice;
  squarePrice = apartments[i].squarePrice;

  // switch (i) {
  //   case 0:
  //     break;
  //   case 1:
  //     apartments[1].type();
  //     sliderPrice = 1;
  //     cmPrice = 700;
  //     squarePrice = 1;
  //     break;
  //   case 2:
  //     squareType();
  //     cmPrice = 1;
  //     squarePrice = 400;
  //     sliderPrice = 1;
  //     break;
  //   case 3:
  //     sliderType();
  //     cmPrice = 3000;
  //     squarePrice = 700;
  //     sliderPrice = 1;
  //     break;
  //   case 4:
  //     sliderType();
  //     sliderPrice = 1000;
  //     cmPrice = 800;
  //     squarePrice = 1;
  //     break;
  //   case 5:
  //     squareType();
  //     sliderPrice = 1;
  //     cmPrice = 1;
  //     squarePrice = 20;
  //     break;
  //   default:
  //     text = "No value found";
  // }
  finalPrice.innerText = 0;
  let squareValue;
  let cmValue;
};

slider.oninput = () => {
  // cmValue = document.querySelector("#cm-value").value;
  // if (sliderOutput.value != "" && cmValue != "") {
  //   result.classList.remove("hidden");
  // } else result.classList.add("hidden");
  // price = sliderOutput.value * cmPrice * cmValue;
  // finalPrice.innerText = price.toLocaleString();
  calculatePriceCM();
};

cm.oninput = () => {
  calculatePriceCM();
};

square.oninput = () => {
  calculatePriceSquare();
};
