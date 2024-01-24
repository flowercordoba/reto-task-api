import { UserModel } from '@data/config/models/user.models';
import { CustomError } from '../utils';

export class UserServices {
  constructor() {}

  public async getLoggedInUserProfile(userId: string) {
    try {
      const user = await UserModel.findById(userId);

      if (!user) {
        throw CustomError.notFound('User not found');
      }

      // Filtrar datos sensibles si es necesario
      const userProfile = {
        username: user.name,
        email: user.email
        // Agrega otros campos que desees mostrar
      };

      return userProfile;
    } catch (error) {
      throw CustomError.internalServer(`${error}`);
    }
  }

  public async getUserProfileById(userId: string) {
    try {
      const user = await UserModel.findById(userId);

      if (!user) {
        throw CustomError.notFound('User not found');
      }

      // Filtrar datos sensibles si es necesario
      const userProfile = {
        username: user.name,
        email: user.email
        // Agrega otros campos que desees mostrar
      };

      return userProfile;
    } catch (error) {
      throw CustomError.internalServer(`${error}`);
    }
  }
  public async getAllUsers() {
    try {
      const users = await UserModel.find({});
      return users;
    } catch (error) {
      console.log(error);
      throw CustomError.internalServer('Internal Server Error');
    }
  }
}
