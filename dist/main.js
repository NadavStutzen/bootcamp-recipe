const renderer = new Renderer();

$("#make-search").on("click", function() {
  const ingredient = $("#ingredient-val").val();
  $.get(`/recipes/${ingredient}`, function(response) {
    const recipeArr = response.results;
    console.log(recipeArr);
    renderer.render(recipeArr);
  });
});

$(`#container`).on(`click`, `img`, function() {
  console.log(
    $(this)
      .siblings("ul")
      .find("li")
      .first()
      .text()
  );
});
