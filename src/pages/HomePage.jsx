import { useState } from "react";
import ContentDisplay from "../containers/ContentDisplay";
import TopBar from "../containers/TopBar";

// data
import { mainImagesThumbnails, uxdMainIMages } from "../assets/index";
import Footer from "../containers/Footer";
import AboutMe from "../containers/AboutMe";
import Tabs from "../containers/Tabs";

const options = ["UX/UI", "Illustrations", "Concept Art", "3D Works"];

const artSets = {
  ["Illustrations"]: [],
  ["Concept Art"]: mainImagesThumbnails,
  ["3D Works"]: [],
  ["UX/UI"]: uxdMainIMages,
};

const HomePage = () => {
  const [selectedTab, setSelectedTab] = useState(options[0]);
  return (
    <div>
      <TopBar />
      <AboutMe />
      <Tabs
        setSelectedTab={setSelectedTab}
        selectedTab={selectedTab}
        options={options}
      />
      <ContentDisplay images={artSets[selectedTab]} />
      <Footer />
    </div>
  );
};

export default HomePage;
