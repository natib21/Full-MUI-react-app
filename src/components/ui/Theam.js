import { createTheme } from "@mui/material";

const arcBlue = "#0B72B9";
/* const arcBlue = "#000000"; */
const arcOrange = "#ffba60";
export default createTheme({
  palette: {
    common: {
      blue: arcBlue,
      orange: arcOrange,
    },
    primary: {
      main: arcBlue,
    },
    secondary: {
      main: arcOrange,
    },
    normal: "#000000",
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 400,
      fontSize: "1rem",
      opacity: 0.7,
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "white",
    },
  },
});
