var word = prompt('Escribe una palabra');
word.toLowerCase();


function translatePigLatin(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newString = "";

    if (vowels.indexOf(str[0]) > -1) {
        newString = str + "way";
        return newString;
    } else {
        let firstMatch = str.match(/[aeiou]/g) || 0;
        let vowel = str.indexOf(firstMatch[0]);
        newString = str.substring(vowel) + str.substring(0, vowel) + "ay";
        return newString;
    }
}

document.write(translatePigLatin(word));
