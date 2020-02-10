const renderer = new Renderer()



$('#make-search').on('click',function(){
    const ingredient = $('#ingredient-val').val()
    $.get(`/recipes/${ingredient}`,function(response){
        const recipeArr = response.results
        console.log(recipeArr);
        renderer.render(recipeArr)        
        
    })
})



// //The title of the recipe, which is also a link to the recipe video
// The image of the recipe
// A list of the ingredients


