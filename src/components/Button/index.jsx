import classes from "./Button.module.scss";

const Button = ({ children, onClick, type = "button", extrastyles }) => {
  const btnClass = `${classes.Button} ${extrastyles}`;
  return (
    <button className={btnClass} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
