// Nav bar moblie version - reponsive

// Collect data for the food survey suggestion
document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("survey-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Collect form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Do something with the collected data
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);

    // Reset the form (optional)
    form.reset();
  });
});
