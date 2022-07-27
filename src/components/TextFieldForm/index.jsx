import classes from './TextFieldForm.module.scss'
import { TextInput } from '@mantine/core'
const TextField = ({
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  width,
  icon,
  extrastyles,
}) => {

  const inputClass = `${classes.TextField} ${extrastyles}`
  return (
    <div style={{ width: width ? width : '100%' }} className={inputClass}>
      <TextInput
        onBlur={onBlur}
        icon={icon}
        label={label}
        placeholder={placeholder}
        value={value }
        classNames={{
          input: `${
            icon ? classes.TextField__inputWithIcon : classes.TextField__input
          }`,
          label: classes.TextField__label,
          icon: classes.TextField__icon
        }}
        onChange={onChange}
      />
    </div>
  )
}

export default TextField
