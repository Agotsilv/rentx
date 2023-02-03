import { AppError } from '../../../../shared/errors/AppError';
import { CategoryRepositoryInMemory } from '../../repositories/in-memory/CategoriesRepositoryInMemory';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

let createCategory: CreateCategoryUseCase;
let categoryRepositoryInMemori: CategoryRepositoryInMemory;

describe('Create Category', () => {
  beforeEach(() => {
    categoryRepositoryInMemori = new CategoryRepositoryInMemory();
    createCategory = new CreateCategoryUseCase(categoryRepositoryInMemori);
  });

  it('should be able to create a new category', async () => {
    const category = {
      name: 'newCategory',
      description: 'newCategory',
    };
    await createCategory.excute({
      name: category.name,
      description: category.description,
    });

    const categoryCreated = await categoryRepositoryInMemori.findByName(
      category.name,
    );

    expect(categoryCreated).toHaveProperty('id');
  });

  it('should not be able to create a new category with name exists', async () => {
    expect(async () => {
      const category = {
        name: 'newCategory',
        description: 'newCategory',
      };
      await createCategory.excute({
        name: category.name,
        description: category.description,
      });

      await createCategory.excute({
        name: category.name,
        description: category.description,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
