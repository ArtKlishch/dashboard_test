import { ReactComponent as CrossIcon } from "../../assets/icons/cross.svg"
import {ReactComponent as ClockIcon} from "../../assets/icons/clock.svg"
import { useState } from 'react'
import classes from "./TimeField.module.scss"

const TimeField = ({ label, width, item }) => {
  const [fromTime, setFromTime] = useState(item ? item.fromTime : '00:00')
  const [toTime, setToTime] = useState(item ? item.toTime : '00:00')
  
  const handleFromInputChange = (event) => {
    setFromTime(event.target.value)
  }

  const handleToInputChange = (event) => {
    setToTime(event.target.value)
  }

  return (
    <div
      style={{ width: width ? width : '100%' }}
      className={classes.TimeField}
    >
      <p className={classes.TimeField__label}>{label}</p>
      <div className={classes.TimeField__content}>
        <div className={classes.TimeField__wrapper}>
          <input
            onChange={handleFromInputChange}
            value={fromTime}
            className={classes.TimeField__wrapper_input}
          />
          <span>-</span>
          <input
            onChange={handleToInputChange}
            value={toTime}
            className={classes.TimeField__wrapper_input}
          />
        </div>
        <div className={classes.TimeField__wrapper}>
          <button className={classes.TimeField__wrapper_button}>
            <CrossIcon />
          </button>
          <ClockIcon />
        </div>
      </div>
    </div>
  )
}

export default TimeField

