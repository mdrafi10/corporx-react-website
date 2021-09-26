import React from "react";
import AboutUs from "./AboutUs/AboutUs";
import AppSection from "./AppSection/AppSection";
import ContuctUs from "./ContuctUs/ContuctUs";
import LgSection from "./LgSection/LgSection";
import NewsSection from "./NewsSection/NewsSection";
import PromoSection from "./PromoSection/PromoSection";
import ProvideSec from "./ProvidorSec/ProvideSec";
import QulityWork from "./QulityWork/QulityWork";
import SectionHeader from "./SectionHeader/SectionHeader";
import TeamSection from "./TeamSection/TeamSection";

const MainBody = () => {
  return (
    <div className="main-body">
      <SectionHeader />
      <PromoSection />
      <LgSection />
      <ProvideSec />
      <AppSection />
      <QulityWork />
      <NewsSection />
      <TeamSection />
      <AboutUs />
      <ContuctUs />
    </div>
  );
};

export default MainBody;
