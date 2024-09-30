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
const Footer = () => {
  return (
    <StyledFooter>
      <StyledGridMain container justifyContent="center">
        <StyledGridMainItem item>
          <Grid container direction="column" spacing={2}>
            <StyledGridItems item component={Link} to="/">
              Home
            </StyledGridItems>
          </Grid>
        </StyledGridMainItem>
        <StyledGridMainItem item>
          <Grid container direction="column" spacing={2}>
            <StyledGridItems item component={Link} to="/services">
              Services
            </StyledGridItems>
            <StyledGridItems item component={Link} to="/customSoftware">
              Custom Software Development
            </StyledGridItems>
            <StyledGridItems item component={Link} to="/mobileApp">
              Mobile App Development
            </StyledGridItems>
            <StyledGridItems item component={Link} to="/websites">
              Websites Development
            </StyledGridItems>
          </Grid>
        </StyledGridMainItem>
        <StyledGridMainItem item>
          <Grid container direction="column" spacing={2}>
            <StyledGridItems item component={Link} to="/theRevolution">
              The Revolution
            </StyledGridItems>
            <StyledGridItems item component={Link} to="/vision">
              Vision
            </StyledGridItems>
            <StyledGridItems item component={Link} to="/technology">
              Technology
            </StyledGridItems>
            <StyledGridItems item component={Link} to="/process">
              Process
            </StyledGridItems>
          </Grid>
        </StyledGridMainItem>
        <StyledGridMainItem item>
          <Grid container direction="column" spacing={2}>
            <StyledGridItems item component={Link} to="/aboutUs">
              About Us
            </StyledGridItems>
            <StyledGridItems item component={Link} to="/history">
              Hisotry
            </StyledGridItems>
            <StyledGridItems item component={Link} to="/team">
              Team
            </StyledGridItems>
          </Grid>
        </StyledGridMainItem>
        <StyledGridMainItem item>
          <Grid container direction="column" spacing={2}>
            <StyledGridItems item component={Link} to="/contactUs">
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
