

// 宣告在變數內，click後才會取得值。
$('#btn').on('click',function(){
    var tit = $('#title').val();
    var content = $('#content').val();

    $("#list").append(`
        <div class="article">
            <h2>${tit}</h2>
            <p>${content}</p>
        </div>
    `);

    $('#title').val("");
    $('#content').val("");

    // console.log("標題:",tit)  
    // console.log("內容:",content)  
    // console.log("文章:",list)  
})