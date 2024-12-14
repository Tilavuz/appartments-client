import { RootState } from "@/app/store";
import { InputOTPForm } from "@/components/common/auth-forms/input-otp-form";
import LoginForm from "@/components/common/auth-forms/login-form";
import { useSelector } from "react-redux";

export default function Auth() {
  const { action } = useSelector((state: RootState) => state.authState);
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      {action ? <InputOTPForm /> : <LoginForm />}
    </div>
  );
}
