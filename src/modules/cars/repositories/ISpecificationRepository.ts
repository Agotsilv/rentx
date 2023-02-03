import { Specification } from '../infra/typeorm/entities/Specification';

interface ICreateSpeficicationDTO {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  create({ name, description }: ICreateSpeficicationDTO): Promise<void>;
  findByName(name: string): Promise<Specification>;
}

export { ISpecificationRepository, ICreateSpeficicationDTO };
