import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Rodrigo Monney',
    email: 'rodrigo.monney@gmail.com',
    password_hash: 'senha123',
  });

  return res.json(user);
});

export default routes;
