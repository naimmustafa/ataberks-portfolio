import s from "./Switch.module.css";

const Switch = ({ children, selected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`${s.container}${selected ? ` ${s.selected}` : ""}`}
    >
      {children}
    </div>
  );
};

export default Switch;
