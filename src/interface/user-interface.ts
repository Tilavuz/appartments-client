import { IAuth } from "./auth-interface";

export interface IUser {
  _id?: string;
  auth: IAuth;
  name: string | null;
  photo: string | null;
  email: string | null;
}
