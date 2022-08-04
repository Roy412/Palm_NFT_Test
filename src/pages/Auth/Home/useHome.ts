import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";
import { logOutUser } from "../../../redux/users";
import { useActiveUser, useActiveWallet } from "../../../utils/hooks";
import { RootState } from "../../../redux/store";

/**
 * Home Page Logic
 */
const useHome = () => {
  const dispatch = useDispatch();
  const activeUser = useActiveUser();
  const activeWallet = useActiveWallet();
  const balances = useSelector((state: RootState) => state.balances);
  const userBalance = useMemo(
    () => balances[activeWallet.activeWalletId] || 0,
    [activeWallet.activeWalletId, balances],
  );

  const handleLogout = () => {
    dispatch(logOutUser());
  };

  return {
    activeUser,
    userBalance,
    handleLogout,
  };
};

export default useHome;
