$(document).ready(function() {
  $("form#favorite").submit(function(event) {
    event.preventDefault();
    var favorites = ["name", "color", "drink", "animal", "food", "book"];

    favorites.forEach(function(favorite) {
      var userInput = $("input#" + favorite).val();
      $("." + favorite).text(userInput).val();
      alert("What's my favorite" + " " + favorite + "?");

    });

    $("#input").show();





  });
});
