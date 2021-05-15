import "../scss/calculator.scss";

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
    name: "Ծավալային տառեր",
    type: function () {
      sliderType();
    },
    price: 500,
  },
  {
    id: 2,
    name: "Լուսավորվող արկղ (lightbox)",
    type: function () {
      squareType();
    },
    price: 80000,
  },
  {
    id: 3,
    name: "Բոնդերով երեսապատում",
    type: function () {
      squareType();
    },
    price: 25000,
  },

  {
    id: 4,
    name: "Բոնդերով լուսավորվող գովազդ",
    type: function () {
      squareType();
    },
    price: 80000,
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
const select = document.querySelector(".form-select");
const squareInput = document.querySelector(".square-input-wrapper");
const cmInput = document.querySelector(".cm-input-wrapper");
const slider = document.querySelector(".slider-wrapper");
const result = document.querySelector(".result");

// Print all dropdown options .
data.forEach((item) => {
  if (item.name) {
    select.innerHTML += `<option>${item.name}</option>`;
  }
});

// Select all the input to later use their values
let finalPrice = document.querySelector("#final-price");
let squareValue = document.querySelector("#square-value");
let cmValue = document.querySelector("#cm-value");
let productPrice, price;

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
  if (cmValue.value > 50) {
    price = sliderOutput.value * cmValue.value * (productPrice + 100);
  } else {
    price = sliderOutput.value * cmValue.value * productPrice;
  }
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
