import textToMorse from "./translator.js"

const inputElem = document.querySelector(".input-box")
const outputElem = document.querySelector(".output-box")
const convertBtn = document.querySelector(".convert-button")


convertBtn.addEventListener('click', () => {
  const inputStr = inputElem.value
  if (/^[a-zA-Z\s]*$/.test(inputStr)) {
    outputElem.innerHTML = textToMorse(inputStr)
  } else {
    outputElem.innerHTML = "Please enter string with letters only"
  }
})