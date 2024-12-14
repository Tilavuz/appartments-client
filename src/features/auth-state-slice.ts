import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthStateData {
  phone: string | null;
  otp: string | null;
  action: boolean;
  name: string | null;
}

const initialState: AuthStateData = {
  phone: null,
  otp: null,
  action: false,
  name: null,
};

export const authStateSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    actionLogin: (state, action: PayloadAction<{ phone: string }>) => {
      state.action = true;
      state.phone = action.payload.phone;
    },
    actionRegister: (
      state,
      action: PayloadAction<{ phone: string; name: string }>
    ) => {
      state.action = true;
      state.name = action.payload.name;
      state.phone = action.payload.phone;
    },
    actionReset: (state) => {
      state.action = false;
      state.name = null;
      state.phone = null;
    },
  },
});

export const { actionLogin, actionRegister, actionReset } =
  authStateSlice.actions;
export default authStateSlice.reducer;
