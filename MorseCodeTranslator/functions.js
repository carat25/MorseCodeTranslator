const forwardTranslation = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    0: "-----"
}

const reverseTranslation = Object.entries(forwardTranslation).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
}, {});



export const englishToMorse = (textInput) => {
    const words = textInput.toLowerCase().split(""); //e.x ["w", "e", "l", "c", "o", "m", "e"]
    const translatedArray = words.map((char) => {
        if (char === " ") {
            return "    ";
        }
        return forwardTranslation[char];
    });
    return translatedArray.join(" ");
} 
// console.log(englishToMorse("hello world"));



            
export const morseToEnglish = (textInput) => {
    const words = textInput.split("    "); //e.x ["- .... ." "-.-. .- -"]
    const translatedArray = words.map((word) => {
        const chars = word.split(" "); //e.x {["-" "..." "."] ["-.-." ".-" "-"]}
        const translatedCharsArray = chars.map(char => {
            return reverseTranslation[char];
        });
        return translatedCharsArray.join("");
    });
    return translatedArray.join(" ");
} 
// console.log(morseToEnglish("- .... .    -.-. .- -"));


