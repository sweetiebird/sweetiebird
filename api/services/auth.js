class AuthService {
  static async authenticate(username, password) {
    return {
      user: username,
    };
  }
}

export default AuthService;
