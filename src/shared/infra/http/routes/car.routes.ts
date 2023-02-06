import { Router } from 'express';

import { CreateCarController } from '../../../../modules/cars/useCases/CreateCar/CreateCarController';
import { ensureAuthenticated } from '../middlerwares/ensureAuthenticated';
import { ensureAdmin } from '../middlerwares/ensureAdmin';
import { ListAvailableCarController } from '../../../../modules/cars/useCases/listAvailableCars/ListAvailableCar';

const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCars = new ListAvailableCarController();

carsRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle,
);

carsRoutes.get('/available', listAvailableCars.handle);

export { carsRoutes };
