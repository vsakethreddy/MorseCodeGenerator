const textInput = document.getElementById("text");
const morseInput = document.getElementById("morse");
const morseCodeValues = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "V": "...-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--..",
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "'": ".----.",
    "!": "-.-.--",
    "/": "-..-.",
    "(": "-.--.",
    ")": "-.--.-",
    "&": ".-...",
    ":": "---...",
    ";": "-.-.-.",
    "=": "-...-",
    "+": ".-.-.",
    "-": "-....-",
    "_": "..--.-",
    "\"": ".-..-.",
    "$": "...-..-",
    "@": ".--.-.",
    " ": "/"
};
function textToMorse(text)
{
    let ans = ""
    for (let i = 0; i < text.length; i++) {
        ans += morseCodeValues[text[i]]+" ";
    }
    return ans;
}
textInput.addEventListener("input", function () {
    textInput.value=textInput.value.toUpperCase()
    morseInput.value=textToMorse(textInput.value);
});
function morseToText(morseCode) {
    const reverseMorseCodeValues={};
    for(let c in morseCodeValues)
    {
        const morse=morseCodeValues[c];
        reverseMorseCodeValues[morse]=c;
    }
    const words = morseCode.split(' / ');
    let ans = '';

    for (let i = 0; i < words.length; i++) 
    {
        const letters = words[i].split(' ');
        for (let j = 0; j < letters.length; j++) 
        {
            if (reverseMorseCodeValues.hasOwnProperty(letters[j])) 
            {
                ans += reverseMorseCodeValues[letters[j]];
            }
        }
        ans += ' ';
    }
    return ans.trim();
}
morseInput.addEventListener("input", function () {
    textInput.value=morseToText(morseInput.value);
});
