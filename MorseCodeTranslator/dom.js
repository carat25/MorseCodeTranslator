import { morseToEnglish, englishToMorse } from "./functions.js";

// const forwardTranslation = {
//     a: ".-",
//     b: "-...",
//     c: "-.-.",
//     d: "-..",
//     e: ".",
//     f: "..-.",
//     g: "--.",
//     h: "....",
//     i: "..",
//     j: ".---",
//     k: "-.-",
//     l: ".-..",
//     m: "--",
//     n: "-.",
//     o: "---",
//     p: ".--.",
//     q: "--.-",
//     r: ".-.",
//     s: "...",
//     t: "-",
//     u: "..-",
//     v: "...-",
//     w: ".--",
//     x: "-..-",
//     y: "-.--",
//     z: "--..",
//     1: ".----",
//     2: "..---",
//     3: "...--",
//     4: "....-",
//     5: ".....",
//     6: "-....",
//     7: "--...",
//     8: "---..",
//     9: "----.",
//     0: "-----"
// }

// const reverseTranslation = Object.entries(forwardTranslation).reduce((acc, [key, value]) => {
//     acc[value] = key;
//     return acc;
// }, {});

const englishOption = document.getElementById("english");
const morseOption = document.getElementById("morse");
const inputField = document.getElementById("input");
const outputField = document.getElementById("output");
const submitButton = document.getElementById("submit");
const resetButton = document.getElementById("reset");


let translationMode;
let textToTranslate;


const onTranslationBtnClick = (event) => { 
    translationMode = event.target.value
};
englishOption.addEventListener("change", onTranslationBtnClick);
morseOption.addEventListener("change", onTranslationBtnClick);

const onInputText = (event) => {
    textToTranslate = event.target.value;
}
inputField.addEventListener("input", onInputText);

// const englishKeys = Object.keys(translation); //array of keys (english)
// const morseKeys = Object.keys(reverseTranslation); //arrays of keys (morse)



const onSubmit = (event) => {
    if (translationMode === "morse") {
        const result = englishToMorse(textToTranslate);
        outputField.value = result;
    } else if (translationMode === "english") {
        const result = morseToEnglish(textToTranslate);
        outputField.value = result;
    } 
}
submitButton.addEventListener("click", onSubmit);


const onReset = (event) => {
        outputField.value = "";
        inputField.value = "";
    } 

resetButton.addEventListener("click", onReset);


// const englishToMorse = (textInput) => {
//     const words = textInput.toLowerCase().split(""); //e.x ["w", "e", "l", "c", "o", "m", "e"]
//     const translatedArray = words.map((char) => {
//         if (char === " ") {
//             return " ";
//         }
//         return forwardTranslation[char];
//     });
//     return translatedArray.join('');
// } 
// console.log(englishToMorse("hello world"));


            
// const morseToEnglish = (textInput) => {
//     const words = textInput.split("    "); //e.x ["- .... ." "-.-. .- -"]
//     const translatedArray = words.map((word) => {
//         const chars = word.split(" "); //e.x {["-" "..." "."] ["-.-." ".-" "-"]}
//         const translatedCharsArray = chars.map(char => {
//             return reverseTranslation[char];
//         });
//         return translatedCharsArray.join("");
//     });
//     return translatedArray.join(" ");
// } 
// console.log(morseToEnglish("- .... .    -.-. .- -"));

morseOption.click();



