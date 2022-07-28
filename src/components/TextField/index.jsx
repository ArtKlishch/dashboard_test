import React, { useState } from "react";
import classes from "./TextField.module.scss";
import { TextInput } from '@mantine/core'
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
    <div style={{ width: width ? width : '100%' }} className={inputClass}>
      <TextInput
        onBlur={handleBlurInput}
        icon={icon}
        label={label}
        placeholder={placeholder}
        value={value}
        classNames={{
          input: `${
            icon ? classes.TextField__inputWithIcon : classes.TextField__input
          }`,
          label: classes.TextField__label,
          icon: classes.TextField__icon
        }}
        onChange={handleChangeInput}
        type={type}
      />
    </div>
  )
}

export default TextField;
