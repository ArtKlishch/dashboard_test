import { useEffect } from "react"
import classes from './EnterMailSection.module.scss'
import Button from "../../../../components/Button"
import TextField from "../../../../components/TextFieldForm"
import { useDispatch } from 'react-redux'
import { setGlobalParameters } from "../../../../redux/actions"
import { getGlobalParameters } from "../../../../api"

const EnterMailSection = ({ value, onChange }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    getGlobalParameters().then((res) =>
      dispatch(setGlobalParameters(res.value[0]))
    )
  }, [dispatch])

  return (
    <>
      <div>
        <TextField
          label="Enter your email"
          value={value}
          onChange={onChange}
          extrastyles={classes.EnterMailSection__inputExtraStyle}
        />
      </div>
      <Button
        extrastyles={classes.EnterMailSection__btnExtraStyle}
        type="submit"
      >
        Submit
      </Button>
    </>
  )
}

export default EnterMailSection