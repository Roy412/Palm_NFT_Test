import HomePage from "pages/Auth/Home";
import DepositPage from "pages/Auth/Deposit";
import SendPage from "pages/Auth/Send";
import { Routes, Route, Navigate } from "react-router-dom";
import { DEPOSIT_URL, HOME_URL, SEND_URL } from "../utils/constants";

const AuthRouter = () => {
  return (
    <Routes>
      <Route path={HOME_URL} element={<HomePage />} />
      <Route path={DEPOSIT_URL} element={<DepositPage />} />
      <Route path={SEND_URL} element={<SendPage />} />
      <Route path="*" element={<Navigate to={HOME_URL} />} />
    </Routes>
  );
};

export default AuthRouter;
