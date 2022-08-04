import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IProfileController } from "./types";

export const initialState: IProfileController = {
  email: "",
  firstName: "",
  lastName: "",
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateProfileInfo(
      state: IProfileController,
      action: PayloadAction<{
        email: string;
        firstName: string;
        lastName: string;
      }>,
    ) {
      return {
        ...state,
        email: action.payload.email,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      };
    },
  },
});

export const { updateProfileInfo } = profileSlice.actions;

export default profileSlice.reducer;
