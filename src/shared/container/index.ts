import { ICarsRepository } from 'src/modules/cars/repositories/ICarsRepository';
import { container } from 'tsyringe';

import { ICategoriesRepository } from '../../modules/cars/repositories/ICategoryRepository';
import { CategoriesRepository } from '../../modules/cars/infra/typeorm/repositories/CategoriesRepository';

import { ISpecificationRepository } from '../../modules/cars/repositories/ISpecificationRepository';
import { SpecificationRepository } from '../../modules/cars/infra/typeorm/repositories/SpecificationRepository';

import { IUserRepository } from '../../modules/accounts/repositories/IUserRepository';
import { UsersRepository } from '../../modules/accounts/infra/typeorm/repositories/UsersRepository';

import { CarsRepository } from '../../modules/cars/infra/typeorm/repositories/CarsRepository';

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<ISpecificationRepository>(
  'SpecificationRepository',
  SpecificationRepository,
);

container.registerSingleton<IUserRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<ICarsRepository>('CarsRepository', CarsRepository);
