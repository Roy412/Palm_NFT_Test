import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { batch, useDispatch, useSelector } from "react-redux";
import { HOME_URL } from "../../../utils/constants";
import { updateBalance } from "../../../redux/balances";
import { useActiveUser, useUserWallets } from "../../../utils/hooks";
import { RootState } from "../../../redux/store";
import { addTransaction } from "../../../redux/transactions";
import { TransactionType } from "../../../redux/transactions/types";

/**
 * Deposit Page Logic
 */
const useDeposit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const userWallets = useUserWallets();
  const activeUser = useActiveUser();
  const balances = useSelector((state: RootState) => state.balances);
  const userBalance = useMemo(
    () => balances[userWallets.activeWalletId] || 0,
    [userWallets.activeWalletId, balances],
  );

  const handleChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
    setError("");
  };

  const handleDeposit = () => {
    setLoading(true);

    // validation
    if (!amount || parseInt(amount, 10) <= 0) {
      setError("Please input amount greater than 0");
      setLoading(false);
      return;
    }

    setTimeout(() => {
      batch(() => {
        // update balance
        dispatch(
          updateBalance({
            walletId: userWallets.activeWalletId,
            balance: userBalance + parseInt(amount, 10),
          }),
        );
        // add the transaction
        dispatch(
          addTransaction({
            email: activeUser.email || "",
            transaction: {
              type: TransactionType.DEPOSIT,
              to: userWallets.activeWalletId,
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
    handleDeposit,
    loading,
  };
};

export default useDeposit;
