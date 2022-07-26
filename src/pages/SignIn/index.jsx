import React from "react";
import classes from "./SignIn.module.scss";
import { ReactComponent as PlaygroundImage } from "../../assets/images/playground1.svg";

import SignInForm from "./SignInForm";

const SignIn = () => {
  return (
    <div className={classes.SignIn}>
      <aside className={classes.SignIn__leftcol}>
        <h1 className={classes.SignIn__leftcol_title}>Playground</h1>
        <PlaygroundImage className={classes.SignIn__leftcol_img} />
      </aside>
      <aside className={classes.SignIn__rightcol}>
        <SignInForm />
      </aside>
    </div>
  );
};

export default SignIn;
