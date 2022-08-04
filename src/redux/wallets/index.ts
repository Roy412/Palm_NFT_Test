import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IWallet, IWalletsController } from "./types";

export const initialState: IWalletsController = {};

const walletsSlice = createSlice({
  name: "wallets",
  initialState,
  reducers: {
    addWallet(
      state: IWalletsController,
      action: PayloadAction<{
        email: string;
        wallet: IWallet;
        active: boolean;
      }>,
    ) {
      const { email, wallet, active } = action.payload;
      const userWallets = { ...state[email] } || {};
      if (active) {
        userWallets.activeWalletId = wallet.walletId;
      }
      userWallets.wallets = userWallets.wallets || {};
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
