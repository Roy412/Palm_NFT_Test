// import { NotFound, PrivateRoute } from 'components/Common';
import SignUpPage from "pages/Unauth/SignUp";
import LogInPage from "pages/Unauth/LogIn";
import {
  Routes,
  Route,
  Navigate,
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Redirect exact from="/" to="/admin/dashboard" /> */}
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="*" element={<Navigate to="/batch" />} />

        {/* <PrivateRoute path="/admin"> */}
        {/*  <AdminLayout /> */}
        {/* </PrivateRoute> */}

        {/* <Route> */}
        {/*  <NotFound /> */}
        {/* </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
