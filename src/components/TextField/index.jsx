import React, { useState } from "react";
import classes from "./TextField.module.scss";
import { patchUserCrmProfile } from "../../api";
import {useDispatch, useSelector} from "react-redux"
import { changeUserInfo } from "../../redux/actions";

const TextField = ({
  label,
  placeholder,
  defaultValue,
  width,
  icon,
  extrastyles,
  userId,
  path,
  type
}) => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const [value, setValue] = useState(defaultValue ? defaultValue : '')

  const handleBlurInput = () => {
    const data = {
      path,
      value: type === 'number' ? Number.parseInt(value) : value,
      token: user.token,
      userId
    }

    patchUserCrmProfile(data).then(() =>
      dispatch(changeUserInfo({path, value}))
    )
  }

  const handleChangeInput = (event) => {
    setValue(event.target.value)
  }

  const inputClass = `${classes.TextField} ${extrastyles}`
  return (
    <label style={{ width: width ? width : '100%' }} className={inputClass}>
      {label}
      <div className={classes.TextField__wrapper}>
        <div className={classes.TextField__icon}>{icon}</div>
        <input
          onBlur={handleBlurInput}
          placeholder={placeholder}
          value={value}
          className={`${
            icon ? classes.TextField__inputWithIcon : classes.TextField__input
          }`}
          onChange={handleChangeInput}
          type={type}
        />
      </div>
    </label>
  )
}

export default TextField;
