import React, { useRef, useState } from "react";
import { useHistory } from "react-router";
import classes from "./Auth.module.css";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { authActions } from "../store/auth-slice";

const Auth: React.FC = () => {
  const [showLogin, setShowLogin] = useState(true);
  const emailRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch<AppDispatch>();
  const history = useHistory();

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const email = emailRef.current!.value;
    const pw = pwRef.current!.value;

    const emailIsValid =
      email.trim().length > 0 && email.includes("@") && email.includes(".");
    const pwIsValid = pw.trim().length > 5;

    if (emailIsValid && pwIsValid) {
      dispatch(authActions.login({ email, password: pw }));
      emailRef.current!.value = "";
      pwRef.current!.value = "";
      history.push("/");
      toast.remove();
      toast.success("Successfully logged in.", {
        position: "bottom-right",
        duration: 3000,
      });
    } else {
      toast.remove();
      toast.error("Please enter a valid email and password.", {
        position: "bottom-right",
        duration: 3000,
      });
      return;
    }
  };

  return (
    <React.Fragment>
      {showLogin && (
        <div className={classes.container}>
          <form onSubmit={submitHandler}>
            <div className={classes.form_group}>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" ref={emailRef} />
            </div>
            <div className={classes.form_group}>
              <label htmlFor="pw">Password</label>
              <input type="password" name="pw" id="pw" ref={pwRef} />
            </div>
            <div className={classes.btn_wrapper}>
              <button>Login</button>
            </div>
            <p onClick={() => setShowLogin(false)}>
              No account? Create one now!
            </p>
          </form>
        </div>
      )}

      {!showLogin && (
        <div className={classes.container}>
          <form onSubmit={submitHandler}>
            <div className={classes.form_group}>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" ref={emailRef} />
            </div>
            <div className={classes.form_group}>
              <label htmlFor="pw">Password</label>
              <input type="password" name="pw" id="pw" ref={pwRef} />
            </div>
            <div className={classes.btn_wrapper}>
              <button className={classes.signup}>Sign Up</button>
            </div>
            <p onClick={() => setShowLogin(true)}>Got an account? Login now!</p>
          </form>
        </div>
      )}
    </React.Fragment>
  );
};

export default Auth;
