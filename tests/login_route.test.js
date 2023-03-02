// Import the necessary modules
const router = require('./login_router');

// Define the test suite
describe('Login route', () => {
  // Define the test case
  it('should return a 200 status code and the login page', async () => {
    // Send a GET request to the login page
    const response = await request(app).get('/login_router');

    // Assert that the status code is 200
    expect(response.statusCode).toBe(200);

    // Assert that the response contains the expected text
    expect(response.text).toContain('Current login page');
  });
});
