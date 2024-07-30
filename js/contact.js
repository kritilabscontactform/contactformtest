document.addEventListener("DOMContentLoaded", function() {
    // Initialize EmailJS with your user ID
    emailjs.init("Cje5rboy3Y1i5OrF0");

    // Add event listener for the form submission
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Define template parameters
        const templateParams = {
            to_name: 'Recipient Name',  // Adjust as needed
            from_name: document.getElementById('name').value,
            from_email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // Send the email using EmailJS
        emailjs.send('service_9l6xgx5', 'template_q83kv36', templateParams)
            .then(function() {
                // Show success message and hide error message
                const successElement = document.getElementById('contact-form-success');
                if (successElement) {
                    successElement.classList.remove('d-none');
                }
                const errorElement = document.getElementById('contact-form-error');
                if (errorElement) {
                    errorElement.classList.add('d-none');
                }
                document.getElementById('contact-form').reset(); // Reset the form
            }, function(error) {
                // Show error message and display the error text
                const errorElement = document.getElementById('contact-form-error');
                if (errorElement) {
                    errorElement.classList.remove('d-none');
                    document.getElementById('mail-error-message').textContent = error.text;
                }
            });
    });
});
