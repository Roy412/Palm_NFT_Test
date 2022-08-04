import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { PersistConfig } from "redux-persist/es/types";
import profileReducer from "./profile";
import usersReducer from "./users";
import { IProfileController } from "./profile/types";
import { IUsersController } from "./users/types";

const reducers = combineReducers({
  profile: profileReducer,
  users: usersReducer,
});

export interface IStoreController {
  profile: IProfileController;
  users: IUsersController;
}

const persistConfig: PersistConfig<IStoreController> = {
  key: "primary",
  storage,
  whitelist: [],
};

const allReducers = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: allReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: true, serializableCheck: false }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
