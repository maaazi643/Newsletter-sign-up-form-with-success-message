const subscribeButton = document.querySelector(".subscribe");

const mainPage = document.querySelector(".container");

const successMsg = document.querySelector(".success-msg");

const errorMessage = document.querySelector(".error-msg");

const emailInput = document.getElementById("email");
const dismissMsg = document.querySelector(".dismiss");


console.log(emailInput);

subscribeButton.addEventListener("click", (e) => {
  e.preventDefault();

  // emailInput.classList.remove("error-style");
  // errorMessage.textContent = "";

  if (emailInput.value.trim() === "") {
    emailInput.classList.add("error-style");
    errorMessage.textContent = "Please input your email";
    errorMessage.style.display = "block";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
    emailInput.classList.add("error-style");
    errorMessage.textContent = "Please input a valid email address";
    errorMessage.style.display = "block";
  } else {
    successMsg.style.display = "block";
    mainPage.style.display = "none";
  }
});

dismissMsg.addEventListener("click", () => {
  window.location.href = "https://www.google.com";
});
