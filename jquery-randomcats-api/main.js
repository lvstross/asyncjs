var url = "https://random.cat/meow";

$('#btn-cat').click(()=>{
    $.getJSON(url)
    .done((res)=>{
        $('#cat-img').attr('src', res.file);
    }).fail((err)=>{
        console.log(err);
    });
});