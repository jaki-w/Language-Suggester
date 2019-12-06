$(document).ready(function() {

  $("form#name").submit(function(event) {
    $(".quiz").show();
    $(".introduction").hide();

  event.preventDefault();

  });
});
