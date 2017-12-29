import { AuthService } from '../services';

class AuthController {
  static async authenticate(req, res) {
    const { username, password } = req.body;

    try {
      const user = await AuthService.authenticate(username, password);

      if (user) {
        return req.status(200).json(user);
      } else {
        return req.sendStatus(401);
      }
    } catch (error) {
      return req.sendStatus(500);
    }
  }
}

export default AuthController;
