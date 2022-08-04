import SignUpPage from "pages/Unauth/SignUp";
import LogInPage from "pages/Unauth/LogIn";
import { Routes, Route, Navigate } from "react-router-dom";

const UnAuthRouter = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LogInPage />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default UnAuthRouter;
