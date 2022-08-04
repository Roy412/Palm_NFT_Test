import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const useActiveUser = () => {
  const users = useSelector((state: RootState) => state.users.users);
  const activeUserEmail = useSelector(
    (state: RootState) => state.users.activeUserEmail,
  );
  return users[activeUserEmail];
};
