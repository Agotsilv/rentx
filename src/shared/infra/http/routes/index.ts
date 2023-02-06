import { Router } from 'express';
import { authenticateRoutes } from './Authenticate.routes';
import { carsRoutes } from './car.routes';
import { categoriesRoutes } from './categories.routes';
import { specificationsRoutes } from './specifications.router';
import { usersRoutes } from './user.routes';

const router = Router();

router.use('/categories', categoriesRoutes);
router.use('/specification', specificationsRoutes);
router.use('/users', usersRoutes);
router.use('/cars', carsRoutes);

router.use(authenticateRoutes);

export { router };
