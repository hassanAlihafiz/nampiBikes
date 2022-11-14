import React from "react";
import { useNavigate } from "react-router";
import { Wrapper } from "./TopHeader.styled";
// import SearchBar from "../../../component/header/SearchBar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { Slide, useMediaQuery, useScrollTrigger } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Logo from "../../../assests/svg/logo.png";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import AddLocationRoundedIcon from "@mui/icons-material/AddLocationRounded";
import MapsHomeWorkRounded from "@mui/icons-material/MapsHomeWorkRounded";
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";
import PedalBikeRoundedIcon from "@mui/icons-material/PedalBikeRounded";
import Groups2RoundedIcon from "@mui/icons-material/Groups2Rounded";

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
  const matches = useMediaQuery("(max-width:950px)");

  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <HideOnScroll {...props}>
      {/* <Slide direction="down" in unmountOnExit timeout={400}> */}
      <Wrapper>
        <div className="left">
          <div className="main" onClick={() => navigate("/")}>
            <IconButton>
              <img src={Logo} />
              <p style={{ alignSelf: "center" }}>Nampi Bikes</p>
            </IconButton>
          </div>
        </div>

        <div className="center">
          <div className="main">
            <Button
              className="btn"
              size="large"
              onClick={() => navigate("/shop")}
            >
              Shop
            </Button>
            <Button
              className="btn"
              size="large"
              onClick={() => navigate("/services")}
            >
              Services
            </Button>
            <Button
              className="btn"
              size="large"
              onClick={() => navigate("/team")}
            >
              Meet the team
            </Button>
          </div>
        </div>
        <div className="right">
          <div className="main">
            <div>
              <Button
                className="btn"
                size="large"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
            </div>
            <IconButton
              className="icon-button"
              size="small"
              color="primary"
              onClick={handleClick}
              style={{ marginLeft: " 10px" }}
            >
              <AccountCircleRoundedIcon />
            </IconButton>
          </div>
        </div>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              borderRadius: "10px",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={() => navigate("/login")}>
            <ListItemIcon>
              <LoginRoundedIcon fontSize="small" />
            </ListItemIcon>
            Login
          </MenuItem>
          <MenuItem onClick={() => navigate("/signup")}>
            <ListItemIcon>
              <PersonAddAltRoundedIcon fontSize="small" />
            </ListItemIcon>
            Signup
          </MenuItem>
          <Divider />
          {matches ? (
            <>
              <MenuItem onClick={() => navigate("/shop")}>
                <ListItemIcon>
                  <ShoppingBagRoundedIcon fontSize="small" />
                </ListItemIcon>
                Shop
              </MenuItem>

              <MenuItem onClick={() => navigate("/services")}>
                <ListItemIcon>
                  <PedalBikeRoundedIcon fontSize="small" />
                </ListItemIcon>
                Services
              </MenuItem>

              <MenuItem onClick={() => navigate("/team")}>
                <ListItemIcon>
                  <Groups2RoundedIcon fontSize="small" />
                </ListItemIcon>
                Meet the team
              </MenuItem>
              <Divider />
            </>
          ) : null}
          <MenuItem>
            <ListItemIcon>
              <HelpRoundedIcon fontSize="small" />
            </ListItemIcon>
            Help
          </MenuItem>
        </Menu>
      </Wrapper>

      {/* </Slide> */}
    </HideOnScroll>
  );
}

export default TopHeader;
