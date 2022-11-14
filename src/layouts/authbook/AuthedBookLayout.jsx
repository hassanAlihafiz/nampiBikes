import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import BaseLayout from "../base/BaseLayout";
import TopHeader from "./topheader/TopHeader";
import CopyrightFooter from "./footer/CopyrightFooter";

function AuthedBookLayout() {
  

  return (
    <BaseLayout>
      <TopHeader />
      <Outlet />
      <CopyrightFooter />
    </BaseLayout>
  );
}

export default AuthedBookLayout;
