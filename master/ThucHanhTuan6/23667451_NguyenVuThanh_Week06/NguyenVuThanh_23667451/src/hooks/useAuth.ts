import { loginWithDemoData, logout, selectAuth } from "../store/authSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export function useAuth() {
  const dispatch = useAppDispatch();
  const auth = useAppSelector(selectAuth);

  return {
    ...auth,
    login: () => dispatch(loginWithDemoData()),
    logout: () => dispatch(logout()),
  };
}
