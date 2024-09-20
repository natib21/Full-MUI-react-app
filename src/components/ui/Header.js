import * as React from "react";
import { Toolbar, AppBar, useScrollTrigger, Typography } from "@mui/material";
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
function Header(Props) {
  return (
    <ElevationScroll>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h5">Arc Development</Typography>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}

export default Header;
