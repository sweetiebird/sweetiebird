import { SuccessResponse } from '../utils';
import path from 'path';

const config = require(path.resolve(__dirname, '../../sweetiebird'));

class UserController {
  static async publicGetUser(req, res) {
    const { userId } = req.params;
    return res.json(config);
  }
}

export default UserController;
