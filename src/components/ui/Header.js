import * as React from "react";
import {
  Toolbar,
  AppBar,
  useScrollTrigger,
  Tabs,
  Tab,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";

import logo from "../../assets/logo.svg";
import { purple } from "@mui/material/colors";
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
const StyleTab = styled(Tab)(({ theme, selected }) => ({
  ...theme.typography.Tab,
  color: "white",
  minWidth: 10,
  marginLeft: "25px",
  /*   borderBottom: selected ? "2px solid white" : "none",
  transition: "color 0.3s, border-bottom 0.3s", // Smooth transition for color and underline
  "&:active": {
    color: "white", // Change color on hover
  }, */
}));
const StyledButton = styled(Button)(({ theme }) => ({
  ...theme.typography.estimate,
  borderRadius: "50px",
  marginLeft: "50px",
  marginRight: "25px",
  height: "45px",
}));

function Header(Props) {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters>
            <Logo src={logo} alt="company logo" />
            <StyledTabs
              value={value}
              onChange={handleChange}
              textColor="secondary"
            >
              <StyleTab label="Home" />
              <StyleTab label="Services" />
              <StyleTab label="The Revolution" />
              <StyleTab label="About Us" />
              <StyleTab label="Contact Us" />
            </StyledTabs>
            <StyledButton variant="contained" color="secondary">
              Free Estimate
            </StyledButton>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <ToolbarMargin />
    </>
  );
}

export default Header;
