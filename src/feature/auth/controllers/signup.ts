/* eslint-disable no-empty */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { RegisterUserDto } from '@domain/index';
import { CustomError } from '@root/shared/utils';
import { AuthService } from '@service/auth.service';
import { Request, Response } from 'express';

export class RegisterController {
  constructor(public readonly authService: AuthService) {}

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }

    console.log(`${error}`);
    return res.status(500).json({ error: 'Internal server error' });
  };

  Register = async (req: Request, res: Response) => {
    const [error, registerDto] = RegisterUserDto.create(req.body);

    if (error) return res.status(400).json({ error });

    this.authService
      .createAuthUser(registerDto!)
      .then((user) => res.json(user))
      .catch((error) => this.handleError(error, res));
  };
}
