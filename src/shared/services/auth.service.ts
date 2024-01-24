/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

// import { IAuthDocument } from '@auth/interfaces/auth.interface';





class AuthService {
  public async createAuthUser(): Promise<void> {
    const datat = ['email','user'];
    console.log('createAuthUser');
    // await AuthModel.create(data);
  }


  public async getUserByUsernameOrEmail(): Promise<any> {
    const datat = ['email','user'];
    
    console.log('register services',datat);

  }

  public async getAuthUserByUsername(): Promise<any> {
    const datat = ['user'];
 
    console.log('login',datat);

    
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

export const authService: AuthService = new AuthService();
