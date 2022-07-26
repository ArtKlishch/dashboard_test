import classes from "./CodeField.module.scss";
import { ReactComponent as ResetBtn } from "../../assets/icons/cross_icon1.svg";

const CodeField = ({ onChange, value }) => {
  return (
    <div className={classes.CodeField}>
      <h5 className={classes.CodeField__subtitle}>
        To finalize your verification, please enter the code, that has been sent
        to your email address / SNS
      </h5>
      <section className={classes.CodeField__fieldwrapper}>
        <div className={classes.CodeField__fieldwrapper_fieldblock}>
          <div className={classes.fieldinputwrap}>
            <input
              className={classes.fieldinputwrap__field}
              maxLength={6}
              onChange={onChange}
              value={value}
            />
          </div>
          <div className={classes.CodeField__fieldwrapper_underscores}>
            {Array(6)
              .fill(null)
              .map((_, index) => {
                const isFilled = value.length && index + 1 <= value.length;
                return (
                  <span
                    key={index}
                    className={`${classes.item} ${isFilled && classes.filled}`}
                  />
                );
              })}
          </div>
        </div>
        <ResetBtn className={classes.CodeField__fieldwrapper_resetBtn} />
      </section>
    </div>
  );
};

export default CodeField;
