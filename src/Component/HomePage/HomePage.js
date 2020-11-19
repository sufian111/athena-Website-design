import React from "react";
import HeadSection from "./HeadSection/HeadSection";
import NavBarTop from "./NavBarTop/NavBarTop";
import RunningProject from "./RunningProjectSction/RunningProject";
import WhatWeDoSection from "./What-We-do-Section/WhatWeDoSection";

const HomePage = () => {
  return (
    <div className="container">
      <NavBarTop></NavBarTop>
      <HeadSection></HeadSection>
      <WhatWeDoSection></WhatWeDoSection>
      <RunningProject></RunningProject>
    </div>
  );
};

export default HomePage;
