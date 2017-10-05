// Html elements
var avatar = document.querySelector('#avatar');
var fname = document.querySelector('#fullname');
var uname = document.querySelector('#username');
var email = document.querySelector('#email');
var city = document.querySelector('#city');
// Button
var btn = document.querySelector('#btn');
// Api End Point
var url = "https://randomuser.me/api/";

// Fetch action
btn.addEventListener('click', function(){
    fetch(url)
    .then(handleErrors)
    .then(parseJSON)
    .then(updateProfile)
    .catch(printError);
});


// Common functions
function handleErrors(res){
    if(!res.ok){
        throw Error(res.status);
    }
    return res;
}
function parseJSON(res){
    return res.json();
}
function updateProfile(data){
    avatar.src = data.results[0].picture.medium;
    fname.innerText = data.results[0].name.first + " " + data.results[0].name.last;
    uname.innerText = data.results[0].login.username;
    email.innerText = data.results[0].email;
    city.innerText = data.results[0].location.city;
}
function printError(error){
    console.log(error);
}

