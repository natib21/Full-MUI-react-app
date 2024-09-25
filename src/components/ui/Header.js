import * as React from "react";
import {
  Toolbar,
  AppBar,
  useScrollTrigger,
  Tabs,
  Tab,
  Button,
  Menu,
  Paper,
  MenuItem,
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
  ...theme.typography.tab,
  color: "white",
  minWidth: 10,
  marginLeft: "25px",
  "& .Mui-selected": {
    color: "#FF5733", // Replace with your desired selected color
  },
}));
const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.common.blue,
  color: "white",
  borderRadius: 0,
  /* boxShadow: theme.shadows[5], */
}));
const StyledMenuItem = styled(MenuItem)(({ theme, selected }) => ({
  ...theme.typography.tab,
  opacity: 0.7,
  "&:hover": {
    opacity: 1,
  },
  color: selected ? "#ffba60" : "",
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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };
  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpen(false);
    setSelectedIndex(i);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
  };
  const menuOptions = [
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Custom Software Development",
      link: "/customSoftware",
    },
    { name: "Mobile App Development", link: "/mobileApp" },
    { name: "Websites Development", link: "/websites" },
  ];
  React.useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        if (value !== 0) {
          setValue(0);
        }
        break;
      case "/services":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(0);
        }
        break;
      case "/theRevolution":
        if (value !== 2) {
          setValue(2);
        }
        break;
      case "/aboutUs":
        if (value !== 3) {
          setValue(3);
        }
        break;
      case "/contactUs":
        if (value !== 4) {
          setValue(4);
        }
        break;
      case "/estimate":
        if (value !== 5) {
          setValue(5);
        }
        break;
      case "/customSoftware":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(1);
        }
        break;
      case "/mobileApp":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(2);
        }
        break;
      case "/websites":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(3);
        }
        break;
      default:
        break;
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
              <StyleTab
                label="Services"
                component={Link}
                to="/services"
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup={anchorEl ? "true" : undefined}
                onMouseOver={(e) => handleClick(e)}
              />
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
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
              PaperProps={{
                component: StyledPaper,
              }}
              elevation={0}
            >
              {menuOptions.map((item, index) => (
                <StyledMenuItem
                  key={index}
                  component={Link}
                  to={item.link}
                  onClick={(e) => {
                    handleMenuItemClick(e, index);
                    setValue(1);
                    handleClose();
                  }}
                  selected={index === selectedIndex && value === 1}
                >
                  {item.name}
                  {console.log(
                    "selectedIndex:",
                    selectedIndex,
                    "value:",
                    value
                  )}
                </StyledMenuItem>
              ))}
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <ToolbarMargin />
    </>
  );
}

export default Header;
