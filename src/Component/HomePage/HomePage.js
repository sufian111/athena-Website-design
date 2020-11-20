import React from "react";
import AchivementSection from "./AchivementSection/AchivementSection";
import FooterSection from "./FooterSection/FooterSection";
import HeadSection from "./HeadSection/HeadSection";
import NavBarTop from "./NavBarTop/NavBarTop";
import PriceSection from "./PriceSection/PriceSection";
import RunningProject from "./RunningProjectSction/RunningProject";
import SearchSection from "./SearchSection/SearchSection";
import WhatWeDoSection from "./What-We-do-Section/WhatWeDoSection";

const HomePage = () => {
  return (
    <div className="container">
      <NavBarTop></NavBarTop>
      <HeadSection></HeadSection>
      <WhatWeDoSection></WhatWeDoSection>
      <RunningProject></RunningProject>
      <AchivementSection></AchivementSection>
      <PriceSection></PriceSection>
      <SearchSection></SearchSection>
      <FooterSection></FooterSection>
    </div>
  );
};

export default HomePage;
