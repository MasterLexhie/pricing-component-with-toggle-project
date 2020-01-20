const TOGGLE = document.querySelector("#toggle");
const ANNUALLY = document.querySelectorAll(".annual-price");
const MONTHLY = document.querySelectorAll(".monthly-price");

const toggleOptions = () => {
  ANNUALLY.forEach(element => {
    const hideAnnualPrice = element.classList;
    return TOGGLE ? hideAnnualPrice.toggle("hide") : "";
  });

  MONTHLY.forEach(element => {
    const hideAnnualPrice = element.classList;
    return TOGGLE ? hideAnnualPrice.toggle("hide") : "";
  });
};

// TOGGLE.addEventListener("keypress", toggleOptions());
