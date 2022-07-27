import React, { useState } from "react";
import classes from "./TextField.module.scss";
import { TextInput } from '@mantine/core'
import { patchUserCrmProfile } from "../../api";
import {useSelector} from "react-redux"

const TextField = ({
  label,
  placeholder,
  defaultValue,
  width,
  icon,
  extrastyles,
  userId,
  path
}) => {
  const user = useSelector(state => state.user)
  const [value, setValue] = useState(defaultValue ? defaultValue : '')

  const handleBlurInput = () => {
    patchUserCrmProfile({path, value, token: user.token, userId}).then(res => console.log(res))
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
      />
    </div>
  )
}

export default TextField;
