const ratingSection = document.querySelector(".rating-section");
const thankyouSection = document.querySelector(".thankyou-section");
const selectedNumber = document.querySelector(".thankyou-section__selected--number");

const buttonNumber = [...document.querySelectorAll(".rating-section__score-container__number")];
const buttonSubmit = document.querySelector(".rating-section__submit");

let numberValue = null;

buttonNumber.forEach(number => {
    number.addEventListener("click", (event)=>{
        numberValue = event.target.innerHTML;
    })
});

buttonSubmit.addEventListener("click", ()=>{
    if (numberValue >= 1 && numberValue <= 5) {
        ratingSection.style.display = "none";
        thankyouSection.style.display = "block";
        selectedNumber.innerHTML = numberValue;
    }
});