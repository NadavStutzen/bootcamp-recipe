class Renderer {
  constructor() {}

  render(data) {
    const source = $("#recipe-template").html();
    const template = Handlebars.compile(source);
    const newHTML = template({ data });
    $("#ingredient-val").val("");
    $("#container")
      .empty()
      .append(newHTML);
  }
}
