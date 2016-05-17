$(document).ready(function()
{
	$('#message').focus();

$( "#post-btn" ).click(function() {
  console.log($( "#message" ).val());
  $("#wall").text($( "#message" ).val());
});

	// YOUR CODE GOES HERE
});
