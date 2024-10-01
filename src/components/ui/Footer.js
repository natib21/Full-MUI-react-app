import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import footerAdornment from "../../assets/Footer Adornment.svg";
import { Hidden } from "@mui/material";
import Facebook from "../../assets/facebook.svg";
import Instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
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
const SocialMediaIcon = styled("img")(({ theme }) => ({
  height: "4em",
  width: "4em",
  [theme.breakpoints.down("md")]: {
    height: "2.5em",
    width: "2.5em",
  },
}));
const Footer = ({ value, setValue, selectedIndex, setSelectedIndex }) => {
  return (
    <StyledFooter>
      <StyledGridMain container justifyContent="center">
        <Hidden mdDown>
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
        </Hidden>
      </StyledGridMain>
      <StyledImage alt="black decorative" src={footerAdornment} />
      <Grid
        container
        sx={{ position: "absolute", marginTop: "-6em", right: "1.5em" }}
        justifyContent="flex-end"
        spacing={2}
      >
        <Grid
          item
          component={"a"}
          href="http://www.facebook.com"
          rel="noopener noreferrer"
          target="blank"
        >
          <SocialMediaIcon alt="facebook logo" src={Facebook} />
        </Grid>
        <Grid
          item
          component={"a"}
          href="http://www.twitter.com"
          rel="noopener noreferrer"
          target="blank"
        >
          <SocialMediaIcon alt="twitter logo" src={twitter} />
        </Grid>
        <Grid
          item
          component={"a"}
          href="http://www.instagram.com"
          rel="noopener noreferrer"
          target="blank"
        >
          <SocialMediaIcon alt="instagram logo" src={Instagram} />
        </Grid>
      </Grid>
    </StyledFooter>
  );
};
export default Footer;
