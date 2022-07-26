import React, { useState } from "react";
import classes from "./SignInForm.module.scss";

import TextField from "../../../components/TextField";
import Button from "../../../components/Button";
import CodeField from "../../../components/CodeField";

function SignInForm() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
      return;
    }
  };
  const btnText = step === 1 ? "Send code" : "Submit";
  return (
    <form className={classes.SignInForm} onSubmit={onSubmitHandler}>
      <h3 className={classes.SignInForm__title}>Login</h3>
      <TextField
        label="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name="email"
        type="email"
      />
      <CodeField onChange={(e) => setCode(e.target.value)} value={code} />
      <Button extrastyles={classes.SignInForm__btnExtraStyle} type="submit">
        {btnText}
      </Button>
    </form>
  );
}

export default SignInForm;
