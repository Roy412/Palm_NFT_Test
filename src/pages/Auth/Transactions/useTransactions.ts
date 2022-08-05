import { useSelector } from "react-redux";
import { useMemo } from "react";
import { RootState } from "../../../redux/store";
import { useActiveUser, useUserWallets } from "../../../utils/hooks";

const useTransactions = () => {
  const activeUser = useActiveUser();
  const userWallets = useUserWallets();
  const txs = useSelector((state: RootState) => state.transactions);

  return useMemo(() => {
    let result = txs[activeUser.email || ""];
    // filter by current wallet involved
    result = result.filter(
      (tx) =>
        tx.from === userWallets.activeWalletId ||
        tx.to === userWallets.activeWalletId,
    );

    return result.map((tx) => {
      const updatedTx = { ...tx };
      if (tx.from === userWallets.activeWalletId) {
        updatedTx.toLabel = userWallets.wallets[tx.to].walletName;
      } else if (tx.from) {
        updatedTx.fromLabel = userWallets.wallets[tx.from].walletName;
      }

      return updatedTx;
    });
  }, [activeUser.email, txs, userWallets.activeWalletId, userWallets.wallets]);
};

export default useTransactions;
