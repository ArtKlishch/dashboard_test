import classes from './EnterCodeSection.module.scss'
import { ReactComponent as CrossIcon } from '../../../../assets/icons/cross.svg'
import { ReactComponent as ErrorIcon } from '../../../../assets/icons/error.svg'
import Button from "../../../../components/Button"
import AuthCode from "react-auth-code-input"

const EnterCodeSection = ({error, onChange}) => {


  return (
    <>
      {error && (
        <div className={classes.EnterCodeSection__warning}>
          <p className={classes.EnterCodeSection__warning_text}>
            <ErrorIcon className={classes.EnterCodeSection__warning_icon} />
            {error}
          </p>
        </div>
      )}
      <p
        className={`${classes.EnterCodeSection__description} ${
          error && classes.EnterCodeSection__description_onError
        }`}
      >
        To finalize your verification, please enter the code that has been sent
        to your email address / SMS
      </p>
      <div className={classes.EnterCodeSection__container}>
        <AuthCode
          onChange={onChange}
          inputClassName={classes.EnterCodeSection__codeInput}
          // containerClassName={classes.SignInForm__codeContainer}
          // containerClassName={{}}
        />
        <button type="button" className={classes.EnterCodeSection__crossButton}>
          <CrossIcon />
        </button>
      </div>
      <Button
        extrastyles={classes.EnterCodeSection__btnExtraStyle}
        type="submit"
      >
        Submit
      </Button>
      <p className={classes.EnterCodeSection__notice}>
        If you do not receive the confirmation message within a few minutes,
        please check your Spam or Bulk E-Mail folder
      </p>
    </>
  )
}

export default EnterCodeSection