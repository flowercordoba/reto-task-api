/* eslint-disable @typescript-eslint/no-unused-vars */
// import { signupSchema } from '@auth/validators/signup';
// import { joiValidation } from '@root/shared/decorator/joi-validation.decorators';
import { IAuthDocument } from '@auth/interfaces/auth.interface';
import { authService } from '@service/auth.service';
import { Request, Response } from 'express';

export class LoginController {
  // @joiValidation(signupSchema)

  Login = async(req: Request, res: Response) => {
    const checkIfUserExist =await authService.getAuthUserByUsername();
    res.json({ok:true,checkIfUserExist});


  };
}
