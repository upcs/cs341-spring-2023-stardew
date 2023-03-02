// Import the necessary modules and the function to be tested
const change = require('./change');

// Define the test suite
describe('Change password functionality', () => {
  // Define the test case
  it('should replace the change password page with a confirmation message when the "done" button is clicked', () => {
    // Set up the necessary elements
    document.body.innerHTML = `
      <div id="change-pass-header">Change Password</div>
      <div id="changepass-section">
        <form>
          <input type="password" id="new-pass" value="new-password" />
          <button type="button" id="done-button">Done</button>
        </form>
      </div>
    `;

    // Call the replace function
    login.replace();

    // Assert that the confirmation message is displayed and the change password section is hidden
    expect($("#change-pass-header")).toHaveTextContent("Your Password has been changed");
    expect($("#changepass-section")).toHaveStyle("display: none");
  });
});
