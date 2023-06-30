document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('myForm');
  const submitButton = document.getElementById('submitButton');

  // Add event listener to the form for the submit event
  form.addEventListener('submit', function(event) {
    // Prevent the default behavior of form submission
    event.preventDefault();

    // Perform additional actions or validations here

    // Example: Log a message when the submit button is clicked
    console.log('Submit button clicked!');
  });
});






