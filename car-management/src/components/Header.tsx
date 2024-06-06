import React from "react";
import { AppBar, Toolbar } from "@mui/material";

const Header: React.FC = () => {
  return (
    <AppBar position="static" style={{ background: "linear-gradient(90deg, rgba(143,40,163,1) 0%, rgba(233,66,134,1) 100%)" }}>
      <Toolbar>
        <img style={{ width: "15%" }} src={require("../assets/logo/logo-teste@2x.png")} alt="" />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
