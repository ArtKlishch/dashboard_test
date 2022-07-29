import classes from './EnterCodeSection.module.scss'
import { ReactComponent as CrossIcon } from '../../../../assets/icons/cross.svg'
import { ReactComponent as ErrorIcon } from '../../../../assets/icons/error.svg'
import Button from "../../../../components/Button"
import AuthCode from "react-auth-code-input"
import { useSelector } from 'react-redux'
import { findLabel } from '../../../../utils'

const EnterCodeSection = ({ error, onChange }) => {
  const labels = useSelector(state => state.labels)


  return (
    <>
      {error && (
        <div className={classes.EnterCodeSection__warning}>
          <p className={classes.EnterCodeSection__warning_text}>
            <ErrorIcon className={classes.EnterCodeSection__warning_icon} />
            {findLabel('invalid-login', labels)}
          </p>
        </div>
      )}
      <p
        className={`${classes.EnterCodeSection__description} ${
          error && classes.EnterCodeSection__description_onError
        }`}
      >
        {findLabel('code-title', labels)}
      </p>
      <div className={classes.EnterCodeSection__container}>
        <AuthCode
          onChange={onChange}
          inputClassName={classes.EnterCodeSection__codeInput}
        />
        <button type="button" className={classes.EnterCodeSection__crossButton}>
          <CrossIcon />
        </button>
      </div>
      <Button
        extrastyles={classes.EnterCodeSection__btnExtraStyle}
        type="submit"
      >
        {findLabel('submit', labels)}
      </Button>
      <p className={classes.EnterCodeSection__notice}>
        If you do not receive the confirmation message within a few minutes,
        please check your Spam or Bulk E-Mail folder
      </p>
    </>
  )
}

export default EnterCodeSection