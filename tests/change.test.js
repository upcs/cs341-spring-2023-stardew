const replace = require('../public/change');

describe('replace', () => {
  test('updates header text and hides section on button click', () => {
    // Create the HTML elements needed for the test
    document.body.innerHTML = `
      <div>
        <button id="done-button">Done</button>
        <h1 id="change-pass-header">Change Password</h1>
        <section id="changepass-section">...</section>
      </div>
    `;
    
    // Call the replace function
    replace();
    
    // Simulate a button click
    const button = document.getElementById('done-button');
    button.click();
    
    // Check that the header text has been updated
    const header = document.getElementById('change-pass-header');
    expect(header.textContent).toBe('Your Password has been changed');
    
    // Check that the section is hidden
    const section = document.getElementById('changepass-section');
    expect(section.style.display).toBe('none');
  });
});