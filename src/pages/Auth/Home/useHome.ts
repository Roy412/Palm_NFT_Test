import { useSelector } from "react-redux";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useActiveUser, useUserWallets } from "../../../utils/hooks";
import { RootState } from "../../../redux/store";
import { DEPOSIT_URL, SEND_URL } from "../../../utils/constants";

/**
 * Home Page Logic
 */
const useHome = () => {
  const activeUser = useActiveUser();
  const navigate = useNavigate();
  const userWallets = useUserWallets();
  const balances = useSelector((state: RootState) => state.balances);
  const userBalance = useMemo(
    () => balances[userWallets.activeWalletId] || 0,
    [userWallets.activeWalletId, balances],
  );

  const handleDeposit = () => {
    navigate(DEPOSIT_URL);
  };
  const handleSend = () => {
    navigate(SEND_URL);
  };

  return {
    activeUser,
    userBalance,
    handleDeposit,
    handleSend,
  };
};

export default useHome;
