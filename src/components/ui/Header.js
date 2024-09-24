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

import { Link } from "react-router-dom";

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
  React.useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/services" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/theRevolution" && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === "/aboutUs" && value !== 3) {
      setValue(3);
    } else if (window.location.pathname === "/contactUs" && value !== 4) {
      setValue(4);
    } else if (window.location.pathname === "/estimate" && value !== 5) {
      setValue(5);
    }
  }, [value]);
  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              style={{ padding: 0 }}
              onClick={() => setValue(0)}
              disableRipple
            >
              <Logo src={logo} alt="company logo" />
            </Button>
            <StyledTabs
              value={value}
              onChange={handleChange}
              textColor="secondary"
            >
              <StyleTab label="Home" component={Link} to="/" />
              <StyleTab label="Services" component={Link} to="/services" />
              <StyleTab
                label="The Revolution"
                component={Link}
                to="/theRevolution"
              />
              <StyleTab label="About Us" component={Link} to="/aboutUs" />
              <StyleTab label="Contact Us" component={Link} to="/contactUs" />
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
