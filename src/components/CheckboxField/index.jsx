import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { patchUserCrmProfile } from "../../api"
import { changeUserInfo } from "../../redux/actions"
import classes from "./CheckboxField.module.scss"

const CheckboxField = ({ label, defaultValue, path, userId }) => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const [value, setValue] = useState(defaultValue)

  const handleChangeInput = () => {
    setValue(prevState => {
      patchUserCrmProfile({ path, value: !prevState, token: user.token, userId }).then(() =>
        dispatch(changeUserInfo({ path, value: !prevState }))
      )
      return !prevState
    })
  }

  return (
    // <Checkbox
    //   label={label}
    //   onChange={handleChangeInput}
    //   checked={value}
    //   classNames={{
    //     input: classes.CheckboxField__input,
    //     label: classes.CheckboxField__label
    //   }}
    // />
    <label className={classes.CheckboxField__label}>
      <input
        type="checkbox"
        checked={value}
        className={classes.CheckboxField__input}
        onChange={handleChangeInput}
      />
      {label}
    </label>
  )
}

export default CheckboxField