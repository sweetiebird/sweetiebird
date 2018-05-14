import { Router } from 'express';

import productRouter from './product';

const router = Router();

router.use('/products', productRouter);

router.get('/ping', (req, res) => {
  res.status(200).send('pong');
});

export default router;
