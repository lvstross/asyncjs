// function callback(){
//     console.log('coming from callback');
// }

// function higherOrder(fn){
//     console.log('About to call callback');
//     fn();
//     console.log('Callback has been invoked');
// }

// higherOrder(callback);

function greet(name, formatter) {
    return "Hello, " + formatter(name);
}

greet("Tim", function(name){
    return name.toUpperCase();
});

greet("Tim", function(name){
    return name + "!!!!";
})