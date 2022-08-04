import { IProfile } from "../../pages/Unauth/SignUp/useSignUp";

export interface IUsersController {
  [userEmail: string]: IProfile;
}
