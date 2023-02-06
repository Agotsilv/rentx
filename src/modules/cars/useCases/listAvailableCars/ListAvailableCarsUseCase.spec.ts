import { CarsRepositoryInMemory } from '../../repositories/in-memory/CarsRepositoryInMemory';
import { ListAvailableCarsUseCase } from './ListAvailableCarsUseCase';

let listCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('List cars', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsUseCase = new ListAvailableCarsUseCase(carsRepositoryInMemory);
  });

  it('should  be able to list all available cars', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Carro Spec Test',
      description: 'Carro Spec Test',
      daily_rate: 450,
      license_plate: 'Carro Spec Test',
      fine_amount: 250,
      brand: 'Car_brand',
      category_id: 'Category_id',
    });

    const cars = await listCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by brand ', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Carro2',
      description: 'Carro Spec Test',
      daily_rate: 450,
      license_plate: 'Carro Spec Test',
      fine_amount: 250,
      brand: 'Car_brand2',
      category_id: 'Category_id',
    });

    const cars = await listCarsUseCase.execute({
      brand: 'Car_brand2',
    });

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by name', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Carro2',
      description: 'Carro Spec Test',
      daily_rate: 450,
      license_plate: 'Carro Spec Test',
      fine_amount: 250,
      brand: 'Car_brand2',
      category_id: 'Category_id',
    });

    const cars = await listCarsUseCase.execute({
      name: 'Carro2',
    });

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by Category ID', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Carro2',
      description: 'Carro Spec Test',
      daily_rate: 450,
      license_plate: 'Carro Spec Test',
      fine_amount: 250,
      brand: 'Car_brand2',
      category_id: 'Category_id',
    });

    const cars = await listCarsUseCase.execute({
      category_id: 'Category_id',
    });

    expect(cars).toEqual([car]);
  });
});
