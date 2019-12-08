$(document).ready(function() {
  $("#quizSubmit").submit(function(event) {
    event.preventDefault();

    var petAnswer = $("input:radio[name=pet]:checked").val();
    var beverageAnswer = $("input: radio[name=beverage]:checked").val();
    var workAnswer = $("input: radio[name=work]:checked").val();
    var problemSolvingAnswer = $("input: radio[name=problemSolving]:checked").val();
    var handednessAnswer = $("input: radio[name=handedness]:checked").val();


    if (petAnswer === "dogs" && beverageAnswer === "water" || petAnswer === "dogs" && beverageAnswer === "icedTea" || petAnswer === "dogs" && beverageAnswer === "soda") {
      $("#ruby").show();
    } else if (petAnswer === "cats" && beverageAnswer === "water" || petAnswer === "cats" && beverageAnswer === "icedTea" || petAnswer === "cats" && beverageAnswer === "soda") {
      $("javascript").show();
    } else (petAnswer === "neither" && beverageAnswer === "water" || petAnswer === "neither" && beverageAnswer === "icedTea" || petAnswer === "neither" && beverageAnswer === "soda") {
      $("python").show();
    }

  });
});
