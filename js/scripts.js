// function pLatin(text) {
//     const textArray = text.toLowerCase().split(" ");
//     let result = [];
//     for (let i = 0; i < textArray.length; i++) {
//         if (vowels.includes(textArray[i][0])) {
//             result.push(textArray[i] + "way")
//             return result
//         } else if (!vowels.includes(textArray[i][0])) {
//             result.push(textArray[i].slice(1) + textArray[i][0] + "ay")
//         }
//     }
//     return result;
// }

const vowels = ["a", "e", "i", "o", "u"];
const special = ["q", "u"]

function pLatin(text) {
    const textArray = text.toLowerCase().split(" ");
    let result = [];
    for (let i = 0; i < textArray.length; i++) {
        if (vowels.includes(textArray[i][0])) {
            result.push(textArray[i] + "way")
            return result
        } else if (special[0] === textArray[i][0] && special[1] === textArray[i][1]) {
            result.push(textArray[i].slice(2) + special.join("") + "ay")
            return result;
        } else {
            result.push(textArray[i].slice(1) + textArray[i][0] + "ay")
            return result;
        }
    }

}

console.log(pLatin("quick"))
console.log(pLatin("code"))
console.log(pLatin("a"))


// const vowels = ["a", "e", "i", "o", "u"];
// const special = "qu"

// function pLatin(text) {


//     if (vowels.includes(text[0])) {
//         return text + "way"
//     }
//     else if (text[0] === special[0] && text[1] === special[1]) {
//         return text.slice(2) + special + "ay"

//     }
//     else {
//         return text.slice(1) + text[0] + "ay"
//     }
// }

// console.log(pLatin("abc"))
// console.log(pLatin("burkut"))
// console.log(pLatin("qurkut"))

