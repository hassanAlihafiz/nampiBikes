import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import BaseLayout from "../base/BaseLayout";
import TopHeader from "./topheader/TopHeader";
import Footer from "./footer/Footer";
import CopyrightFooter from "./footer/CopyrightFooter";

function AuthedLayout() {
  const location = useLocation();
  return (
    <BaseLayout>
      <TopHeader />
      <Outlet />
      {location?.pathname.includes("login") ||
      location?.pathname.includes("signup") ? null : (
        <>
          {/* <Footer /> */}
          <CopyrightFooter />
        </>
      )}
    </BaseLayout>
  );
}

export default AuthedLayout;
