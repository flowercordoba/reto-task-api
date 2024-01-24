/* eslint-disable @typescript-eslint/no-unused-vars */
// import { signupSchema } from '@auth/validators/signup';
// import { joiValidation } from '@root/shared/decorator/joi-validation.decorators';
import { authService } from '@service/auth.service';
import { Request, Response } from 'express';

export class RegisterController {
  // @joiValidation(signupSchema)

  Register = async (req: Request, res: Response) => {
    // res.send('hola');
    const checkIfUserExistregister = await authService.getUserByUsernameOrEmail();
    res.json({ ok: true, checkIfUserExistregister });
  };
}
