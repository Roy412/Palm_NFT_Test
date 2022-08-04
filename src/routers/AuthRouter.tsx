import HomePage from "pages/Auth/Home";
import { Routes, Route, Navigate } from "react-router-dom";

const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};

export default AuthRouter;
