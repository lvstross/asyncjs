// findIndex function

/*
*   Returns the index of the array item that has a truthy value.
*   if we reach the end of the array without a truthy value
*   return -1.
*/
function findIndex(array, callback){
    for (var i = 0; i < array.length; i++){
        if(callback(arr[i], i, array)) {
            return i;
        }
    }
    return -1;
}

// forEach function
function forEach(arr, callback){
    for (var i = 0; i < arr.length; i++){
        callback(arr[i], i, arr);
    }
}

var strings = ["my", "forEach", "example"];
var result = "";
forEach(strings, function(str, index, array){
    if(array.length - 1 !== index){
        result += str + " ";
    }else {
        result += str + "!!!";
    }
});
console.log(result);


// Stack Example

/* 
* Third block on the stack as it word variable and processes it in it's 
* code block. First to pop off the stack.
*/
function upperCaseFirst(word){ 
    return word[0].toUpperCase() + word.slice(1);
}

// Second to get popped off the stack
function upperCaseWords(sentence){ // second block on the stack as it takes the parameters and passes it through it's code block.
    var words = sentence.split(" ");
    for (var i = 0; i < words.length; i++) {
        words[i] = upperCaseFirst(words[i]);
    }
    return words.join(" ");
}

console.log(upperCaseWords("lowercase words")); // First block on the stack as we are invoking a function.

// Now that the value was returned, the stack is now empty.