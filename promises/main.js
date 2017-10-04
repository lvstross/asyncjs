// Example One:

var p1 = new Promise((resolve, reject) => {
    // resolve([1,2,3,4]);
    reject("Error");
});
p1.then((data) => {
    console.log("Promise p1 resolved with data:", data);
}).catch((data) => {
    console.log("Promise p1 was rejected with data:", data);
});

// Example Two:

var p2 = new Promise((resolve, reject) => {
    var num = Math.random();
    if (num < 0.5) {
        resolve(num);
    } else {
        reject(num);
    }
});
p2.then((result) => {
    console.log('Success:', result);
}).catch((error) => {
    console.log('Error:', error);
});

// Example Three:

var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        var randomInt = Math.floor(Math.random() * 10);
        resolve(randomInt);
    }, 4000);
});

promise.then((data) => {
    console.log('Random int passed to resolve:' , data);
});