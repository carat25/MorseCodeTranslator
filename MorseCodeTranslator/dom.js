import { morseToEnglish, englishToMorse } from "./functions.js";

const englishOption = document.getElementById("english");
const morseOption = document.getElementById("morse");
const inputField = document.getElementById("input");
const outputField = document.getElementById("output");
const submitButton = document.getElementById("submit");
const resetButton = document.getElementById("reset");

let translationMode;
let textToTranslate;

const onTranslationBtnClick = (event) => {
  translationMode = event.target.value;
};
englishOption.addEventListener("change", onTranslationBtnClick);
morseOption.addEventListener("change", onTranslationBtnClick);

const onInputText = (event) => {
  textToTranslate = event.target.value;
};
inputField.addEventListener("input", onInputText);

const onSubmit = (event) => {
  if (translationMode === "morse") {
    const result = englishToMorse(textToTranslate);
    outputField.value = result;
  } else if (translationMode === "english") {
    const result = morseToEnglish(textToTranslate);
    outputField.value = result;
  }
};
submitButton.addEventListener("click", onSubmit);

const onReset = (event) => {
  outputField.value = "";
  inputField.value = "";
};

resetButton.addEventListener("click", onReset);

morseOption.click();
