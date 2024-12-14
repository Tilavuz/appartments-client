import { clientApi } from "@/api/client-api";

class AuthService {
  async login({ phone }: { phone: string }) {
    try {
      const res = await clientApi.publicInstance.post("/auth/login", { phone });
      return res.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async checkOtp({ phone, otp }: { phone: string; otp: string }) {
    try {
      const res = await clientApi.publicInstance.post("/auth/check_otp", {
        phone,
        otp,
      });
      return res.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export const authService = new AuthService();
