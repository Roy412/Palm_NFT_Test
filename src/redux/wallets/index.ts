import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import { IWalletsController } from "./types";

export const initialState: IWalletsController = {};

const walletsSlice = createSlice({
  name: "wallets",
  initialState,
  reducers: {
    addWallet(
      state: IWalletsController,
      action: PayloadAction<{
        email: string;
        label: string;
        active: boolean;
      }>,
    ) {
      const { email, label, active } = action.payload;
      const userWallets = { ...state[email] } || {};
      userWallets.wallets = { ...userWallets.wallets } || {};

      const wallet = {
        walletId: uuidv4(),
        walletName: label,
        createdAt: new Date().toString(),
      };

      if (active) {
        userWallets.activeWalletId = wallet.walletId;
      }
      userWallets.wallets[wallet.walletId] = wallet;

      return {
        ...state,
        [email]: userWallets,
      };
    },
    updateActiveWallet(
      state: IWalletsController,
      action: PayloadAction<{
        email: string;
        walletId: string;
      }>,
    ) {
      const { email, walletId } = action.payload;
      const userWallets = { ...state[email] } || {};
      userWallets.activeWalletId = walletId;

      return {
        ...state,
        [email]: userWallets,
      };
    },
  },
});

export const { addWallet, updateActiveWallet } = walletsSlice.actions;

export default walletsSlice.reducer;
