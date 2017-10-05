var price = document.querySelector("#price");
var btn = document.querySelector("button");
var currency = document.querySelector("#currency");
var sign = document.querySelector("#sign");


btn.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            sign.innerHTML = JSON.parse(xhr.responseText).bpi.USD.symbol;
            price.innerHTML = JSON.parse(xhr.responseText).bpi.USD.rate;
            currency.innerHTML = "| " + JSON.parse(xhr.responseText).bpi.USD.code;
        }
    }
    xhr.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
    xhr.send(); 
});
