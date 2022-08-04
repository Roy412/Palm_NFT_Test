import { useDispatch } from "react-redux";
import { logOutUser } from "../../redux/users";

/**
 * Layout Logic
 */
const useLayout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOutUser());
  };

  return {
    handleLogout,
  };
};

export default useLayout;
