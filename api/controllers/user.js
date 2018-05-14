import { SuccessResponse } from '../utils';
const config = require('../../sweetiebird');

class UserController {
  static async publicGetUser(req, res) {
    const { userId } = req.params;
    return res.json(config);
  }
}

export default UserController;
