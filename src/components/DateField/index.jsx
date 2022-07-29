import DatePicker from 'react-datepicker'
import { forwardRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { patchUserCrmProfile } from '../../api'
import { ReactComponent as CalendarIcon } from '../../assets/icons/calendar.svg'
import { changeUserInfo } from '../../redux/actions'
import classes from './DateField.module.scss'
const DateField = ({
  label,
  placeholder,
  defaultValue,
  width,
  path,
  userId
}) => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const [value, setValue] = useState(
    defaultValue ? new Date(defaultValue) : null
  )

  const handleInputChange = (value) => {
    patchUserCrmProfile({ path, value, token: user.token, userId }).then(() =>
      dispatch(changeUserInfo({ path, value: value.toISOString() }))
    )
  }

  const Input = forwardRef(
    ({ onChange, placeholder, value, id, onClick }, ref) => (
      <input
        ref={ref}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        id={id}
        onClick={onClick}
        className={classes.DateField__input}
      />
    )
  )

  return (
    <label
      style={{ width: width ? width : '100%' }}
      className={classes.DateField}
    >
      {label}
      <div className={classes.DateField__wrapper}>
        <DatePicker
          selected={value}
          onChange={(date) => {
            setValue(date)
            handleInputChange(date)
          }}
          maxDate={new Date()}
          placeholder={placeholder}
          showDisabledMonthNavigation
          customInput={<Input />}
          dateFormat="d.MM.yyyy"
        />
        <div className={classes.DateField__wrapper_icon}>
          <CalendarIcon />
        </div>
      </div>
    </label>
  )
}

export default DateField
