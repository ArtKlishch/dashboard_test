import { DatePicker } from "@mantine/dates"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { patchUserCrmProfile } from "../../api"
import { ReactComponent as CalendarIcon } from "../../assets/icons/calendar.svg"
import { changeUserInfo } from "../../redux/actions"
import classes from "./DateField.module.scss"
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
    defaultValue ? new Date(defaultValue) : ''
  )

  const handleBlurInput = () => {
    patchUserCrmProfile({ path, value, token: user.token, userId }).then(() =>
      dispatch(changeUserInfo({ path, value: value.toISOString() }))
    )
  }

  return (
    <div
      style={{ width: width ? width : '100%' }}
      className={classes.DateField}
    >
      <DatePicker
        onBlur={handleBlurInput}
        onChange={(date) => setValue(new Date(date))}
        label={label}
        placeholder={placeholder}
        value={value}
        inputFormat="MM.DD.YYYY"
        rightSection={<CalendarIcon />}
        classNames={{
          input: classes.DateField__input,
          label: classes.DateField__label
        }}
      />
    </div>
  )
}

export default DateField