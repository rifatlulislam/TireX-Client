import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";

const Header = () => {
  const history = useHistory();

  const { user, logOut } = useAuth();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            onClick={() => history.push("/")}
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontSize: "2rem",
              fontFamily: "cursive",
              cursor: "pointer",
            }}
          >
            TireX
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem
                onClick={() => {
                  handleCloseNavMenu();
                  history.push("/");
                }}
              >
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseNavMenu();
                  history.push("/explore");
                }}
              >
                <Typography textAlign="center">Explore</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            onClick={() => history.push("/")}
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              fontSize: "1.5rem",
              fontFamily: "cursive",
              cursor: "pointer",
            }}
          >
            TireX
          </Typography>
          {/* pc nav-items */}
          <div style={{ marginLeft: "auto" }}>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Button
                onClick={() => {
                  handleCloseNavMenu();
                  history.push("/");
                }}
                sx={{
                  my: 2,
                  display: "block",
                  color: "#bbbbbb",
                  fontFamily: "MyriadProCondensed",
                  fontSize: "1.1rem",
                  "&:hover": {
                    color: "#fff",
                  },
                }}
              >
                Home
              </Button>
              <Button
                onClick={() => {
                  handleCloseNavMenu();
                  history.push("/explore");
                }}
                sx={{
                  my: 2,
                  display: "block",
                  color: "#bbbbbb",
                  fontFamily: "MyriadProCondensed",
                  fontSize: "1.1rem",
                  "&:hover": {
                    color: "#fff",
                  },
                }}
              >
                Explore
              </Button>
            </Box>
          </div>
          {user.email ? (
            <Box sx={{ flexGrow: 0, ml: 1 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <div
                    style={{
                      color: "#15c7e7",
                      fontSize: "1.3rem",
                      fontWeight: "600",
                    }}
                  >
                    {user.displayName}
                  </div>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem
                  onClick={() => {
                    handleCloseNavMenu();
                    history.push("/dashboard");
                  }}
                >
                  <Typography textAlign="center">Dashboard</Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleCloseNavMenu();
                    logOut();
                  }}
                >
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <Link
              style={{
                textDecoration: "none",
                color: "#bbbbbb",
                marginLeft: "1.3rem",
              }}
              to="/login"
            >
              <Button varaint="contained" style={{ color: "#15c7e7" }}>
                Login
              </Button>
            </Link>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
