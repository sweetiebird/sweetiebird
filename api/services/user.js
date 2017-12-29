import { User } from '../models';

class UserService {
  static async findByUsername(username) {
    return new User(1, username);
  }
}

export default UserService;
