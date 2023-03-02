// Import the necessary modules and the function to be tested
const login = require('./login');

// Define the test suite
describe('Login functionality', () => {
  // Define the test case
  it('should display an error message if the email and/or password is incorrect', () => {
    // Set up the necessary DOM elements
    document.body.innerHTML = `
      <form>
        <input type="email" id="email" value="incorrect-email" />
        <input type="password" id="password" value="incorrect-password" />
        <button type="button" id="sign-in-button">Sign In</button>
        <div id="error-feedback-message"></div>
      </form>
    `;

    // Call the click handler function
    $("#sign-in-button").click();

    // Assert that the error message is displayed
    expect($("#error-feedback-message")).toHaveTextContent("Email and/or password is incorrect, please try again.");
  });
});
