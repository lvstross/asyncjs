/*
* setTimeout() - A function that asynchronously invokes a callback after a delay in milliseconds.
* setInterval() - A function that continually invokes a callback after every X milliseconds, where X is provided to setInterval.
*/

// ============ setTimeout =============

/*
// Example One: setTimeout

setTimeout(() => {
    console.log("Hello");
    setTimeout(() => {
        console.log("there");
        setTimeout(() => {
            console.log("neighbor!");
        }, 1000);
    }, 1000);
}, 1000);
*/

/*
// Example Two: setTimeout

var timerId = setTimeout(() => {
    console.log("This function runs in 8 seconds.");
}, 8000);

setTimeout(() => {
    console.log("Canceling the first settimeout", timerId);
    clearTimeout(timerId);
}, 2000)
*/

// ============ setInterval =============

// Example One: setInterval

/*
function callback() {
    console.log('Callback is called continuously');
}
var repeat = 3000;
setInterval(callback, repeat);
*/


// Example Two: setInterval

/*
var num = 0;
var intervalId = setInterval(() => {
    num++;
    console.log("num: ", num);
    if (num === 3) {
        clearInterval(intervalId);
        console.log("IntervalId: " + intervalId + " has been cleared.");
    }
}, 1000);
*/