$(document).ready(function() {
  $("form").submit(function(event) {
    var response = $("input#response").val();
    response = response.toUpperCase();
    console.log(response);
    $(".response").text(response);

    event.preventDefault();

  });
});
