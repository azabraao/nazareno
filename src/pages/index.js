import React, { memo } from "react";

import { Navbar } from "molecules";
import { Hero } from "atoms";
import { Ministries, AboutUs, PageHeader, Schedule } from "organisms";
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
    </ModalProvider>
  );
};

export default memo(IndexPage);
