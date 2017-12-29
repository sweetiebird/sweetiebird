import { SuccessResponse } from '../utils';

class AuthController {
  static async login(req, res) {
    return SuccessResponse(res, req.user);
  }
}

export default AuthController;
