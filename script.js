// This code runs when the page loads
document.addEventListener('DOMContentLoaded', function () {
    // Find the form using its ID
    const form = document.getElementById('apparel-form');

    // When the form is submitted, run this function
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Stop the form from submitting normally

        // Get the values that the user entered in the form
        const apparelType = document.getElementById('type').value;
        const condition = document.getElementById('condition').value;
        const action = document.getElementById('action').value;

        // Check if all the fields have values
        if (apparelType && condition && action) {
            // If all fields are filled, log the values to the console
            console.log(`Apparel Type: ${apparelType}`);
            console.log(`Condition: ${condition}`);
            console.log(`Preferred Action: ${action}`);

            // Show a confirmation message to the user
            alert('Your submission was successful!');

            // Clear the form after submission
            form.reset();
        } else {
            // If not all fields are filled, show an error message
            alert('Please fill out all fields.');
        }
    });
});
