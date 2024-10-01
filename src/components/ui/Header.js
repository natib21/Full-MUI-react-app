import * as React from "react";
import { useMemo } from "react";
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
const StyleSwipeableDrawer = styled(SwipeableDrawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    backgroundColor: theme.palette.common.blue, // Replace 'yourColor' with the desired color
  },
}));
const StyledListItemText = styled(ListItemText)(({ theme, selected }) => ({
  ...theme.typography.tab,
  color: "white",
  opacity: selected ? 1 : 0.7,
}));

function Header({ value, setValue, selectedIndex, setSelectedIndex }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
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
  const menuOptions = useMemo(
    () => [
      { name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0 },
      {
        name: "Custom Software Development",
        link: "/customSoftware",
        activeIndex: 1,
        selectedIndex: 1,
      },
      {
        name: "Mobile App Development",
        link: "/mobileApp",
        activeIndex: 1,
        selectedIndex: 2,
      },
      {
        name: "Websites Development",
        link: "/websites",
        activeIndex: 1,
        selectedIndex: 3,
      },
    ],
    []
  );

  // Wrap routes in useMemo
  const routes = useMemo(
    () => [
      { name: "Home", link: "/", activeIndex: 0 },
      {
        name: "Services",
        link: "/services",
        activeIndex: 1,
        ariaOwns: anchorEl ? "simple-menu" : undefined,
        ariaHasPopUp: anchorEl ? "true" : undefined,
        mouseOver: (e) => handleClick(e),
      },
      { name: "The Revolution", link: "/theRevolution", activeIndex: 2 },
      { name: "About Us", link: "/aboutUs", activeIndex: 3 },
      { name: "Contact Us", link: "/contactUs", activeIndex: 4 },
    ],
    [anchorEl]
  );
  React.useEffect(() => {
    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);

            if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
              setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        default:
          break;
      }
    });
  }, [setSelectedIndex, setValue, value, menuOptions, selectedIndex, routes]);

  const style = {
    backgroundColor: "orange", // Custom background color
    color: "black", // Custom text color
    "&:hover": {
      backgroundColor: "darkorange", // Change on hover
    },
  };
  const tabs = (
    <>
      <StyledTabs value={value} onChange={handleChange} textColor="secondary">
        {routes.map((route, index) => (
          <StyleTab
            key={index}
            component={Link}
            to={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaHasPopUp}
            onMouseOver={route.mouseOver}
          />
        ))}
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
          </StyledMenuItem>
        ))}
      </Menu>
    </>
  );
  const drawer = (
    <>
      <StyleSwipeableDrawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 250,
            position: "absolute",
          },
        }}
      >
        <ToolbarMargin />
        <List disablePadding>
          {routes.map((route, index) => (
            <ListItemButton
              key={index}
              onClick={() => {
                setOpenDrawer(false);
                setValue(route.activeIndex);
              }}
              divider
              component={Link}
              to={route.link}
            >
              <StyledListItemText
                disableTypography
                selected={value === route.activeIndex}
                sx={route.name === "estimate" ? { style } : ""}
              >
                {route.name}
              </StyledListItemText>
            </ListItemButton>
          ))}

          <ListItemButton
            onClick={() => {
              setOpenDrawer(false);
              setValue(5);
            }}
            divider
            component={Link}
            to="/estimate"
            selected={value === 5}
            sx={{
              backgroundColor: "orange", // Custom background color
              color: "black", // Custom text color
              "&:hover": {
                backgroundColor: "darkorange", // Change on hover
              },
            }}
          >
            <StyledListItemText selected={value === 5} disableTypography>
              Free Estimate
            </StyledListItemText>
          </ListItemButton>
        </List>
      </StyleSwipeableDrawer>
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
        <AppBar
          position="fixed"
          color="primary"
          sx={{ zIndex: theme.zIndex.modal + 1 }}
        >
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
