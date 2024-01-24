/* eslint-disable @typescript-eslint/no-unused-vars */
import { LoginUserDto } from '@domain/index';
import { CustomError } from '@root/shared/utils';
import { AuthService } from '@service/auth.service';
import { Request, Response } from 'express';

export class LoginController {
  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }

    console.log(`${error}`);
    return res.status(500).json({ error: 'Internal server error' });
  };

  constructor(public readonly authService: AuthService) {}

  Login = async (req: Request, res: Response) => {
    const [error, loginUserDto] = LoginUserDto.create(req.body);
    if (error) {
      return res.status(400).json({ error });
    }

    this.authService
      .getUserByUsernameOrEmail(loginUserDto!)
      .then((user) => res.json(user))
      .catch((error) => this.handleError(error, res));
  };
}
