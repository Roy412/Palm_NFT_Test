import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ITransaction, ITransactionsController } from "./types";

export const initialState: ITransactionsController = {};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransaction(
      state: ITransactionsController,
      action: PayloadAction<{
        email: string;
        transaction: ITransaction;
      }>,
    ) {
      const { email, transaction } = action.payload;
      const txs = state[email] || [];
      return {
        ...state,
        [email]: [transaction, ...txs],
      };
    },
  },
});

export const { addTransaction } = transactionsSlice.actions;

export default transactionsSlice.reducer;
