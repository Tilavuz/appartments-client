import { RootState } from "@/app/store";
import Loading from "@/components/common/loading";
import { authEnd, authStart, login } from "@/features/auth-slice";
import { authService } from "@/services/auth-service";
import { ReactNode, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function PrivateRoute({ children }: { children: ReactNode }) {
  const { auth, loading } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const getAuth = useCallback(async () => {
    try {
      dispatch(authStart());
      const data = await authService.getAuth();
      dispatch(login(data));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(authEnd());
    }
  }, [dispatch]);

  useEffect(() => {
    getAuth();
  }, [getAuth]);

  if (loading) {
    return <Loading />;
  }

  if (!auth) {
    return <p>Page not found</p>;
  }

  return children;
}
