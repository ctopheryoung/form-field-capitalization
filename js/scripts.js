$(document).ready(function() {
  $("form").submit(function(event) {
    var response = $("input#response").val();
    $(".response").text(response);

    event.preventDefault();

  });
});
