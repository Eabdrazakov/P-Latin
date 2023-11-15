const vowels = ["a", "e", "i", "o", "u"];

function pLatin(text) {
    const textArray = text.toLowerCase().split(" ");
    let result = [];
    for (let i = 0; i < textArray.length; i++) {
        if (vowels.includes(textArray[i][0])) {
            result.push(textArray[i] + "way")
            return result
        } else if (!vowels.includes(textArray[i][0])) {
            result.push(textArray[i].slice(1) + textArray[i][0] + "ay")
        }
    }
    return result;
}
