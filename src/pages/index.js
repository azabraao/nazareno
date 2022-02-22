import React, { memo } from "react";

import { Navbar, Footer } from "molecules";
import { Hero } from "atoms";
import {
  Contact,
  Donate,
  SocialProjects,
  Ministries,
  AboutUs,
  PageHeader,
  Schedule,
} from "organisms";
import { ModalProvider } from "contexts/Modal";

const IndexPage = () => {
  return (
    <ModalProvider>
      <Navbar />
      <PageHeader />
      <AboutUs />
      <Hero content="Uma família para pertencer" />
      <Ministries />
      <Schedule />
      <SocialProjects />
      <Donate />
      <Contact />
      <Footer />
    </ModalProvider>
  );
};

export default memo(IndexPage);
