import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router";

function ResponsiveAppBar() {
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
    <AppBar
      position="sticky"
      sx={{
        width: "100%",
        backgroundColor: "#f7f7f8",
        boxShadow: "none",
        zIndex: "1000",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo in Normal Mode */}
          <Typography
            variant="h6"
            noWrap
            component={Link} // استخدم Link بدلاً من a
            to="/"
            sx={{
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#000",
              textDecoration: "none",
              fontSize: "25px",
            }}
          >
            Hippo
          </Typography>

          {/* Links in Normal Mode */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link
              to={"/"}
              onClick={handleCloseNavMenu}
              style={{
                color: "#000",
                textDecoration: "none",
                margin: "0 10px",
                fontSize: "20px",
                letterSpacing: ".1rem",
              }}
            >
              Products
            </Link>
          </Box>

          {/* Logo in Small Screens */}
          <Typography
            variant="h5"
            noWrap
            component={Link}
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#000",
              textDecoration: "none",
            }}
          >
            Hippo
          </Typography>

          {/* Links in Small Screens */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#000"
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
                ".MuiPaper-root": {
                  width: "250px",
                  maxHeight: "400px",
                  height: "300px",
                  boxShadow: "none",
                  border: "1px solid #ccc"
                },
              }}
            >
              <MenuItem sx={{ borderBottom: "1px solid #ccc", }}>
                <Typography>
                  <Link
                    to={"/productID"}
                    onClick={handleCloseNavMenu}
                    style={{
                      color: "black",
                      textDecoration: "none",
                      margin: "0 10px",
                      fontSize: "17px",
                      letterSpacing: "3px",
                    }}
                  >
                    Products
                  </Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          {/* Menu Avatar ( Login & Register ) */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Ahmed Mostafa" src="/" />
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
              <MenuItem onClick={handleCloseUserMenu} sx={{ borderBottom: "1px solid #ccc", }}>
                <Typography sx={{ textAlign: "center" }}>
                  <Link
                    style={{
                      color: "black",
                      textDecoration: "none",
                      fontSize: "15px",
                      letterSpacing: ".1rem",
                      textTransform: "uppercase",
                    }}
                    to={"/login"}
                  >
                    Login
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography sx={{ textAlign: "center" }}>
                  <Link
                    style={{
                      color: "black",
                      textDecoration: "none",
                      fontSize: "15px",
                      letterSpacing: ".1rem",
                      textTransform: "uppercase",
                    }}
                    to={"/register"}
                  >
                    Register
                  </Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
