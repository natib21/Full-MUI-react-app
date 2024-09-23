import * as React from "react";
import { Toolbar, AppBar, useScrollTrigger, Tabs, Tab } from "@mui/material";
import { styled } from "@mui/system";

import logo from "../../assets/logo.svg";
function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return children
    ? React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
      })
    : null;
}
const ToolbarMargin = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
  marginBottom: "2em",
}));
const Logo = styled("img")(({ theme }) => ({
  height: "5em",
  width: "auto",
  cursor: "pointer",
}));
const StyledTabs = styled(Tabs)(({ theme }) => ({
  marginLeft: "auto",
}));
const StyleTab = styled(Tab)(({ theme }) => ({
  ...theme.typography.Tab,
  color: "white",
  minWidth: 10,
  marginLeft: "25px",
}));
function Header(Props) {
  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters>
            <Logo src={logo} alt="company logo" />
            <StyledTabs>
              <StyleTab label="Home" />
              <StyleTab label="Services" />
              <StyleTab label="The Revolution" />
              <StyleTab label="About Us" />
              <StyleTab label="Contact Us" />
            </StyledTabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <ToolbarMargin />
    </>
  );
}

export default Header;
