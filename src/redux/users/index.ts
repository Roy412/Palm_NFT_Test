import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { IUsersController } from "./types";
import type { IProfile } from "../../pages/Unauth/SignUp/useSignUp";

export const initialState: IUsersController = {
  activeUserEmail: "",
  users: {},
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    signUpUser(state: IUsersController, action: PayloadAction<IProfile>) {
      const { email } = action.payload;
      return {
        ...state,
        activeUserEmail: email || "",
        users: { ...state.users, [email || ""]: action.payload },
      };
    },
    signInUser(
      state: IUsersController,
      action: PayloadAction<{ email: string }>,
    ) {
      const { email } = action.payload;
      return {
        ...state,
        activeUserEmail: email,
      };
    },
    logOutUser(state: IUsersController) {
      return {
        ...state,
        activeUserEmail: "",
      };
    },
  },
});

export const { signUpUser, logOutUser, signInUser } = usersSlice.actions;

export default usersSlice.reducer;
