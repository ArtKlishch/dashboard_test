import React from "react";
import classes from "./TextField.module.scss";

const TextField = ({ label, name, type = "text", value, onChange }) => {
  return (
    <div className={classes.TextField}>
      <label className={classes.TextField__label} htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        className={classes.TextField__field}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextField;
