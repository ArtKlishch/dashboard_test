import { useEffect } from "react"
import classes from './EnterMailSection.module.scss'
import Button from "../../../../components/Button"
import TextField from "../../../../components/TextFieldForm"
import { useDispatch, useSelector } from 'react-redux'
import { setGlobalParameters, setLabels } from "../../../../redux/actions"
import { getGlobalParameters, getLabels } from "../../../../api"
import { findLabel } from "../../../../utils"

const EnterMailSection = ({ value, onChange}) => {
  const dispatch = useDispatch()
  const globalParameters = useSelector(state => state.globalParameters)
  const labels = useSelector((state) => state.labels)

  useEffect(() => {
    getGlobalParameters()
      .then((res) => dispatch(setGlobalParameters(res.value[0])))
      .catch(console.log)
  }, [dispatch])

  useEffect(() => {
    if (globalParameters) {
      getLabels(globalParameters.defaultLanguageID).then(res => dispatch(setLabels(res.value))).catch(console.log)
    }
  }, [dispatch, globalParameters])


  return labels ? (
    <>
      <div>
        <TextField
          label={findLabel('login-title', labels)}
          value={value}
          onChange={onChange}
          extrastyles={classes.EnterMailSection__inputExtraStyle}
          required
          type="email"
        />
      </div>
      <Button
        extrastyles={classes.EnterMailSection__btnExtraStyle}
        type="submit"
      >
        {findLabel('submit', labels)}
      </Button>
    </>
  ) : null
}

export default EnterMailSection