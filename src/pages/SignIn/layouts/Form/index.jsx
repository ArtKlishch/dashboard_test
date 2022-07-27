import classes from './Form.module.scss'

const Form = ({ children, onSubmit }) => {
  return (
    <form className={classes.Form} onSubmit={onSubmit}>
      <h3 className={classes.Form__title}>Login</h3>
      {children}
    </form>
  )
}

export default Form
