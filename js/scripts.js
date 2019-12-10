$(document).ready(function() {
  $("form#favorite").submit(function(event) {
    event.preventDefault();
    var favorites = ["color", "drink", "animal", "food", "book"];

    favorites.forEach(function(favorite) {
      var userInput = $("input#" + favorite).val();
      console.log(userInput);
      $("#" + favorite).text(userInput).val();

    });

    $("#favorite").show();





  });
});
