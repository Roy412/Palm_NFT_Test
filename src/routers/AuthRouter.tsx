import HomePage from "pages/Auth/Home";
import DepositPage from "pages/Auth/Deposit";
import { Routes, Route, Navigate } from "react-router-dom";
import { DEPOSIT_URL, HOME_URL } from "../utils/constants";

const AuthRouter = () => {
  return (
    <Routes>
      <Route path={HOME_URL} element={<HomePage />} />
      <Route path={DEPOSIT_URL} element={<DepositPage />} />
      <Route path="*" element={<Navigate to={HOME_URL} />} />
    </Routes>
  );
};

export default AuthRouter;
