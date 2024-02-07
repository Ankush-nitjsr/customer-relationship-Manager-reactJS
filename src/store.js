import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import authReducer from "./slices/authSlice";
import storage from "localforage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"], // specify which reducers to persist
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: persistedReducer,
  },
});

export const persistor = persistStore(store);

// configureStore: to configure the entire store
// userReducer: reducer to manage user data
// authReducer: reducer to manage authentication data
