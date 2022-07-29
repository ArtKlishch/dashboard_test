import TimeField from "../../../../components/TimeField"
import { ReactComponent as PlusIcon } from "../../../../assets/icons/plus.svg"
import {daysOfWeek} from "../../../../mockData"
import classes from "./Weekdays.module.scss"
import { useDispatch, useSelector } from "react-redux"
import { findLabel } from "../../../../utils"
import { deteleUserCrmProfileWorklogs } from "../../../../api"
import { deleteWorklogs } from "../../../../redux/actions"
import { useState } from "react"
import CreateTimeField from "../../../../components/CreateTimeField"

const Weekdays = ({ title, worklogs }) => {
  const dispatch = useDispatch()
  const labels = useSelector(state => state.labels)
  const user = useSelector((state) => state.user)
  const [create, setCreate] = useState(false)

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
        {create && (
          <CreateTimeField
            label={findLabel('start-end-time', labels)}
            width="223px"
            dayOfWeek={Number.parseFloat(daysOfWeek.indexOf(title))}
            setCreate={setCreate}
          />
        )}
      </div>
      <button
        className={classes.Weekdays__addButton}
        onClick={() => setCreate((prevState) => !prevState)}
      >
        <PlusIcon />
      </button>
    </div>
  )
}

export default Weekdays