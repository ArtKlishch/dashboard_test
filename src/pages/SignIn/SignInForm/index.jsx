import React, { useState } from "react";
import AuthCode from 'react-auth-code-input'
import classes from "./SignInForm.module.scss";
import {ReactComponent as Cross} from "../../../assets/icons/cross.svg"

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

  const handleOnChange = (res) => {
    setCode(res)
  }

  return (
    <form className={classes.SignInForm} onSubmit={onSubmitHandler}>
      <h3 className={classes.SignInForm__title}>Login</h3>
      {step === 1 && (
        <TextField
          label="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          type="email"
        />
      )}
      {/* <CodeField onChange={(e) => setCode(e.target.value)} value={code} /> */}
      {step === 2 && (
        <>
          <p>
            To finalize your verification, please enter the code that has been
            sent to your email address / SMS
          </p>
          <div className={classes.SignInForm__container}>
            <AuthCode
              onChange={handleOnChange}
              inputClassName={classes.SignInForm__codeInput}
              // containerClassName={classes.SignInForm__codeContainer}
              // containerClassName={{}}
            />
            <button className={classes.SignInForm__crossButton}>
              <Cross />
            </button>
          </div>
        </>
      )}
      <Button extrastyles={classes.SignInForm__btnExtraStyle} type="submit">
        {btnText}
      </Button>
      {step === 2 && (
        <p>
          If you do not receive the confirmation message within a few minutes,
          please check your Spam or Bulk E-Mail folder
        </p>
      )}
    </form>
  )
}

export default SignInForm;
