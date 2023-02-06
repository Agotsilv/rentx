import { Router } from 'express';
import { ensureAuthenticated } from '../middlerwares/ensureAuthenticated';
import { CreateSpecificationController } from '../../../../modules/cars/useCases/createSpecification/CreateSpecificationController';
import { ensureAdmin } from '../middlerwares/ensureAdmin';

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.use(ensureAuthenticated, ensureAdmin);
specificationsRoutes.post('/', createSpecificationController.handle);

export { specificationsRoutes };
