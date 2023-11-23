import React from "react";

// import "react-multi-carousel/lib/styles.css";

import { RocketWrapper, Img, ImgWrap } from "./RocketElements";
import Image from "next/image";
import WavesFooterSection from "../Waves";

const RocketFooterSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  const responsive = {};

  return (
    <div
      className=""
      style={{
        // position: "absolute",
        // width: "100%",
        // left: "auto",
        // right: "auto",
        // top: "0",
        // bottom: "0",
        marginTop: "320px",
        // height: "300px",
        zIndex: "100",
        // backgroundColor: "#0C1015",
      }}
    >
      <Image
        src={require("../../public/img/footerRocket.svg")}
        alt={"alt"}
        style={{
          width: "100%",
          maxHeight: "100%",
          marginTop: "-500px",
        }}
      />
      <WavesFooterSection />
    </div>
  );
};

export default RocketFooterSection;
