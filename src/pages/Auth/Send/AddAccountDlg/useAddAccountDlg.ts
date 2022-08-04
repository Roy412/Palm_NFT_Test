import { useState } from "react";
import { useDispatch } from "react-redux";
import { addWallet } from "../../../../redux/wallets";
import { useActiveUser } from "../../../../utils/hooks";

/**
 * Add Account Dlg Logic
 */
const useAddAccountDlg = (handleClose: () => void) => {
  const [accountName, setAccountName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const activeUser = useActiveUser();

  const handleAccountNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccountName(e.target.value);
  };

  const handleAddAccount = () => {
    setLoading(true);

    // validation
    if (!accountName) {
      setError("Required");
      setLoading(false);
      return;
    }

    setTimeout(() => {
      // add wallet
      dispatch(
        addWallet({ email: activeUser.email || "", label: accountName }),
      );
      handleClose();
    }, 2000);
  };

  return {
    accountName,
    handleAccountNameChange,
    handleAddAccount,
    loading,
    error,
  };
};

export default useAddAccountDlg;
