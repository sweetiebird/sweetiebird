import { Router } from 'express';

import { AuthController } from '../controllers';
import { LoginAuthentication } from '../middleware';

const router = Router();

router.post('/',
  LoginAuthentication(),
  AuthController.login,
);

export default router;
