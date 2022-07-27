import { DatePicker } from "@mantine/dates"
import { useState } from "react"
import { ReactComponent as CalendarIcon } from "../../assets/icons/calendar.svg"
import classes from "./DateField.module.scss"
const DateField = ({ label, placeholder, defaultValue, width, path }) => {
  const [value, setValue] = useState(defaultValue ? defaultValue : '')

  console.log(value)

  return (
    <div
      style={{ width: width ? width : '100%' }}
      className={classes.DateField}
    >
      <DatePicker
        onChange={setValue}
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