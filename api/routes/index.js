import { Router } from 'express';

import authRouter from './auth';

const router = Router();

router.use('/auth', authRouter);

router.get('/ping', (req, res) => {
  res.status(200).send('pong');
});

export default router;
