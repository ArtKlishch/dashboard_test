import TimeField from "../../../../components/TimeField"
import { ReactComponent as PlusIcon } from "../../../../assets/icons/plus.svg"
import {daysOfWeek} from "../../../../mockData"
import classes from "./Weekdays.module.scss"

const Weekdays = ({ title, worklogs }) => {
  return (
    <div className={classes.Weekdays}>
      <div className={classes.Weekdays__wrapper}>
        <p className={classes.Weekdays__wrapper_title}>{title}</p>
      </div>
      <div className={classes.Weekdays__container}>
        {worklogs.map((item) => {
          if (title === daysOfWeek[item.dayOfWeek]) {
            return (
              <TimeField
                label="start/ end time"
                width="223px"
                item={item}
                key={item.id}
              />
            )
          }
          return null
        })}
      </div>
      <button className={classes.Weekdays__addButton}>
        <PlusIcon />
      </button>
    </div>
  )
}

export default Weekdays