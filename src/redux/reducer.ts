import { combineReducers } from "@reduxjs/toolkit";
import usersReducer from "./users";
import walletsReducer from "./wallets";
import balancesReducer from "./balances";
import transactionsReducer from "./transactions";

const reducers = combineReducers({
  users: usersReducer,
  wallets: walletsReducer,
  balances: balancesReducer,
  transactions: transactionsReducer,
});

export default reducers;
