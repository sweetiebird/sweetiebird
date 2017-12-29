import passport from 'passport';

import LoginStrategy from './localStrategy';

const LoginAuthentication = () => passport.authenticate('login', { session: false });

passport.use('login', LoginStrategy);

export default LoginAuthentication;
