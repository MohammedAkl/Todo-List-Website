
// mark todo complete
$("ul").on("click","li",function () {
    $(this).toggleClass("completed");
  });


// delete todo
$("ul").on("click","span",function () {
    $(this).parent().fadeOut(500,function () {
      $(this).remove();  
    })
});

// add todo
$("input[type='text']").on("keypress",function (event) {
    if (event.which === 13) {
        var newTodo = $(this).val();
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + newTodo + "</li>");
        $(this).val("");
    

    }
    
})

// add icon 
$("h1 i").on("click", function(){
    $("input[type='text']").slideToggle(200); 
})