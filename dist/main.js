$('#make-search').on('click',function(){
    const ingredient = $('#ingredient-val').val()
    $.get(`/recipes/${ingredient}`,function(response){
        console.log(response);
        
    })
})