import "../scss/services.scss";

// Section - Tabs with no anchor on desktop //

const openTabs = (el) => {
  let btnTarget = el.currentTarget;
  let id = "#" + btnTarget.getAttribute("aria-controls");

  tabContent.forEach((el) => {
    el.classList.remove("show");
    el.classList.remove("active");
  });
  tabLinks.forEach((el) => {
    if (window.innerWidth > 768) {
      el.setAttribute("href", "#materials");
    }
    el.classList.remove("active");
  });
  document.querySelector(id).classList.add("show");
  btnTarget.classList.add("active");
};

let tabLinks = document.querySelectorAll(".tab-link");
let tabContent = document.querySelectorAll(".tab-pane");

tabLinks.forEach((el) => {
  el.addEventListener("click", openTabs);
});
