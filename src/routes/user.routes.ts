import { Router } from 'express';
import multer from 'multer';

import UploadConfig from '../config/upload';
import { UpdateUserAvatarController } from '../modules/accounts/UseCases/updateUserAvatar/UpdateUserAvatarController';
import { CreateUserController } from '../modules/accounts/UseCases/CreateUser/CreateUserController';
import { ensureAuthenticated } from '../middlerwares/ensureAuthenticated';

const usersRoutes = Router();

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

const uploadAvatar = multer(UploadConfig.upload('./tmp/avatar'));

usersRoutes.post('/', createUserController.handle);

usersRoutes.patch(
  '/avatar',
  ensureAuthenticated,
  uploadAvatar.single('avatar'),
  updateUserAvatarController.handle,
);

export { usersRoutes };
