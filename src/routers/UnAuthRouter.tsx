import SignUpPage from "pages/Unauth/SignUp";
import LogInPage from "pages/Unauth/LogIn";
import { Routes, Route, Navigate } from "react-router-dom";
import { LOGIN_URL, SIGNUP_URL } from "../utils/constants";

const UnAuthRouter = () => {
  return (
    <Routes>
      <Route path={SIGNUP_URL} element={<SignUpPage />} />
      <Route path={LOGIN_URL} element={<LogInPage />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default UnAuthRouter;
