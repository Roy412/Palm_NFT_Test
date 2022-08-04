import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { HOME_URL } from "../../../utils/constants";
import { updateBalance } from "../../../redux/balances";
import { useUserWallets } from "../../../utils/hooks";
import { RootState } from "../../../redux/store";

/**
 * Home Page Logic
 */
const useHome = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const userWallets = useUserWallets();
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
    if (!amount || parseInt(amount, 10) <= 0) {
      setError("Please input amount greater than 0");
      setLoading(false);
      return;
    }

    setTimeout(() => {
      dispatch(
        updateBalance({
          walletId: userWallets.activeWalletId,
          balance: userBalance + parseInt(amount, 10),
        }),
      );
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

export default useHome;
