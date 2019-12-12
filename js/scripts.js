$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var pet = $("input:radio[name=pet]:checked").val();
    var beverage = $("input: radio[name=beverage]:checked").val();
    var work = $("input: radio[name=work]:checked").val();
    var problemSolving = $("input: radio[name=problemSolving]:checked").val();
    var handedness = $("input: radio[name=handedness]:checked").val();

    if (pet === "dogs" && beverage === "water" || pet === "dogs" && beverage === "icedTea" || pet === "dogs" && beverage === "soda") {
      $('#ruby').show();
    } else if (pet === "cats" && beverage === "water" || pet === "cats" && beverage === "icedTea" || pet === "cats" && beverage === "soda") {
      $("#javascript").show();
    } else {
      $("#python").show();
    }

  });
});
