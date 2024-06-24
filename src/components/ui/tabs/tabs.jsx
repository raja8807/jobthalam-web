import React from "react";
import Tab from "./tab/tab";
import styles from "./tabs.module.scss";

const Tabs = ({ tabs = [], currentTab, setCurrentTab=()=>{} }) => {
  return (
    <div className={styles.tabs}>
      {tabs.map((tab) => {
        return (
          <Tab
            key={tab.title}
            tab={tab}
            setCurrentTab={setCurrentTab}
            isActive={currentTab?.title === tab?.title}
          />
        );
      })}
    </div>
  );
};

export default Tabs;
