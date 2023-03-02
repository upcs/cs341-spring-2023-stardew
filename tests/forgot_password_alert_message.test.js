// Import the necessary modules and the function to be tested
const forgot = require('./forgot');

// Define the test suite
describe('Forgot password functionality', () => {

  it('should show an alert message when an invalid email is submitted', () => {
    // Set up the necessary elements
    document.body.innerHTML = `
    <div id="email-button-section">
            <form>
                <input type="text" id="email" name="Email" placeholder="Email">
            </form>

            <button id="submit-button" onclick="replace()">Submit</button>
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