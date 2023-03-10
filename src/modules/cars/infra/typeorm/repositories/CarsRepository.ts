import { Repository, getRepository } from 'typeorm';
import { ICreateCarDTO } from '../../../..//cars/dtos/ICreateCarDTO';
import { ICarsRepository } from '../../../../cars/repositories/ICarsRepository';
import { Car } from '../entities/Car';

class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>;

  constructor() {
    this.repository = getRepository(Car);
  }

  async create({
    name,
    brand,
    category_id,
    daily_rate,
    description,
    fine_amount,
    license_plate,
  }: ICreateCarDTO): Promise<Car> {
    const car = this.repository.create({
      name,
      brand,
      category_id,
      daily_rate,
      description,
      fine_amount,
      license_plate,
    });

    await this.repository.save(car);

    return car;
  }

  async findByLicensePlate(license_plate: string): Promise<Car> {
    const cars = await this.repository.findOne({
      license_plate,
    });

    return cars;
  }

  async findAvailable(
    brand?: string,
    category_id?: string,
    name?: string,
  ): Promise<Car[]> {
    const carsQuery = this.repository
      .createQueryBuilder('c')
      .where('available = :available', {
        available: true,
      });

    if (brand) {
      carsQuery.andWhere('c.brand = :brand', {
        brand,
      });
    }

    if (name) {
      carsQuery.andWhere('c.name = :name', {
        name,
      });
    }

    if (category_id) {
      carsQuery.andWhere('c.category_id = :category_id', {
        category_id,
      });
    }

    const cars = await carsQuery.getMany();

    return cars;
  }
}

export { CarsRepository };
