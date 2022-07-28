import { ReactComponent as CrossIcon } from "../../assets/icons/cross.svg"
import {ReactComponent as ClockIcon} from "../../assets/icons/clock.svg"
import { useState } from 'react'
import classes from "./TimeField.module.scss"
import { Select } from "@mantine/core"
import { time } from "../../mockData"
import { patchUserCrmProfileWorklogs } from "../../api"
import { useSelector, useDispatch } from 'react-redux'
import { changeWorklogs } from "../../redux/actions"

const TimeField = ({ label, width, item, handleDeleteButtonClick }) => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const [fromTime, setFromTime] = useState(item ? item.fromTime : '00:00')
  const [toTime, setToTime] = useState(item ? item.toTime : '00:00')

  const handleBlurFromInput = () => {
    patchUserCrmProfileWorklogs({
      token: user.token,
      path: 'fromTime',
      value: fromTime,
      id: item.id
    }).then(() => dispatch(changeWorklogs({path: 'fromTime', value: fromTime, id: item.id})))
  }


  const handleBlurToInput = () => {
    patchUserCrmProfileWorklogs({
      token: user.token,
      path: 'toTime',
      value: toTime,
      id: item.id
    }).then(() =>
      dispatch(changeWorklogs({ path: 'toTime', value: toTime, id: item.id }))
    )
  }

  return (
    <div
      style={{ width: width ? width : '100%' }}
      className={classes.TimeField}
    >
      <p className={classes.TimeField__label}>{label}</p>
      <div className={classes.TimeField__content}>
        <div className={classes.TimeField__wrapper}>
          <Select
            onBlur={handleBlurFromInput}
            value={fromTime}
            onChange={setFromTime}
            data={time}
            classNames={{
              rightSection: classes.TimeField__wrapper_rightSection,
              input: classes.TimeField__wrapper_input,
              dropdown: classes.TimeField__wrapper_dropdown,
              item: classes.TimeField__wrapper_item
            }}
          />
          <span>-</span>
          <Select
            onBlur={handleBlurToInput}
            value={toTime}
            data={time}
            onChange={setToTime}
            classNames={{
              rightSection: classes.TimeField__wrapper_rightSection,
              input: classes.TimeField__wrapper_input,
              dropdown: classes.TimeField__wrapper_dropdown,
              item: classes.TimeField__wrapper_item
            }}
          />
        </div>
        <div className={classes.TimeField__wrapper}>
          <button
            className={classes.TimeField__wrapper_button}
            onClick={() => handleDeleteButtonClick(item.id)}
          >
            <CrossIcon />
          </button>
          <ClockIcon />
        </div>
      </div>
    </div>
  )
}

export default TimeField

