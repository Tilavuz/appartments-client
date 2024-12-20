import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, LoaderCircle } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { authService } from "@/services/auth-service";
import { useRef } from "react";
import { actionLogin } from "@/features/auth-state-slice";
import { toast } from "sonner";
import { AxiosError } from "axios";
import { authEnd, authFailed, authStart } from "@/features/auth-slice";
import { RootState } from "@/app/store";

export default function LoginForm() {
  const dispatch = useDispatch();
  const phoneRef = useRef<HTMLInputElement>(null);
  const { loading } = useSelector((state: RootState) => state.auth);

  const login = async () => {
    try {
      if (phoneRef.current?.value) {
        dispatch(authStart());
        const data = await authService.login({
          phone: `+998${phoneRef.current?.value.trim()}`,
        });
        toast.success(data.message);
        dispatch(
          actionLogin({ phone: `+998${phoneRef.current?.value.trim()}` })
        );
        dispatch(authEnd());
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data?.message);
        dispatch(authFailed(error.response?.data?.message));
      } else {
        console.log("An unexpected error occurred:", error);
      }
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Kirish</CardTitle>
        <CardDescription>
          Tizimga kirish uchun telefon raqamingizni kiriting!
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Label htmlFor="phone">Telefon:</Label>
          <div className="flex items-center border px-4 rounded text-sm">
            <p className="text-sm">+998</p>
            <Input
              ref={phoneRef}
              className="flex-1 border-none rounded-none shadow-none focus-visible:ring-0 text-sm"
              id="phone"
              placeholder="901234567"
            />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={login}
          className="ml-auto font-bold flex items-center gap-3"
          disabled={loading}
        >
          Keyingisi{" "}
          {loading ? <LoaderCircle className="animate-spin" /> : <ArrowRight />}
        </Button>
      </CardFooter>
    </Card>
  );
}
