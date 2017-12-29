import { Strategy as LocalStrategy } from 'passport-local';

import { AuthService, UserService } from '../../services';

// set the default input fields
const options = {
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: false,
};

/**
 * authentication strategy for email/password login requests.
 */
const LoginStrategy = new LocalStrategy(options, async (username, password, done) => {
  // check if a user with this username exists
  const user = await UserService.findByUsername(username);
  if (!user) {
    return done(null, false, { message: 'Username was not found' });
  }

  // check if the password is valid
  const authUser = await AuthService.authenticate(user, password);
  if (!authUser) {
    return done(null, false, { message: 'Username and password do not match' });
  }

  // success
  return done(null, authUser);
});

export default LoginStrategy;
