import "../scss/contact.scss";

const form = document.querySelector("#contact-form");
const name = document.querySelector('[name = "name"]');
const email = document.querySelector('[name = "email"]');
const subject = document.querySelector('[name = "subject"]');
const message = document.querySelector('[name = "message"]');
const btn = document.querySelector(".app-form-button");
const loader = document.querySelector(".app-form-group .loader");

const sendMail = (name, email, subject, message) => {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "shs.ad.agency@gmail.com",
    Password: "ykpqrtbjxmpgndlh",
    To: "info@shs.am",
    From: "info@shs.am",
    ReplyAddress: email,
    Subject: `Contact form message about ${subject}`,
    Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message} <br/>`,
  }).then((message) => {
    form.classList.remove("was-validated");
    form.reset();
    btn.setAttribute("value", "Նամակն ուղարկվել է");
    form.removeEventListener("submit", handleValidation);
    btn.addEventListener("click", (e) => {
      e.preventDefault();
    });
    loader.style.display = "none";
    btn.style.display = "block";
  });
};

const handleValidation = (e) => {
  if (!form.checkValidity()) {
    e.preventDefault();
    e.stopPropagation();
  } else if (form.checkValidity()) {
    e.preventDefault();
    e.stopPropagation();
    sendMail(name.value, email.value, subject.value, message.value);
    btn.style.display = "none";
    loader.style.display = "block";
  }
  form.classList.add("was-validated");
};

form.addEventListener("submit", handleValidation);
