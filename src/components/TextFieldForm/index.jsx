import classes from './TextFieldForm.module.scss'
const TextField = ({
  label,
  placeholder,
  value,
  onChange,
  width,
  extrastyles,
  required,
  type
}) => {
  const inputClass = `${classes.TextField} ${extrastyles}`
  return (
    <label style={{ width: width ? width : '100%' }} className={inputClass}>
      {label}

      <input
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={classes.TextField__input}
      />
    </label>
  )
}

export default TextField
