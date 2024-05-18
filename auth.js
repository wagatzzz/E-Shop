document.addEventListener('DOMContentLoaded', function() {
    // Sign-up form submission event listener
    document.getElementById('signup-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const terms = document.getElementById('terms').checked;

        // Retrieve existing user data from sessionStorage
        const savedUsers = JSON.parse(sessionStorage.getItem('savedUsers')) || [];

        // Check if the email already exists
        const existingUser = savedUsers.find(user => user.email === email);
        if (existingUser) {
            alert('Email already exists. Please use a different email.');
            return; // Exit function to prevent further execution
        }

        // Create user object
        const newUser = {
            name: name,
            email: email,
            password: password
        };

        // Add the new user to the existing users array
        savedUsers.push(newUser);
        sessionStorage.setItem('savedUsers', JSON.stringify(savedUsers));

        console.log('New user registered:', newUser);

        // Redirect to login page
        window.location.href = 'login.html';
    });
});




// Login form submission event listener
document.addEventListener('DOMContentLoaded', function() {
  
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Retrieve login credentials entered by the user
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Retrieve user data from sessionStorage
        const savedUsers = JSON.parse(sessionStorage.getItem('savedUsers')) || [];

        // Check each user for a match
        const authenticatedUser = savedUsers.find(user => user.email === email && user.password === password);

        if (authenticatedUser) {
            // Authentication successful, proceed with login
            window.location.href = 'cart.html';
            // Redirect or perform other actions as needed
        } else {
            // Authentication failed, display error message
            alert('Invalid email or password. Please try again.');
        }
    });
});


