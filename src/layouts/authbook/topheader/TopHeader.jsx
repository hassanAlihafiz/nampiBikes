import React from "react";
import { useNavigate } from "react-router";
import { Wrapper } from "./TopHeader.styled";
import SearchBar from "../../../component/header/SearchBar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { Slide, useScrollTrigger } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";

import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import AddLocationRoundedIcon from "@mui/icons-material/AddLocationRounded";
import MapsHomeWorkRounded from "@mui/icons-material/MapsHomeWorkRounded";

function HideOnScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function TopHeader(props) {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div className="left">
        <div className="main" onClick={() => navigate("/")}>
          <IconButton>
            <MapsHomeWorkRounded color="primary" sx={{ fontSize: 40 }} />
          </IconButton>
        </div>
      </div>
    </Wrapper>
  );
}

export default TopHeader;
