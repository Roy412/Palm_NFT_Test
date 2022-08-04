import { IProfile } from "../../pages/Unauth/SignUp/useSignUp";

export interface IUsersController {
  users: {
    [userEmail: string]: IProfile;
  };
  activeUserEmail: string;
}
