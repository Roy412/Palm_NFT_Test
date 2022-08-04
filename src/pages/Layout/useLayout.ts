import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOutUser } from "../../redux/users";

/**
 * Layout Logic
 */
const useLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOutUser());
  };

  const handleBack = () => {
    navigate(-1);
  };

  return {
    handleLogout,
    handleBack,
  };
};

export default useLayout;
