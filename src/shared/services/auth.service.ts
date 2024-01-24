/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { UserModel } from '@data/config/models/user.models';
import { RegisterUserDto, UserEntity } from '@domain/index';
import { CustomError } from '../utils/error-handler';
import { bcryptAdapter } from '../utils';
import { JwtAdapter } from '@middleware/jwt.adapter';
import { LoginUserDto } from '@domain/index';

export class AuthService {
  constructor() {}
  public async createAuthUser(registerDto: RegisterUserDto) {
    // Buscar si ya existe un usuario con el mismo email
    const userExist = await UserModel.findOne({ email: registerDto.email });

    if (userExist) {
      return { ok: false, error: 'User already exists' };
    }

    try {
      const newUser = new UserModel(registerDto);
      newUser.password = bcryptAdapter.hash(registerDto.password);

      await newUser.save();

      const { password, ...resto } = UserEntity.fromObject(newUser);

      const token = await JwtAdapter.generateToken({ id: newUser.id });
      if (!token) {
        throw CustomError.internalServer('Error while creating JWT');
      }
      return { ...resto, token };
    } catch (error) {
      throw CustomError.internalServer(`${error}`);
    }
  }
  public async getUserByUsernameOrEmail(loginUserDto: LoginUserDto) {
    const user = await UserModel.findOne({ email: loginUserDto.email });
    if (!user) {
      throw CustomError.badRequest('Email not exist');
    }
    const isMatching = bcryptAdapter.compare(loginUserDto.password, user.password);
    if (!isMatching) {
      throw CustomError.badRequest('Password is not valid');
    }

    const { password, ...userEntity } = UserEntity.fromObject(user);

    const token = await JwtAdapter.generateToken({ id: user.id });
    if (!token) {
      throw CustomError.internalServer('Error while creating JWT');
    }

    return {
      user: userEntity,
      token: token
    };
  }

  public async getAuthUserByUsername(): Promise<any> {
    const datat = ['user'];

    console.log('login', datat);

    // const user: IAuthDocument = (await AuthModel.findOne({ username: Helpers.firstLetterUppercase(username) }).exec()) as IAuthDocument;
    // return user;
  }

  public async getAuthUserByEmail(): Promise<any> {
    console.log('getAuthUserByEmail');
  }
  public async getUserById(id: string): Promise<any> {
    try {
      const user = await UserModel.findById(id);
      if (!user) {
        throw CustomError.badRequest('User not found');
      }

      const { password, ...userEntity } = UserEntity.fromObject(user);

      return userEntity;
    } catch (error) {
      throw CustomError.internalServer(`${error}`);
    }
  }
}
