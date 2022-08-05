import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { batch, useDispatch, useSelector } from "react-redux";
import { HOME_URL } from "../../../utils/constants";
import { updateBalance } from "../../../redux/balances";
import {
  useActiveUser,
  useUserAccountBalance,
  useUserAccounts,
  useUserWallets,
} from "../../../utils/hooks";
import { RootState } from "../../../redux/store";
import { addTransaction } from "../../../redux/transactions";
import { TransactionType } from "../../../redux/transactions/types";

export interface IWalletAccounts {
  label: string;
  value: string;
  createdAt: Date;
}

/**
 * Send Page Logic
 */
const useSend = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [dlgOpen, setDlgOpen] = useState(false);
  const [selAccount, setSelAccount] = useState<string | undefined>();
  const [accountError, setAccountErr] = useState<string | undefined>();

  const activeUser = useActiveUser();
  const userWallets = useUserWallets();
  const balances = useSelector((state: RootState) => state.balances);
  const selWalletBalance = useMemo(
    () => (selAccount ? balances[selAccount] || 0 : 0),
    [balances, selAccount],
  );
  const accounts = useUserAccounts();
  const accountBalance = useUserAccountBalance();

  useEffect(() => {
    setAccountErr(
      accounts.length === 0 ? "No enough accounts. Try to add" : "",
    );
  }, [accounts.length]);

  const handleChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
    setError("");
  };

  const handleChangeAccount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelAccount(e.target.value);
    setAccountErr("");
  };

  const handleSend = () => {
    setLoading(true);

    // validation
    if (accountError) {
      setLoading(false);
      return;
    }

    if (!selAccount) {
      setAccountErr("Please select account to send");
      setLoading(false);
      return;
    }

    if (!amount || parseInt(amount, 10) <= 0) {
      setError("Please input amount greater than 0");
      setLoading(false);
      return;
    }

    if (parseInt(amount, 10) > accountBalance) {
      setError(`Not enough balance, you have ${accountBalance}.`);
      setLoading(false);
      return;
    }

    setTimeout(() => {
      batch(() => {
        // update balance
        dispatch(
          updateBalance({
            walletId: selAccount || "",
            balance: selWalletBalance + parseInt(amount, 10),
          }),
        );

        dispatch(
          updateBalance({
            walletId: userWallets.activeWalletId,
            balance: accountBalance - parseInt(amount, 10),
          }),
        );
        // add the transaction
        dispatch(
          addTransaction({
            email: activeUser.email || "",
            transaction: {
              type: TransactionType.TRANSFER,
              from: userWallets.activeWalletId,
              to: selAccount || "",
              amount: parseInt(amount, 10),
              createdAt: Date(),
            },
          }),
        );
      });
      navigate(HOME_URL);
    }, 2000);
  };

  return {
    amount,
    error,
    handleChangeAmount,
    handleSend,
    loading,
    accounts,
    selAccount,
    handleChangeAccount,
    accountError,
    dlgOpen,
    setDlgOpen,
  };
};

export default useSend;
