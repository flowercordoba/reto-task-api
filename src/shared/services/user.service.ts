/* eslint-disable @typescript-eslint/no-explicit-any */

class UserService {


  public async updateUserInfo(): Promise<void> {
    console.log('updateUserInfo');
   
  }


  public async getUserById(): Promise<any> {
    console.log('getUserById');

    
  }

  public async getUserByAuthId(): Promise<any> {
    console.log('getUserByAuthId');

  }

  public async getAllUsers(): Promise<any> {
    console.log('getAllUsers');

  }



  public async searchUsers(): Promise<any> {
    console.log('searchUsers');

  }
   

}

export const userService: UserService = new UserService();
