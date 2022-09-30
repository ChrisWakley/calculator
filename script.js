const clear = document.querySelector(".button__modifier--clear")
const handleClickClear = ((event) => {
    console.log("event object", event);
})

clear.addEventListener("click", handleClickClear);

const plusMinus = document.querySelector(".button__modifier--plusMinus")
const handleClickPm = ((event) => {
    console.log("event object", event);
})

plusMinus.addEventListener("click", handleClickPm);

const percent = document.querySelector(".button__modifier--percent")
const handleClickPercent = ((event) => {
    console.log("event object", event);
})

percent.addEventListener("click", handleClickPercent);