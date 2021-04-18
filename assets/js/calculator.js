// Section - All the data needed for calculations

const data = [
  {
    id: 0,
    type: function () {
      squareInput.classList.add("hidden");
      cmInput.classList.add("hidden");
      slider.classList.add("hidden");
      result.classList.add("hidden");
    },
  },
  {
    id: 1,
    type: function () {
      sliderType();
    },
    price: 3000,
  },
  {
    id: 2,
    type: function () {
      squareType();
    },
    price: 200,
  },
  {
    id: 3,
    type: function () {
      sliderType();
    },
    price: 1200,
  },
  {
    id: 4,
    type: function () {
      squareType();
    },
    price: 450,
  },
];

// Section - Match range slider with its input

let sliderRange = document.querySelector("#slider");
let sliderOutput = document.querySelector("#output");

sliderRange.oninput = function () {
  sliderOutput.value = this.value;
};
sliderOutput.oninput = function () {
  sliderRange.value = this.value;
};

// Section - Calculator functionality

// Select all elements to show and hide them when necessary
let select = document.querySelector(".form-select");
let squareInput = document.querySelector(".square-input-wrapper");
let cmInput = document.querySelector(".cm-input-wrapper");
let slider = document.querySelector(".slider-wrapper");
let result = document.querySelector(".result");

// Select all the input to later use their values
let finalPrice = document.querySelector("#final-price");
squareValue = document.querySelector("#square-value");
cmValue = document.querySelector("#cm-value");

// Toggle classes to display appropriate elements
const squareType = () => {
  result.classList.add("hidden");
  slider.classList.add("hidden");
  cmInput.classList.add("hidden");
  squareInput.classList.remove("hidden");
};
const sliderType = () => {
  result.classList.add("hidden");
  squareInput.classList.add("hidden");
  cmInput.classList.remove("hidden");
  slider.classList.remove("hidden");
};

// Calculate and format the price and display it on the page
const calculatePriceCM = () => {
  if (sliderOutput.value != "" && cmValue.value != "") {
    result.classList.remove("hidden");
  } else result.classList.add("hidden");

  price = sliderOutput.value * cmValue.value * productPrice;
  finalPrice.innerText = price.toLocaleString();
};
const calculatePriceSquare = () => {
  if (squareValue.value != "") {
    result.classList.remove("hidden");
  } else result.classList.add("hidden");

  price = squareValue.value * productPrice;
  finalPrice.innerText = price.toLocaleString();
};

// Triggers to call the appropriate functions when changes are made on the page
select.onchange = () => {
  let i = select.selectedIndex;
  data[i].type();
  productPrice = data[i].price;

  squareValue.value = cmValue.value = sliderOutput.value = "";
  sliderRange.value = 6;
};
slider.oninput = () => {
  calculatePriceCM();
};
cmInput.oninput = () => {
  calculatePriceCM();
};
squareInput.oninput = () => {
  calculatePriceSquare();
};
