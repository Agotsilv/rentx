import { AppError } from '../../../../shared/errors/AppError';
import { ISpecificationRepository } from '../../repositories/ISpecificationRepository';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpeficicationUseCase {
  constructor(
    @inject('SpecificationRepository')
    private specificationRepository: ISpecificationRepository,
  ) {}
  async execute({ name, description }: IRequest): Promise<void> {
    const specificationAlreadyExists =
      await this.specificationRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new AppError(`Specification ${name} already exists`, 400);
    }

    await this.specificationRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpeficicationUseCase };
