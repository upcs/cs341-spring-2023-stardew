const { login } = require('../controllers/auth');

describe('login', () => {
  let req, res;

  beforeEach(() => {
    req = {
      body: {
        email: 'test@test.com',
        password: 'testpassword',
      },
    };
    res = {
      status: jest.fn().mockReturnThis(),
      render: jest.fn(),
      redirect: jest.fn(),
    };
  });

  it('should return 400 if email or password is missing', async () => {
    req.body.email = '';
    req.body.password = '';

    await login(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.render).toHaveBeenCalledWith('login', {
      message: 'Need email and pass inputed',
    });
  });
});