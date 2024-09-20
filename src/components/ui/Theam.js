import { createTheme } from "@mui/material";

const arcBlue = "#0B72B9";
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
  },
  typography: {
    h5: {
      fontWeight: 300,
    },
  },
});
