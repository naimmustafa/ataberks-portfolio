import s from "./Title.module.css";

const sizeMap = {
  s: 12,
  m: 18,
  l: 20,
  xl: 40,
};

const typeMap = {
  primary: { fontWeight: "bold" },
  primary: { fontWeight: "normal" },
};

const Title = ({ children, size, type, className }) => {
  return (
    <div
      className={`${s.title}${className ? ` ${className}` : ""}`}
      style={{ fontSize: sizeMap[size], ...typeMap[type] }}
    >
      {children}
    </div>
  );
};

export default Title;
