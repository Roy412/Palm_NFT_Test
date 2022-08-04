import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import { validateEmail } from "../../../utils/utils";
import { signUpUser } from "../../../redux/users";

/**
 * Profile Interface
 */
export interface IProfile {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
}

/**
 * Sign UP Logic
 */
const useSignUp = () => {
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users);

  const [errors, setErrors] = useState<IProfile>({});
  const [submitting, setSubmitting] = useState(false);

  const handleChangeField = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const validateFields = () => {
    const errs: IProfile = {};
    if (!profile.firstName) {
      errs.firstName = "Required";
    }
    if (!profile.lastName) {
      errs.lastName = "Required";
    }
    if (!profile.password) {
      errs.password = "Required";
    }
    if (!profile.email) {
      errs.email = "Required";
    }
    if (!validateEmail(profile.email)) {
      errs.email = "Invalid Email";
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

    // mock sign up api result
    if (users[profile.email]) {
      // check if user with email already exists
      setErrors({
        ...errors,
        email: "User with this Email address already exists.",
      });
      setSubmitting(false);
      return;
    }

    // register user
    setTimeout(() => {
      dispatch(signUpUser(profile));
    }, 2000);
  };

  return {
    profile,
    setProfile,
    handleChangeField,
    errors,
    handleSubmit,
    submitting,
  };
};

export default useSignUp;
