import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import footerAdornment from "../../assets/Footer Adornment.svg";
const StyledFooter = styled("footer")(({ theme }) => ({
  backgroundColor: theme.palette.common.blue,
  width: "100%",
  zIndex: 1302,
  position: "relative",
}));
const StyledImage = styled("img")(({ theme }) => ({
  width: "25em",
  verticalAlign: "bottom",
  [theme.breakpoints.down("md")]: {
    width: "21em",
  },
  [theme.breakpoints.down("xs")]: {
    width: "10em",
  },
}));
const StyledGridMain = styled(Grid)(({ theme }) => ({
  position: "absolute",
}));
const StyledGridMainItem = styled(Grid)(({ theme }) => ({
  margin: "3em",
}));
const StyledGridItems = styled(Grid)(({ theme }) => ({
  color: "white",
  fontFamily: "Arial",
  fontSize: "0.75rem",
  fontWeight: "bold",
  textDecoration: "none",
}));
const Footer = ({ value, setValue, selectedIndex, setSelectedIndex }) => {
  return (
    <StyledFooter>
      <StyledGridMain container justifyContent="center">
        <StyledGridMainItem item>
          <Grid container direction="column" spacing={2}>
            <StyledGridItems
              item
              component={Link}
              to="/"
              onClick={() => setValue(0)}
            >
              Home
            </StyledGridItems>
          </Grid>
        </StyledGridMainItem>
        <StyledGridMainItem item>
          <Grid container direction="column" spacing={2}>
            <StyledGridItems
              item
              component={Link}
              to="/services"
              onClick={() => {
                setValue(1);
                setSelectedIndex(0);
              }}
            >
              Services
            </StyledGridItems>
            <StyledGridItems
              item
              component={Link}
              to="/customSoftware"
              onClick={() => {
                setValue(1);
                setSelectedIndex(1);
              }}
            >
              Custom Software Development
            </StyledGridItems>
            <StyledGridItems
              item
              component={Link}
              to="/mobileApp"
              onClick={() => {
                setValue(1);
                setSelectedIndex(2);
              }}
            >
              Mobile App Development
            </StyledGridItems>
            <StyledGridItems
              item
              component={Link}
              to="/websites"
              onClick={() => {
                setValue(1);
                setSelectedIndex(3);
              }}
            >
              Websites Development
            </StyledGridItems>
          </Grid>
        </StyledGridMainItem>
        <StyledGridMainItem item>
          <Grid container direction="column" spacing={2}>
            <StyledGridItems
              item
              component={Link}
              to="/theRevolution"
              onClick={() => setValue(2)}
            >
              The Revolution
            </StyledGridItems>
            <StyledGridItems
              item
              component={Link}
              to="/vision"
              onClick={() => setValue(2)}
            >
              Vision
            </StyledGridItems>
            <StyledGridItems
              item
              component={Link}
              to="/technology"
              onClick={() => setValue(2)}
            >
              Technology
            </StyledGridItems>
            <StyledGridItems
              item
              component={Link}
              to="/process"
              onClick={() => setValue(2)}
            >
              Process
            </StyledGridItems>
          </Grid>
        </StyledGridMainItem>
        <StyledGridMainItem item>
          <Grid container direction="column" spacing={2}>
            <StyledGridItems
              item
              component={Link}
              to="/aboutUs"
              onClick={() => setValue(3)}
            >
              About Us
            </StyledGridItems>
            <StyledGridItems
              item
              component={Link}
              to="/history"
              onClick={() => setValue(3)}
            >
              Hisotry
            </StyledGridItems>
            <StyledGridItems
              item
              component={Link}
              to="/team"
              onClick={() => setValue(3)}
            >
              Team
            </StyledGridItems>
          </Grid>
        </StyledGridMainItem>
        <StyledGridMainItem item>
          <Grid container direction="column" spacing={2}>
            <StyledGridItems
              item
              component={Link}
              to="/contactUs"
              onClick={() => setValue(4)}
            >
              Contact Us
            </StyledGridItems>
          </Grid>
        </StyledGridMainItem>
      </StyledGridMain>
      <StyledImage alt="black decorative" src={footerAdornment} />
    </StyledFooter>
  );
};
export default Footer;
