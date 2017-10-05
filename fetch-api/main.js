// var url = "https:api.coindesk.com/v1/bpi/currentprice.json";
var url = "https://api.github.com/users/lvstrossqwfq";
/*
* Fetch API is the newest iteration of the XHR object for setting requests in the browser.
* The syntax below shows how much cleaner fetch is in compaison to XHR. The fetch object returns
* a promise by which you tack on .then and .catch to intereact with the data.
*/
fetch(url, {
    method: "GET",
})
.then(handleErrors)
.then((response)=>{
    console.log(response);
    return response.json()
})
.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
    console.log("Something went wrong.");
});

function handleErrors(res){
    if(!res.ok){
        throw Error(res.status); 
    }
    return res;
}