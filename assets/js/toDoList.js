
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed")
});

$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  })
  event.stopPropagation();
})

$("input").keypress(function(event){
  if(event.which === 13){
    var adding = $(this).val();
    $(this).val("");

    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + adding + "</li>")
  }
})

$(".fa-plus").on("click", function(){
  $("input").fadeToggle(500)
})
