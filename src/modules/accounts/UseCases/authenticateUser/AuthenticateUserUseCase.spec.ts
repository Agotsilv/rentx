import { AppError } from '../../../../shared/errors/AppError';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { UserRepositoryInMemory } from '../../repositories/in-memory/UserRepositoryInMemory';
import { CreateUserUseCase } from '../CreateUser/CreateUserUseCase';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

let authenticateUserUseCase: AuthenticateUserUseCase;
let userRepositoryInMemory: UserRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe('Authenticate User', () => {
  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    authenticateUserUseCase = new AuthenticateUserUseCase(
      userRepositoryInMemory,
    );
    createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
  });

  it('should be able to authenticate an user', async () => {
    const user: ICreateUserDTO = {
      driver_license: '0321',
      email: 'user@example.com',
      password: '1234',
      name: 'User1',
    };

    await createUserUseCase.execute(user);

    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(result).toHaveProperty('token');
  });

  /*
    Esse é um teste unitário que verifica se o usuário não consegue se autenticar quando informa um email inválido.
    Ele usa a função "expect" do Jest (um framework de testes para JavaScript) para esperar que a chamada ao "authenticateUserUseCase.execute"
    rejeite com uma exceção "AppError". Assim, ele está garantindo que o sistema retorna um erro apropriado quando o usuário informa um email
    que não existe no sistema.
  */

  it('should not be able to authenticate an nonexistent user', async () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: 'false@example.com',
        password: '123',
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate with incorrect password', async () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        driver_license: '0321',
        email: 'user@example.com',
        password: '1234',
        name: 'User1',
      };

      await createUserUseCase.execute(user);

      await authenticateUserUseCase.execute({
        email: user.email,
        password: 'Incorrect password',
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate with incorrect email', async () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        driver_license: '0321',
        email: 'user@example.com',
        password: '1234',
        name: 'User1',
      };

      await createUserUseCase.execute(user);

      await authenticateUserUseCase.execute({
        email: 'IncorrectEmail@gmail.com',
        password: user.password,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
