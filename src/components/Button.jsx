import s from "./Button.module.css";

const Button = ({ children, onClick, asLink }) => {
  return (
    <button className={asLink ? s.asLink : s.asButton} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
