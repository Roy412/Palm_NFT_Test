import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { IUsersController } from "./types";
import type { IProfile } from "../../pages/Unauth/SignUp/useSignUp";

export const initialState: IUsersController = {};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    signUpUser(state: IUsersController, action: PayloadAction<IProfile>) {
      const { email } = action.payload;
      return {
        ...state,
        [email || ""]: action.payload,
      };
    },
  },
});

export const { signUpUser } = usersSlice.actions;

export default usersSlice.reducer;
