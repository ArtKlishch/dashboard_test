import { ReactComponent as TickIcon } from "../../assets/icons/tick.svg";
import { ReactComponent as ClockIcon } from "../../assets/icons/clock.svg";
import { forwardRef, useState } from "react";
import classes from "./CreateTimeField.module.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { createUserCrmProfileWorklogs } from "../../api";
import { useSelector, useDispatch } from "react-redux";
import { addWorklog } from "../../redux/actions";
import { format } from "date-fns";
import { timeValidate } from "../../utils";

const CreateTimeField = ({ label, width, dayOfWeek, setCreate }) => {
  const userInfo = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [fromTime, setFromTime] = useState(null);
  const [toTime, setToTime] = useState(null);
  const [isTimeValid, setIsTimeValid] = useState(null);

  const handleCreateButtonClick = () => {
    if (fromTime && toTime) {
      const isValidTimeError = timeValidate(fromTime, toTime, dayOfWeek);
      if (isValidTimeError) {
        setIsTimeValid(isValidTimeError);
        return;
      }
      createUserCrmProfileWorklogs({
        token: user.token,
        dayOfWeek: dayOfWeek,
        fromTime: format(fromTime, "HH:mm"),
        toTime: format(toTime, "HH:mm"),
        userCrmProfileID: userInfo.appUserID,
      }).then((res) => {
        setCreate((prevState) => !prevState);
        dispatch(addWorklog(res));
      });
    }
  };

  const Input = forwardRef(
    ({ onChange, placeholder, value, id, onClick }, ref) => (
      <input
        ref={ref}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        id={id}
        onClick={onClick}
        className={classes.TimeField__wrapper_input}
      />
    )
  );

  return (
    <label
      style={{ width: width ? width : "100%" }}
      className={classes.TimeField}
    >
      {label}
      <div className={classes.TimeField__content}>
        <div className={classes.TimeField__wrapper}>
          <DatePicker
            selected={fromTime}
            onChange={(date) => {
              setFromTime(date);
              setIsTimeValid(null);
            }}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            timeFormat="HH:mm"
            dateFormat="HH:mm"
            filterPassedTime
            customInput={<Input />}
          />
          <span>-</span>
          <DatePicker
            selected={toTime}
            onChange={(date) => {
              setToTime(date);
              setIsTimeValid(null);
            }}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            timeFormat="HH:mm"
            dateFormat="HH:mm"
            filterPassedTime
            customInput={<Input />}
          />
        </div>
        <div className={classes.TimeField__wrapper}>
          <button
            className={classes.TimeField__wrapper_button}
            onClick={handleCreateButtonClick}
          >
            <TickIcon />
          </button>
          <ClockIcon />
        </div>
        {isTimeValid && (
          <div className={classes.TimeField__content_errortext}>
            {isTimeValid}
          </div>
        )}
      </div>
    </label>
  );
};

export default CreateTimeField;
