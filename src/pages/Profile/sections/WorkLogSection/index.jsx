import { useEffect, useState } from "react"
import Weekdays from "../../components/Weekdays"
import classes from "./WorkLogSection.module.scss"
import { getUserCrmProfileWorklogs } from "../../../../api"
import { useSelector } from 'react-redux'
import {daysOfWeek} from '../../../../mockData'

const WorkLogSection = () => {
  const user = useSelector(state => state.user)
  const [worklogs, setWorklogs] = useState([])

  useEffect(() => {
    getUserCrmProfileWorklogs(user.token).then((res) => setWorklogs(res.value))
  }, [user.token])

  return (
    <div className={classes.WorkLogSection}>
      <h4 className={classes.WorkLogSection__title}>Work logs</h4>
      <div className={classes.WorkLogSection__container}>
        {daysOfWeek.map((day) => (
          <Weekdays title={day} worklogs={worklogs} key={day}/>
        ))}
      </div>
    </div>
  )
}

export default WorkLogSection