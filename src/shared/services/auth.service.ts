/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { UserModel } from '@data/config/models/user.models';
import { RegisterUserDto, UserEntity } from '@domain/index';
import { CustomError } from '../utils/error-handler';
import { bcryptAdapter } from '../utils';
import { JwtAdapter } from '@middleware/jwt.adapter';

// import { IAuthDocument } from '@auth/interfaces/auth.interface';

export class AuthService {
  constructor() {}
  public async createAuthUser(registerDto: RegisterUserDto): Promise<any> {
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
  public async getUserByUsernameOrEmail(): Promise<any> {
    const datat = ['email', 'user'];

    console.log('register services', datat);
  }

  public async getAuthUserByUsername(): Promise<any> {
    const datat = ['user'];

    console.log('login', datat);

    // const user: IAuthDocument = (await AuthModel.findOne({ username: Helpers.firstLetterUppercase(username) }).exec()) as IAuthDocument;
    // return user;
  }

  public async getAuthUserByEmail(): Promise<any> {
    console.log('getAuthUserByEmail');

    // const user: IAuthDocument = (await AuthModel.findOne({ email: Helpers.lowerCase(email) }).exec()) as IAuthDocument;
    // return user;
  }
  public async getUserById(): Promise<any> {
    console.log('profile user');
  }
}
