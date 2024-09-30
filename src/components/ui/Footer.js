import { styled } from "@mui/system";
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
const Footer = () => {
  return (
    <StyledFooter>
      <StyledImage alt="black decorative" src={footerAdornment} />
    </StyledFooter>
  );
};
export default Footer;
