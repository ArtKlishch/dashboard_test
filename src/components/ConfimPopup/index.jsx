import React from "react";
import classes from "./ConfirmPopup.module.scss";
import ReactDOM from "react-dom";

const ConfirmPopup = ({ onConfirm, onCancel }) => {
  const onCancelHandler = () => onCancel();
  return ReactDOM.createPortal(
    <div className={classes.ConfirmPopup} onClick={onCancelHandler}>
      <div className={classes.ConfirmPopup__dialog}>
        <p className={classes.ConfirmPopup__dialog_text}>
          Do you want to delete the time?
        </p>
        <div className={classes.ConfirmPopup__dialog_btns}>
          <button onClick={onConfirm}>Conirm</button>
          <button onClick={onCancelHandler}>Cancel</button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ConfirmPopup;
