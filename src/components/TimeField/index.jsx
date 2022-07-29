import { ReactComponent as CrossIcon } from "../../assets/icons/cross.svg";
import { ReactComponent as ClockIcon } from "../../assets/icons/clock.svg";
import { forwardRef, useState } from "react";
import classes from "./TimeField.module.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { patchUserCrmProfileWorklogs } from "../../api";
import { useSelector, useDispatch } from "react-redux";
import { changeWorklogs } from "../../redux/actions";
import { format, parse } from "date-fns";

import ConfirmPopup from "../ConfimPopup";

const TimeField = ({ label, width, item, handleDeleteButtonClick }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [fromTime, setFromTime] = useState(
    parse(item.fromTime, "HH:mm", new Date())
  );
  const [toTime, setToTime] = useState(parse(item.toTime, "HH:mm", new Date()));
  const [isConfirmPopup, setIsConfrmPopup] = useState(false);

  const handleBlurFromInput = (value) => {
    patchUserCrmProfileWorklogs({
      token: user.token,
      path: "fromTime",
      value: format(value, "HH:mm"),
      id: item.id,
    }).then(() =>
      dispatch(
        changeWorklogs({
          path: "fromTime",
          value: format(value, "HH:mm"),
          id: item.id,
        })
      )
    );
  };

  const handleBlurToInput = (value) => {
    patchUserCrmProfileWorklogs({
      token: user.token,
      path: "toTime",
      value: format(value, "HH:mm"),
      id: item.id,
    }).then(() =>
      dispatch(
        changeWorklogs({
          path: "toTime",
          value: format(value, "HH:mm"),
          id: item.id,
        })
      )
    );
  };

  const openConfirmPopup = () => setIsConfrmPopup(true);
  const cancelDelete = () => setIsConfrmPopup(false);
  const confirmDelete = () => handleDeleteButtonClick(item.id);

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
    <>
      {isConfirmPopup && (
        <ConfirmPopup onConfirm={confirmDelete} onCancel={cancelDelete} />
      )}
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
                handleBlurFromInput(date);
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
                handleBlurToInput(date);
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
              onClick={openConfirmPopup}
            >
              <CrossIcon />
            </button>
            <ClockIcon />
          </div>
        </div>
      </label>
    </>
  );
};

export default TimeField;
