import { useSelector } from 'react-redux'
import { findLabel } from '../../../../utils'
import classes from './Form.module.scss'

const Form = ({ children, onSubmit }) => {
  const labels = useSelector(state => state.labels)
  return (
    <form className={classes.Form} onSubmit={onSubmit}>
      {labels && (
        <h3 className={classes.Form__title}>{findLabel('login', labels)}</h3>
      )}
      {children}
    </form>
  )
}

export default Form
