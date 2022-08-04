import { BrowserRouter as Router } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import UnAuthRouter from "./routers/UnAuthRouter";
import AuthRouter from "./routers/AuthRouter";

/**
 * App Component
 * @constructor
 */
const App = () => {
  const activeUserEmail = useSelector((state: RootState) => {
    console.log("hello", state);
    return state.users.activeUserEmail;
  });

  return <Router>{activeUserEmail ? <AuthRouter /> : <UnAuthRouter />}</Router>;
};

export default App;
