$(function() {
  $("#form").submit(function(event) {
    var userInput = $("#input").val();
    function reverseUserInput(string) {
      return userInput.split("").reverse().join("");
    }

    if (reverseUserInput(userInput) === userInput) {
    $("#output").text("That's a palindrome!");
  } else {
    $("#output").text("That's not a palindrome!")
  }
    event.preventDefault();
  });
});
