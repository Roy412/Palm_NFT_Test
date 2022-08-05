import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useActiveUser } from "../../../utils/hooks";

const useTransactions = () => {
  const activeUser = useActiveUser();
  const txs = useSelector((state: RootState) => state.transactions);

  return txs[activeUser.email || ""];
};

export default useTransactions;
