import TimeField from "../../../../components/TimeField"
import { ReactComponent as PlusIcon } from "../../../../assets/icons/plus.svg"
import {daysOfWeek} from "../../../../mockData"
import classes from "./Weekdays.module.scss"
import { useDispatch, useSelector } from "react-redux"
import { findLabel } from "../../../../utils"
import { createUserCrmProfileWorklogs, deteleUserCrmProfileWorklogs } from "../../../../api"
import { addWorklog, deleteWorklogs } from "../../../../redux/actions"

const Weekdays = ({ title, worklogs }) => {
  const dispatch = useDispatch()
  const userInfo = useSelector(state => state.userInfo)
  const labels = useSelector(state => state.labels)
  const user = useSelector((state) => state.user)
  
  const handleCreateButtonClick = () => {
    createUserCrmProfileWorklogs({
      token: user.token,
      dayOfWeek: Number.parseInt(daysOfWeek.indexOf(title)),
      fromTime: '09:00',
      toTime: '09:00',
      userCrmProfileID: userInfo.appUserID
    }).then(res => dispatch(addWorklog(res)))
  }

  const handleDeleteButtonClick = (id) => {
    deteleUserCrmProfileWorklogs({ id, token: user.token }).then((res) =>
      dispatch(deleteWorklogs(res))
    )
  }

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
                label={findLabel('start-end-time', labels)}
                width="223px"
                item={item}
                key={item.id}
                handleDeleteButtonClick={handleDeleteButtonClick}
              />
            )
          }
          return null
        })}
      </div>
      <button
        className={classes.Weekdays__addButton}
        onClick={handleCreateButtonClick}
      >
        <PlusIcon />
      </button>
    </div>
  )
}

export default Weekdays