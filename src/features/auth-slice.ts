import { IAuth } from "@/interface/auth-interface";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  auth: IAuth | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  auth: null,
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<IAuth>) => {
      state.auth = action.payload;
      state.error = null;
      state.loading = false;
    },
    logOut: (state) => {
      state.auth = null;
      state.error = null;
      state.loading = false;
    },
    authFailed: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    authStart: (state) => {
      state.loading = true;
      state.error = null;
    },
  },
});

export const { logOut, login, authFailed, authStart } = authSlice.actions;
export default authSlice.reducer;
