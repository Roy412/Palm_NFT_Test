import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  useActiveUser,
  useUserAccountBalance,
  useUserAccounts,
  useUserWallets,
} from "../../../utils/hooks";
import {
  DEPOSIT_URL,
  SEND_URL,
  TRANSACTIONS_URL,
} from "../../../utils/constants";
import { updateActiveWallet } from "../../../redux/wallets";

/**
 * Home Page Logic
 */
const useHome = () => {
  const activeUser = useActiveUser();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userWallets = useUserWallets();
  const accountBalance = useUserAccountBalance();
  const accounts = useUserAccounts(true);

  const handleDeposit = () => {
    navigate(DEPOSIT_URL);
  };
  const handleTransactions = () => {
    navigate(TRANSACTIONS_URL);
  };
  const handleSend = () => {
    navigate(SEND_URL);
  };

  const handleChangeAccount = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateActiveWallet({
        walletId: e.target.value,
        email: activeUser.email || "",
      }),
    );
  };

  return {
    activeUser,
    accountBalance,
    handleDeposit,
    handleSend,
    accounts,
    handleChangeAccount,
    handleTransactions,
    selAccount: userWallets.activeWalletId,
  };
};

export default useHome;
