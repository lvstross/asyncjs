var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
var quote = document.querySelector('#quote');

// ========== XHR Method ===========
var xhrBtn = document.querySelector('#xhr');

xhrBtn.addEventListener('click', function(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            quote.innerText = JSON.parse(xhr.responseText)[0];
        }      
    }
    xhr.open('GET', url);
    xhr.send();
});

// ========== Fetch API Method ==========

var fetchBtn = document.querySelector('#fetch');

fetchBtn.addEventListener('click', ()=>{
    fetch(url, {method: 'GET',})
    .then((res)=>{
        if(!res.ok){ throw Error(res.status); }
        return res;
    })
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        quote.innerText = data[0];
    })
    .catch((err)=>{
        console.log(err);
    });
});


// ========== Jquery Method ==========

$('#jquery').click(()=>{
    $.getJSON(url)
    .done((res)=>{
        $('#quote').text(res[0]);
    })
    .fail((err)=>{
        console.log(err);
    });
});

// ========== Axios Method ==========

var axiosBtn = document.querySelector("#axios");

axiosBtn.addEventListener('click', ()=>{
    axios.get(url)
    .then((res)=>{
        quote.innerText = res.data[0];
    })
    .catch((err)=>{
        console.log(err);
    });
});