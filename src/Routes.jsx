import React from "react";
import {
  Navigate,
  Routes,
  Route,
  useParams,
  useLocation,
  Link,
  useNavigate,
} from "react-router-dom";

import AuthedLayout from "./layouts/authed/AuthedLayout";
import Home from "./view/viewer/Home/Home";
import Login from "./view/auth/login/Login";
import Signup from "./view/auth/signup/Signup";
import Shop from "./view/viewer/Shop/Shop";
import Services from "./view/viewer/Services/Services";
import Team from "./view/viewer/Team/Team";

function Index() {
  return (
    <Routes>
      <Route element={<AuthedLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
      </Route>
    </Routes>
  );
}

export default Index;
