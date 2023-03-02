// Import the necessary modules and the function to be tested
const forgot = require('./forgot');

// Define the test suite
describe('Forgot password functionality', () => {
  // Define the test case
  it('should replace the Forgot password page with a confirmation message when a valid email is submitted', () => {
    // Set up the necessary DOM elements
    document.body.innerHTML = `
      <div id="forgot-pass-header">Forgot Password</div>
      <div id="forgotpass-section">
        <form>
          <label for="email">Email:</label>
          <input type="email" id="email" value="backusagrilabs@gmail.com" />
          <button type="submit" id="submit-button">Submit</button>
        </form>
      </div>
    `;

    // Call the replace function
    forgot.replace();

    // Assert that the confirmation message is displayed and the email input and submit button are hidden
    expect($("#forgot-pass-header")).toHaveTextContent("Email Link Sent!");
    expect($("#email-button-section")).toHaveTextContent("There should be an email message with a new link to reset your password.");
    expect($("#email")).toHaveStyle("display: none");
    expect($("#submit-button")).toHaveStyle("display: none");
  });

  it('should show an alert message when an invalid email is submitted', () => {
    // Set up the necessary DOM elements
    document.body.innerHTML = `
      <div id="forgot-pass-header">Forgot Password</div>
      <div id="forgotpass-section">
        <form>
          <label for="email">Email:</label>
          <input type="email" id="email" value="invalid-email" />
          <button type="submit" id="submit-button">Submit</button>
        </form>
      </div>
    `;

    // Mock the alert function to prevent actual alert dialogs from popping up during the test
    const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});

    // Call the replace function
    forgot.replace();

    // Assert that the alert message is displayed and the email input and submit button are not hidden
    expect(mockAlert).toHaveBeenCalledWith("invalid email. Try again");
    expect($("#email")).not.toHaveStyle("display: none");
    expect($("#submit-button")).not.toHaveStyle("display: none");
  });
});
