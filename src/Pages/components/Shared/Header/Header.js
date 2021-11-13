import MenuIcon from "@mui/icons-material/Menu";
import { Button, Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Hidden from "@mui/material/Hidden";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";

const drawerWidth = 200;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#1d1d1d",
  },
  link: {
    textDecoration: "none",
    color: "#3a3a3a",
  },
  navItemM: {
    display: "flex",
    alignItems: "center",
    padding: ".8rem 0",
    paddingLeft: "10%",
    opacity: ".8",
    transition: ".3s linear",

    "&:hover": {
      opacity: "1",
      fontWeight: "700",
      color: "black",
    },
  },
  active: {
    borderColor: theme.palette.primary.main,
  },
  navIcon: {
    color: theme.palette.primary.main,
    marginRight: 10,
  },
  navLogoText: {
    color: theme.palette.primary.main,
    textAlign: "center",
    margin: "1rem .3rem",
  },
  logoImg: {
    padding: "1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
      display: "none",
    },
  },
  navbar: {
    [theme.breakpoints.down("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
      display: "none",
    },
    display: "flex",
    justifyContent: "space-between",
  },
  appBar: {
    [theme.breakpoints.up("md")]: {
      width: "100%",
      display: "none",
    },
    backgroundColor: "#1d1d1d",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  navItem: {
    marginLeft: "30px",
    color: "#bbbbbb",
    transition: "all .3s ease",
    fontSize: "1.2rem",
    fontWeight: "600",
    letterSpacing: "3px",
    "&:hover": {
      color: "#fff",
    },
  },
  linkItem: {
    textDecoration: "none",
    color: "#bbbbbb",
  },
  registerButton: {
    backgroundColor: "transparent",
    padding: "7px 12px",
    border: "1px solid #15c7e7",
    borderRadius: "14px",
    color: "#fff",
    transition: "all 0.3s ease 0s",
    "$:hover": {
      bacgrounColor: "#fff",
      color: "black",
    },
  },
}));

const Navigation = ({ window, handleClickOpen }) => {
  const { user, logOut } = useAuth();

  const {
    root,
    appBar,
    menuButton,
    drawerPaper,
    navItem,
    linkItem,
    link,
    navItemM,
  } = useStyles();

  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ textAlign: "center" }}>
      <Typography variant="h6">TuaBike</Typography>
      <Divider />
      <Link to="/" className={link}>
        <ListItem button className={navItemM}>
          <ListItemText primary={"Home"} />
        </ListItem>
      </Link>
      <Divider />
      <Link to="/explore" className={link}>
        <ListItem button className={navItemM}>
          <ListItemText primary={"Explore"} />
        </ListItem>
      </Link>
      <Divider />
      <Link to="/dashboard" className={link}>
        <ListItem button className={navItemM}>
          <ListItemText primary={"Dashboard"} />
        </ListItem>
      </Link>
      <Divider />
      {user?.email ? (
        <Link to="/register" className={link}>
          <ListItem button className={navItemM}>
            <ListItemText primary={"Register"} />
          </ListItem>
        </Link>
      ) : (
        <Link to="/register" className={link}>
          <ListItem button className={navItemM}>
            <ListItemText primary={"Register"} />
          </ListItem>
        </Link>
      )}
      <Divider />
    </div>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box>
        <AppBar
          className={appBar}
          sx={{
            backgroundColor: "#1d1d1d",
            boxShadow: 0,
          }}
        >
          <Toolbar>
            <IconButton
              sx={{ color: "#bbbbbb" }}
              // color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={menuButton}
            >
              <MenuIcon className="menu-icon" />
            </IconButton>
            <h3 className="title-name">TireX</h3>

            <nav className={drawer}>
              <Hidden mdUp implementation="css">
                <Drawer
                  container={container}
                  variant="temporary"
                  anchor={theme.direction === "rtl" ? "right" : "left"}
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                  classes={{
                    paper: drawerPaper,
                  }}
                  ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                  }}
                >
                  {drawer}
                </Drawer>
              </Hidden>
            </nav>

            <Container
              className="navbar"
              style={{
                marginLeft: "28%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <Link className={linkItem} to="/">
                  {" "}
                  <span className={navItem}>Home</span>
                </Link>
                <Link className={linkItem} to="/explore">
                  <span className={navItem}>Explore</span>
                </Link>
                <Link className={linkItem} to="/dashboard">
                  <span className={navItem}>Dashboard</span>
                </Link>

                {/* {user.email ?
                        <Avatar
                            style={{ display: 'inline-flex', top: 10 }}
                            src={loggedInUser.photoURL} /> :
                        <Link className={linkItem} to='/login'><Button><span className={navItem}>Login</span></Button></Link>} */}

                {/*
                  <Button onClick={logOut}>
                    <span className={navItem}>Logout</span>
                  </Button> */}
              </div>
              <div className="account">
                {user?.email ? (
                  <div>
                    <span
                      style={{
                        fontSize: "1.1rem",
                        letterSpacing: "1px",
                        marginRight: "12px",
                      }}
                    >
                      {user.displayName}
                    </span>
                    <Button onClick={logOut} sx={{ color: "#15c7e7" }}>
                      Logout
                    </Button>
                  </div>
                ) : (
                  <Link className={linkItem} to="/register">
                    <Button varaint="outlined" style={{ color: "#15c7e7" }}>
                      Register
                    </Button>
                  </Link>
                )}
              </div>
            </Container>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navigation;
