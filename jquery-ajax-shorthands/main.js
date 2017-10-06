$('#getBtn').click(()=>{
    var url = "https://api.github.com/users/lvstross";
    $.get(url)
    .done((res)=>{
        console.log(res);
    })
    .fail((error)=>{
        console.log(error);
    });
});

$('#postBtn').click(()=>{
    var url = "https://api.github.com/users/lvstross";
    $.post(url, {
        name: 'Levi Gonzales',
        age: 26
    })
    .done((res)=>{
        console.log(res);
    })
    .fail((error)=>{
        console.log(error);
    });
});

$('#getJSONBtn').click(()=>{
    var url = "https://api.github.com/users/lvstross";
    $.getJSON(url)
    .done((res)=>{
        console.log(res);
    });
});