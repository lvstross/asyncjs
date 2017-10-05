var btn = document.querySelector("#btn");
var photo = document.querySelector("#photo");

btn.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText); // Response will come back as a string which needs to be parsed before using as a JSON object
            var url = JSON.parse(xhr.responseText).message;
            console.log(url);
            photo.src = url;
        }
    }

    xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
    xhr.send();
});