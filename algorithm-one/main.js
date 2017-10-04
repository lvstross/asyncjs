function upperCaseFirst(word){
    return word[0].toUpperCase() + word.slice(1);
    /*
    * upperCaseFirst takes in an array item and returns a concatination of the following:
    * 1. the first item in the string converted to an upper case character.
    * 2. the parameter sliced at position 1 leaving the rest of the word to concatinate.
    */
}

function upperCaseWords(sentence){
    var words = sentence.split(" ");
    for (var i = 0; i < words.length; i++){
        words[i] = upperCaseFirst(words[i]);
    }
    return words.join(" ");
    /*
    * upperCaseWords() takes in a string, assumed to be a sentence with spaces in between words.
    * The sentence is then split up into an array at every occurence of a space. 
    * The array is then looped over and passed to the upperCaseFirst function.
    * After the loop is finished, all items in the array are then joined together by a space back into a string.
    */
}

console.log(upperCaseWords("levi loves to laugh at lamas."));