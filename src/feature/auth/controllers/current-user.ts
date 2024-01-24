/* eslint-disable @typescript-eslint/no-unused-vars */

import { IAuthDocument } from '@auth/interfaces/auth.interface';
import { authService } from '@service/auth.service';
import { Request, Response } from 'express';

export class CurrentController {
  // @joiValidation(signupSchema)

  getProfile = async (req: Request, res: Response) => {
    const getProfile = await authService.getUserById();
    res.json({ ok: true, getProfile });
  };
}
