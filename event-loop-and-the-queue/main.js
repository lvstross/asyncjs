// Simple example

function square(n) {
    return n * n;
}
setTimeout(() => {
    console.log("Callback was placed", "on the queue.");
}, 0);
console.log(square(2));


// Single Threaded Example

setTimeout(() => {
    console.log("Hello from the timeout");
}, 0);

for (var i = 0; i < 1000000000; i++) {
    var x = i * 2;
}
console.log("Done with loop");