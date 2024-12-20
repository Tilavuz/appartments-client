import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { useEffect, useState, useCallback } from "react";
import { authService } from "@/services/auth-service";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { actionReset } from "@/features/auth-state-slice";
import { authEnd, authStart, login } from "@/features/auth-slice";
import { toast } from "sonner";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

export function InputOTPForm() {
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const { phone } = useSelector((state: RootState) => state.authState);
  const { loading } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  const checkOtp = useCallback(async () => {
    if (!phone || otp.length !== 6) return;
    try {
      dispatch(authStart());
      const data = await authService.checkOtp({ phone, otp });
      toast.success(data.message);
      dispatch(login(data.auth));
      dispatch(actionReset());
      navigate("/");
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data?.message);
        dispatch(authEnd());
      } else {
        console.log("An unexpected error occurred:", error);
      }
    }
  }, [otp, phone, dispatch, navigate]);

  useEffect(() => {
    checkOtp();
  }, [otp, checkOtp]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Telefon raqamingizni tasdiqlang!</CardTitle>
        <CardDescription>
          <span className="font-bold text-black">{`+${phone || ""}`}</span>{" "}
          raqamini tasdiqlash uchun 6 xonali kod yuborildi!
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-center">
        <InputOTP maxLength={6} onChange={setOtp} disabled={loading}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
