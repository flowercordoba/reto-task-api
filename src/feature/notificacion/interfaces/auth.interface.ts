declare global {
  namespace Express {
    interface Request {
      currentUser?: IAuthPayload;
    }
  }
}

export interface IAuthPayload {
  id: number;
  name: string;
  email: string;
  iat?: number;
}

export interface IAuth {
  name?: string;
  password?: string;
  email?: string;
  profilePicture?: string;
}

export interface IAuthDocument {
  id?: number;
  profilePublicId?: string;
  name?: string;
  email?: string;
  password?: string;
  profilePicture?: string;
  createdAt?: Date;
  updatedAt?: Date;
  passwordResetToken?: string;
  passwordResetExpires?: Date;
  comparePassword(password: string): Promise<boolean>;
  hashPassword(password: string): Promise<string>;
}

export interface ISignUpPayload {
  [key: string]: string;
  name: string;
  password: string;
  email: string;
  profilePicture: string;
}

export interface ISignInPayload {
  [key: string]: string;
  name: string;
  password: string;
}

export interface IReduxAuthPayload {
  authInfo?: IAuthDocument;
}

export interface IReduxAddAuthUser {
  type: string;
  payload: IReduxAuthPayload;
}

export interface IReduxLogout {
  type: string;
  payload: boolean;
}

export interface IAuthResponse {
  message: string;
}

export interface IAuthUser {
  createdAt: Date | null;
  email: string | null;
  id: number | null;
  passwordResetExpires: Date | null;
  passwordResetToken: null | null;
  profilePicture: string | null;
  updatedAt: Date | null;
  name: string | null;
}
