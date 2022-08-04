import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IBalancesController } from "./types";

export const initialState: IBalancesController = {};

const balancesSlice = createSlice({
  name: "balances",
  initialState,
  reducers: {
    updateBalance(
      state: IBalancesController,
      action: PayloadAction<{
        walletId: string;
        balance: number;
      }>,
    ) {
      const { walletId, balance } = action.payload;
      return {
        ...state,
        [walletId]: balance,
      };
    },
  },
});

export const { updateBalance } = balancesSlice.actions;

export default balancesSlice.reducer;
