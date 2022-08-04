import { useDispatch } from "react-redux";
import { logOutUser } from "../../../redux/users";

/**
 * Home Page Logic
 */
const useHome = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOutUser());
  };

  return {
    handleLogout,
  };
};

export default useHome;
