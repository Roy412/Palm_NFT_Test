import { useSelector } from "react-redux";
import { useMemo } from "react";
import { useActiveUser, useActiveWallet } from "../../../utils/hooks";
import { RootState } from "../../../redux/store";

/**
 * Home Page Logic
 */
const useHome = () => {
  const activeUser = useActiveUser();
  const activeWallet = useActiveWallet();
  const balances = useSelector((state: RootState) => state.balances);
  const userBalance = useMemo(
    () => balances[activeWallet.activeWalletId] || 0,
    [activeWallet.activeWalletId, balances],
  );

  return {
    activeUser,
    userBalance,
  };
};

export default useHome;
