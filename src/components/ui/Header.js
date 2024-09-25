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
  useTheme,
  useMediaQuery,
  SwipeableDrawer,
  IconButton,
  List,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
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
  marginBottom: "3em",
  [theme.breakpoints.down("md")]: {
    marginBottom: "2em",
  },
  [theme.breakpoints.down("xs")]: {
    height: "1.25em",
  },
}));
const Logo = styled("img")(({ theme }) => ({
  height: "5em",
  width: "auto",
  cursor: "pointer",
  [theme.breakpoints.down("md")]: {
    height: "4.5em",
  },
  [theme.breakpoints.down("xs")]: {
    height: "3em",
  },
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
    color: "#FF5733",
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

const StyledIconButton = styled(IconButton)(({ thems }) => ({
  marginLeft: "auto",
}));
const StyledIcon = styled(MenuIcon)(({ theme }) => ({
  height: "40px",
  width: "40px",
}));
function Header(Props) {
  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };
  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(i);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
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

  const tabs = (
    <>
      <StyledTabs value={value} onChange={handleChange} textColor="secondary">
        <StyleTab label="Home" component={Link} to="/" />
        <StyleTab
          label="Services"
          component={Link}
          to="/services"
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup={anchorEl ? "true" : undefined}
          onMouseOver={(e) => handleClick(e)}
        />
        <StyleTab label="The Revolution" component={Link} to="/theRevolution" />
        <StyleTab label="About Us" component={Link} to="/aboutUs" />
        <StyleTab label="Contact Us" component={Link} to="/contactUs" />
      </StyledTabs>
      <StyledButton variant="contained" color="secondary">
        Free Estimate
      </StyledButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
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
            {console.log("selectedIndex:", selectedIndex, "value:", value)}
          </StyledMenuItem>
        ))}
      </Menu>
    </>
  );
  const drawer = (
    <>
      <SwipeableDrawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        <List disablePadding>
          <ListItemButton
            onClick={() => setOpenDrawer(false)}
            divider
            component={Link}
            to="/"
          >
            <ListItemText disableTypography>Home</ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => setOpenDrawer(false)}
            divider
            component={Link}
            to="/services"
          >
            <ListItemText disableTypography>Services</ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => setOpenDrawer(false)}
            divider
            component={Link}
            to="/theRevolution"
          >
            <ListItemText disableTypography>The Revolution</ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => setOpenDrawer(false)}
            divider
            component={Link}
            to="/aboutUs"
          >
            <ListItemText disableTypography>About Us</ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => setOpenDrawer(false)}
            divider
            component={Link}
            to="/contactUs"
          >
            <ListItemText disableTypography>Contact Us</ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => setOpenDrawer(false)}
            divider
            component={Link}
            to="/estimate"
          >
            <ListItemText disableTypography>Free Estimate</ListItemText>
          </ListItemButton>
        </List>
      </SwipeableDrawer>
      <StyledIconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <StyledIcon />
      </StyledIconButton>
    </>
  );
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
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <ToolbarMargin />
    </>
  );
}

export default Header;
