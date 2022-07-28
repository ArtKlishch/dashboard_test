import React, { useState } from "react";
import classes from "./SignIn.module.scss";
import { ReactComponent as PlaygroundImage } from "../../assets/images/playground1.svg";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { generatePassword, loginWithCode } from '../../api'
import EnterMailSection from "./sections/EnterMailSection";
import EnterCodeSection from "./sections/EnterCodeSection"
import Form from "./layouts/Form"
import { setUser } from "../../redux/actions";
import { findLabel } from "../../utils";

const SignIn = () => {
  const labels = useSelector(state => state.labels)
  const dispatch = useDispatch()
  const globalParameters = useSelector((state) => state.globalParameters)
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [error, setError] = useState(null)

  const handleSubmitFirstForm = (event) => {
  event.preventDefault()
    generatePassword({
      email,
      languageId: globalParameters.languageId
    })
      .then((res) => {
        if (res === 'done') {
          setStep(2)
        }
      })
      .catch(console.log)
  }

  const handleSubmitSecondForm = (event) => {
    event.preventDefault()
    loginWithCode({
      email,
      code,
      languageId: globalParameters.languageId
    }).then(res => {
      if (!res.jwt) {
        throw new Error(res)
      }

      setError(null)
      dispatch(setUser(res.jwt))
    }).catch(error => setError(error.message))
  }

  const handleEmailInputChange = (event) => setEmail(event.target.value)
  const handleCodeInputChange = (value) => setCode(value)

  return (
    <div className={classes.SignIn}>
      <aside className={classes.SignIn__leftcol}>
        <h1 className={classes.SignIn__leftcol_title}>Playground</h1>
        <PlaygroundImage className={classes.SignIn__leftcol_img} />
      </aside>
      <aside className={classes.SignIn__rightcol}>
        <Form
          onSubmit={step === 1 ? handleSubmitFirstForm : handleSubmitSecondForm}
        >
          {step === 1 && (
            <EnterMailSection value={email} onChange={handleEmailInputChange} />
          )}
          {step === 2 && (
            <EnterCodeSection
              value={code}
              error={error}
              onChange={handleCodeInputChange}
            />
          )}
        </Form>
      </aside>
      {labels && (
        <p className={classes.SignIn__copyrights}>
          {findLabel('copyrights', labels)}
        </p>
      )}
    </div>
  )
};

export default SignIn;
