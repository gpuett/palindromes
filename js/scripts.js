$(function() {
  $("#form").submit(function(event) {
    var userInput = $("#input").val();

    function reverseUserInput(string) {
       return userInput.split("").reverse().join("");
    }

    var reverse = reverseUserInput(userInput);

    console.log(reverseUserInput(userInput));

    if (reverse === userInput) {
      $("#output").text("That's a palindrome!");
    } else {
      $("#output").text("That's not a palindrome!")
    }

    event.preventDefault();
  });
});
