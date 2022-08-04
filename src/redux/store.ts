import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { PersistConfig } from "redux-persist/es/types";
import { IWalletsController } from "./wallets/types";
import { IUsersController } from "./users/types";
import reducers from "./reducer";
import { IBalancesController } from "./balances/types";
import { ITransactionsController } from "./transactions/types";

export interface IStoreController {
  users: IUsersController;
  wallets: IWalletsController;
  balances: IBalancesController;
  transactions: ITransactionsController;
}

const persistConfig: PersistConfig<IStoreController> = {
  key: "primary",
  storage,
};

const allReducers = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: allReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: true, serializableCheck: false }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
