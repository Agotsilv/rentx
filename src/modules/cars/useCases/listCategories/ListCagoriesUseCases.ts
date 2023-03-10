import { inject, injectable } from 'tsyringe';
import { Category } from '../../infra/typeorm/entities/Category';
import { ICategoriesRepository } from '../../repositories/ICategoryRepository';

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async excute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.list();

    return categories;
  }
}

export { ListCategoriesUseCase };
