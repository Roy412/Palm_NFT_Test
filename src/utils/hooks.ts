import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

// select active user
export const useActiveUser = () => {
  const users = useSelector((state: RootState) => state.users.users);
  const activeUserEmail = useSelector(
    (state: RootState) => state.users.activeUserEmail,
  );
  return users[activeUserEmail];
};

// select active wallet
export const useActiveWallet = () => {
  const activeUserEmail = useSelector((state: RootState) => {
    console.log("wow", state);
    return state.users.activeUserEmail;
  });
  const wallets = useSelector((state: RootState) => state.wallets);
  return wallets[activeUserEmail];
};
