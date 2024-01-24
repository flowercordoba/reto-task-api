/* eslint-disable @typescript-eslint/no-unused-vars */
import { userService } from '@service/user.service';
import { Request, Response } from 'express';

export class Get {
  public async all(req: Request, res: Response): Promise<void> {
    const allUser =await userService.getAllUsers();
    res.json(allUser);

  }

  public async profile(req: Request, res: Response): Promise<void> {
    const profile =await userService.getUserById();
    res.json(profile);
  }

  public async profileByUserId(req: Request, res: Response): Promise<void> {
    const profileByUserId =await userService.getUserById();
    res.json(profileByUserId);
  }




}
