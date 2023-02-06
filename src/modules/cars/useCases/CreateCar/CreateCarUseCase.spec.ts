import { AppError } from '../../../../shared/errors/AppError';
import { CarsRepositoryInMemory } from '../../repositories/in-memory/CarsRepositoryInMemory';
import { CreateCarUseCase } from './CreateCarUseCase';

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('Create Car', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it('should be able to create new car', async () => {
    const car = await createCarUseCase.execute({
      name: 'new car',
      description: 'description Car',
      daily_rate: 100,
      license_plate: 'ABC-1234',
      fine_amount: 60,
      brand: 'brand',
      category_id: 'SUVs',
    });

    expect(car).toHaveProperty('id');
  });

  it('should not be able to create a car with exists license plate ', () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: 'Car 1',
        description: 'description Car',
        daily_rate: 100,
        license_plate: 'ABC-1234',
        fine_amount: 60,
        brand: 'brand',
        category_id: 'SUVs',
      });

      await createCarUseCase.execute({
        name: 'Car 2',
        description: 'description Car',
        daily_rate: 100,
        license_plate: 'ABC-1234',
        fine_amount: 60,
        brand: 'brand',
        category_id: 'SUVs',
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create a car with available to true by defauld', async () => {
    const car = await createCarUseCase.execute({
      name: 'Car Availabe',
      description: 'description Car',
      daily_rate: 100,
      license_plate: 'ABC-1234',
      fine_amount: 60,
      brand: 'brand',
      category_id: 'SUVs',
    });

    expect(car.available).toBe(true);
  });
});
