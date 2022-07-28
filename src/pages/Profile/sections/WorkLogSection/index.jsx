import { useEffect } from "react"
import Weekdays from "../../components/Weekdays"
import classes from "./WorkLogSection.module.scss"
import { getUserCrmProfileWorklogs } from "../../../../api"
import { useSelector, useDispatch } from 'react-redux'
import {daysOfWeek} from '../../../../mockData'
import { findLabel } from "../../../../utils"
import { setWorklogs } from "../../../../redux/actions"

const WorkLogSection = () => {
  const dispatch = useDispatch()
  const worklogs = useSelector(state => state.worklogs)
  const labels = useSelector((state) => state.labels)
  const user = useSelector(state => state.user)

  useEffect(() => {
    if (!worklogs) {
      getUserCrmProfileWorklogs(user.token).then((res) =>
        dispatch(setWorklogs(res.value))
      )
    }
  }, [dispatch, user.token, worklogs])

  return (
    <div className={classes.WorkLogSection}>
      {labels && (
        <>
          <h4 className={classes.WorkLogSection__title}>
            {findLabel('worklogs', labels)}
          </h4>
          {worklogs && (
            <div className={classes.WorkLogSection__container}>
              {daysOfWeek.map((day) => (
                <Weekdays title={day} worklogs={worklogs} key={day} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default WorkLogSection