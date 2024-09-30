import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
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
const StyledGrid = styled(Grid)(({ theme }) => ({
  position: "absolute",
}));
const StyledGridItems = styled(Grid)(({ theme }) => ({
  color: "white",
  fontFamily: "Arial",
  fontSize: "0.75rem",
  fontWeight: "bold",
}));
const Footer = () => {
  return (
    <StyledFooter>
      <StyledGrid container justifyContent="center">
        <Grid item>
          <Grid container direction="column">
            <StyledGridItems item> Home</StyledGridItems>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <StyledGridItems item>Services</StyledGridItems>
            <StyledGridItems item>Custom Software Development</StyledGridItems>
            <StyledGridItems item>Mobile App Development</StyledGridItems>
            <StyledGridItems item>Websites Development</StyledGridItems>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <StyledGridItems item> The Revolution</StyledGridItems>
            <StyledGridItems item>Vision</StyledGridItems>
            <StyledGridItems item>Technology</StyledGridItems>
            <StyledGridItems item>Process</StyledGridItems>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <StyledGridItems item> About Us</StyledGridItems>
            <StyledGridItems item> Hisotry</StyledGridItems>
            <StyledGridItems item> Team</StyledGridItems>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <StyledGridItems item> Contact Us</StyledGridItems>
          </Grid>
        </Grid>
      </StyledGrid>
      <StyledImage alt="black decorative" src={footerAdornment} />
    </StyledFooter>
  );
};
export default Footer;
