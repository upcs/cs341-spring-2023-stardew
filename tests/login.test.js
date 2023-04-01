// Import the necessary modules and the function to be tested
const login = require('../controllers/auth');

// Define the test suite
test('Testing for error message appears for incorrect email or password', () => {
    // Set up the necessary DOM elements
    document.body.innerHTML = `
      <form>
        <input type="email" id="email" value="incorrect-email" />
        <input type="password" id="password" value="incorrect-password" />
        <button type="button" id="sign-in-button">Sign In</button>
        <div id="error-feedback-message"></div>
      </form>
    `;

    const $ = require('jquery');
    // Call the click handler function
    $("#sign-in-button").on();

    // Assert that the error message is displayed
    expect($("#error-feedback-message").text()).toBe("Email and/or password is incorrect, please try again.");
});
