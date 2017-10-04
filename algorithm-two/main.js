function countDown(num){
    // start setInterval with an id
    var intId = setInterval(() => {
        // log num
        console.log("Timer: ", num);
        // decrement by 1
        num--;
        // check if num is 0
        if (num === 0){
            // if true, clear interval
            clearInterval(intId);
            // set timeout for one more second before ring happens
            setTimeout(() => {
                console.log("Ring Ring Ring!!!");
            }, 1000);
        }
    }, 1000)
}
