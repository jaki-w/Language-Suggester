$(document).ready(function() {

  $("form#name").submit(function(event) {
    $(".introduction").hide();
  event.preventDefault();
  });
});
