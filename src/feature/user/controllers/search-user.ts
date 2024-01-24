/* eslint-disable @typescript-eslint/no-unused-vars */

import { userService } from '@service/user.service';
import { Request, Response } from 'express';

export class Search {
  // @joiValidation(signupSchema)

  user = async (req: Request, res: Response) => {
    const searchUser = await userService.getAllUsers();
    res.json(searchUser);
  };

  userUpdate = async (req: Request, res: Response) => {
    const searchUser = await userService.updateUserInfo();
    res.json(searchUser);
  };
}
