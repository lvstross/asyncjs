// Nested Async Callbacks (AKA. Callback Hell)

var counter = 0;
setTimeout(() => {
    counter++;
    console.log('Counter:', counter);
    setTimeout(() => {
        counter++;
        console.log('Counter:', counter);
        setTimeout(() => {
            counter++;
            console.log('Counter:', counter);
        }, 3000);
    }, 2000);
}, 1000);

// Promise Chaining is much better

var counter = 0;
function incCounter() {
    counter++;
    console.log('Counter:', counter);
}

function runLater(callback, timeInMs) {
    var p = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            var res = callback();
            resolve(res);
        }, timeInMs);
    });
    return p;
}

runLater(incCounter, 1000)
.then(()=>{ return runLater(incCounter, 2000); })
.then(()=>{ return runLater(incCounter, 3000); });

// Promise Chaining Example:

var promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        randomInt = Math.floor(Math.random() * 10);
        resolve(randomInt);
    }, 500);
});

promise.then((data)=>{
    console.log('Random int passed to resolve:', data);
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(Math.floor(Math.random() * 10));
        }, 3000);
    });
}).then((data)=>{
    console.log('Second random int passed to resolve:', data);
});

// Returning Data:

var promise = new Promise((resolve, reject)=>{
    resolve(5);
});

promise.then((data)=>{
    return data * 2;
}).then((data)=>{
    return data + 20;
}).then((data)=>{
    console.log(data);
});