import { useState } from "react";
import Modal from "react-modal";
import ContentDisplay from "../containers/ContentDisplay";
import TopBar from "../containers/TopBar";

// data
import {
  conceptImages,
  uxdMainIMages,
  illMainImages,
  threedMainImages,
} from "../assets/index";
import Footer from "../containers/Footer";
import AboutMe from "../containers/AboutMe";
import Tabs from "../containers/Tabs";

import s from "./HomePage.module.css";
import Switch from "../components/Switch";

const options = ["UX/UI", "Illustrations", "Concept Art", "3D Works"];

const artSets = {
  ["Illustrations"]: illMainImages,
  ["Concept Art"]: conceptImages,
  ["3D Works"]: threedMainImages,
  ["UX/UI"]: uxdMainIMages,
};

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(38, 38, 38, 0.5)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgb(28, 28, 28)",
    border: "none",
  },
};

const HomePage = () => {
  const [selectedTab, setSelectedTab] = useState(options[0]);
  const [modalIndex, setModalIndex] = useState();

  return (
    <>
      <div>
        <TopBar />
        <AboutMe />
        <Tabs
          setSelectedTab={setSelectedTab}
          selectedTab={selectedTab}
          options={options}
        />
        <ContentDisplay
          images={artSets[selectedTab]}
          setModalIndex={setModalIndex}
        />
        <Footer />

        <Modal
          isOpen={modalIndex === 0 || !!modalIndex}
          //   onAfterOpen={afterOpenModal}
          onRequestClose={() => setModalIndex(null)}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className={s.container}>
            <img
              onClick={() =>
                setModalIndex(
                  modalIndex >= artSets[selectedTab].length - 1
                    ? 0
                    : modalIndex + 1
                )
              }
              className={s.image}
              src={artSets[selectedTab]?.[modalIndex]?.image}
            />
            <div className={s.controls}>
              <Switch
                onClick={() =>
                  setModalIndex(
                    modalIndex <= 0
                      ? artSets[selectedTab].length - 1
                      : modalIndex - 1
                  )
                }
              >
                {"<"}
              </Switch>
              <Switch
                onClick={() =>
                  setModalIndex(
                    modalIndex >= artSets[selectedTab].length - 1
                      ? 0
                      : modalIndex + 1
                  )
                }
              >
                {">"}
              </Switch>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default HomePage;
