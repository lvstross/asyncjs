$('#btn').click(()=>{
    $.ajax({
        method: "GET",
        url: "https://baconipsum.com/api/?type=meat-and-filler",
        dataType: 'json',
    })
    .done(function(res){
        $('p').text(res[0]);
    })
    .fail(function(error){
        console.log(error);
    })
});