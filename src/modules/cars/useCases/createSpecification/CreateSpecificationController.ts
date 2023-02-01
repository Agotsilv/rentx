import { Request, Response } from 'express';
import { CreateSpeficicationUseCase } from './CreateSpecificationUseCase';
import { container } from 'tsyringe';

class CreateSpecificationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const createSpeficicationUseCase = container.resolve(
      CreateSpeficicationUseCase,
    );

    await createSpeficicationUseCase.execute({ name, description });

    return response
      .status(201)
      .json({ message: 'Specification created successfully' });
  }
}

export { CreateSpecificationController };
