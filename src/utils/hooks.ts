import { useSelector } from "react-redux";
import { useMemo } from "react";
import { RootState } from "../redux/store";
import type { IWalletAccounts } from "../pages/Auth/Send/useSend";

// select active user
export const useActiveUser = () => {
  const users = useSelector((state: RootState) => state.users.users);
  const activeUserEmail = useSelector(
    (state: RootState) => state.users.activeUserEmail,
  );
  return users[activeUserEmail];
};

// select user wallets
export const useUserWallets = () => {
  const activeUserEmail = useSelector(
    (state: RootState) => state.users.activeUserEmail,
  );
  const wallets = useSelector((state: RootState) => state.wallets);
  return wallets[activeUserEmail];
};

// select user accounts
export const useUserAccounts = (selfInclude = false) => {
  const userWallets = useUserWallets();

  return useMemo(() => {
    const array = Object.keys(userWallets.wallets).reduce(
      (result: IWalletAccounts[], key) => {
        if (selfInclude || key !== userWallets.activeWalletId) {
          const wallet = userWallets.wallets[key];
          result.push({
            label: wallet.walletName,
            value: wallet.walletId,
            createdAt: new Date(wallet.createdAt),
          });
        }
        return result;
      },
      [],
    );
    return array.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
  }, [selfInclude, userWallets.activeWalletId, userWallets.wallets]);
};

// select user account balance
export const useUserAccountBalance = () => {
  const balances = useSelector((state: RootState) => state.balances);
  const userWallets = useUserWallets();

  return useMemo(
    () => balances[userWallets.activeWalletId] || 0,
    [userWallets.activeWalletId, balances],
  );
};
