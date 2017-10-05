// XHR Example:

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
        switch (xhr.status) {
            case 200:
                console.log(xhr.responseText);
                break;
            case 500:
                console.log("There was a problem with the server.");
                break;
            case 401:
                console.log("You are not authorized to make this action.");
                break;
            case 404:
                console.log("Could not find what you were asking for.");
                break;
            default:
                console.log("Something went wrong. Not idea why.");
        }
    }
};
xhr.open("GET", "https://api.github.com/zen");
xhr.send();


