import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUserRepository } from '../../repositories/IUserRepository';
import { inject, injectable } from 'tsyringe';
import { hash } from 'bcryptjs';
import { AppError } from '../../../../shared/errors/AppError';
@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUserRepository,
  ) {}

  async execute({
    name,
    email,
    password,
    driver_license,
  }: ICreateUserDTO): Promise<void> {
    const passwordHash = await hash(password, 8);
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError(`Email ${email} already exists`, 400);
    }

    await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
      driver_license,
    });
  }
}

export { CreateUserUseCase };
