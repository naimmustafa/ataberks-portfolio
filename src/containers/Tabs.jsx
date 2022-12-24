import Switch from "../components/Switch";
import s from "./Tabs.module.css";

const Tabs = ({ setSelectedTab, selectedTab, options }) => {
  return (
    <div className={s.container}>
      {options.map((option) => (
        <Switch
          onClick={() => setSelectedTab(option)}
          selected={option === selectedTab}
          key={option}
        >
          {option}
        </Switch>
      ))}
    </div>
  );
};

export default Tabs;
