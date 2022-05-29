import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  makeStyles,
  Box,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Logo from "./DeJury.svg";
// import "../static/css/NavBar.css";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginTop: "10px",
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "#242038",
    fontSize: "16px",
    fontWeight: "550",
    marginLeft: theme.spacing(5),
    "&:hover": {
      color: "#FFFFFF",
      borderBottom: "1px solid black",
    },
  },
}));

const Navbar = (props) => {
  const classes = useStyles();

  function getCol(curr) {
    const location = useLocation();
    if (location.pathname === curr) {
      return "#000";
    }
  }
  return (
    <AppBar position="relative" style={{ background: "#388087" }}>
      <CssBaseline />
      <Toolbar>
        <Box>
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </Box>
        <Box
          style={{
            marginLeft: "20px",
            marginTop: "10px",
            color: "#242038",
            background: 'radial-gradient(#FF99AD,#FF6A88)'
          }}
        >
        </Box>
        <div className={classes.navlinks} style={{ marginLeft: "auto" }}>
          <Link to="/" className={classes.link} style={{ color: getCol("/") }}>
            Home
          </Link>

          <Link
            to="/Buyer"
            className={classes.link}
            style={{ color: getCol("/Buyer") }}
          >
            Buyer
          </Link>

          <Link
            to="/Seller"
            className={classes.link}
            style={{ color: getCol("/Seller") }}
          >
            Seller
          </Link>
            <Link
            to="/Juror"
            className={classes.link}
            style={{ color: getCol("/Juror") }}
            >
            Juror
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;