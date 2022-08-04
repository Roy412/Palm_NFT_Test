import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import { signInUser } from "../../../redux/users";

export interface ILoginProfile {
  email?: string;
  password?: string;
}
/**
 * Sign IN Logic
 */
const useLogin = () => {
  const [profile, setProfile] = useState<ILoginProfile>({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users.users);

  const [errors, setErrors] = useState<ILoginProfile>({});
  const [submitError, setSubmitError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChangeField = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
    setSubmitError("");
  };

  const validateFields = () => {
    const errs: ILoginProfile = {};
    if (!profile.password) {
      errs.password = "Required";
    }
    if (!profile.email) {
      errs.email = "Required";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setSubmitting(true);
    event.preventDefault();

    // validation fields
    if (!validateFields()) {
      setSubmitting(false);
      return;
    }

    const email = profile.email || "";
    // mock sign in api result
    if (!users[email] || users[email].password !== profile.password) {
      // check if credentials are valid
      setSubmitError("User doesn't exist or invalid credentials!");
      setSubmitting(false);
      return;
    }

    // sign in user
    setTimeout(() => {
      dispatch(signInUser({ email }));
    }, 2000);
  };

  return {
    profile,
    setProfile,
    handleChangeField,
    submitError,
    errors,
    handleSubmit,
    submitting,
  };
};

export default useLogin;
