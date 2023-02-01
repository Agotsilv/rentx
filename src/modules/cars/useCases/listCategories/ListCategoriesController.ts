import { Request, Response } from 'express';
import { ListCategoriesUseCase } from './ListCagoriesUseCases';
import { container } from 'tsyringe';

class ListCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCategoriesUseCase = container.resolve(ListCategoriesUseCase);

    const all = await listCategoriesUseCase.excute();
    return response.json(all);
  }
}

export { ListCategoriesController };
