import React, { useState } from "react";
import classes from "./SignIn.module.scss";
import { ReactComponent as PlaygroundImage } from "../../assets/images/playground1.svg";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { generatePassword, loginWithCode } from '../../api'
import EnterMailSection from "./sections/EnterMailSection";
import EnterCodeSection from "./sections/EnterCodeSection"
import Form from "./layouts/Form"
import { setUser } from "../../redux/actions";

const SignIn = () => {
  const dispatch = useDispatch()
  const globalParameters = useSelector((state) => state.globalParameters)
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [error, setError] = useState(null)

  const handleSubmitFirstForm = async (event) => {
    event.preventDefault()
    try {
      const result = await generatePassword({
        email,
        languageId: globalParameters.languageId
      })
      if (result !== 'done') {
        throw new Error('400')
      }
      setError(null)
      setStep(2)
    } catch (error) {
      setError(error.message)
    }
  }

  const handleSubmitSecondForm = async (event) => {
    event.preventDefault()
    try {
      const result = await loginWithCode({
        email,
        code,
        languageId: globalParameters.languageId
      })
      if (!result.jwt) {
        throw new Error(result)
      }
      setError(null)
      dispatch(setUser(result.jwt))
    } catch (error) {
      setError(error.message)
    }
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
        {/* <SignInForm /> */}
        <Form
          onSubmit={step === 1 ? handleSubmitFirstForm : handleSubmitSecondForm}
        >
          {step === 1 && (
            <EnterMailSection value={email} onChange={handleEmailInputChange} />
          )}
          {step === 2 && (
            <EnterCodeSection value={code} error={error} onChange={handleCodeInputChange} />
          )}
        </Form>
      </aside>
    </div>
  )
};

export default SignIn;
