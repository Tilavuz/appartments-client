import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/features/auth-slice";
import authStateReducer from "@/features/auth-state-slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    authState: authStateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
