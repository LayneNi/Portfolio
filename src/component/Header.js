// import {Button, AppBar, Box, App} from '@mui/material';
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
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ProfilePic from "../images/profilePic.JPG";
import LayneLogo from "../images/white_logo_transparent_background.png";
import AdbIcon from "@mui/icons-material/Adb";
import "bootstrap/dist/css/bootstrap.min.css";
import Container1 from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const pages = ["LinkedIn", "Github", "Resumè"];
const settings = ["About Me", "Projects", "Skills", "Contact Me"];

function Header() {
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
    <>
      <AppBar
        position="static"
        style={{
          background: "#2E3B55",
          padding: 10,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters className="toolbar">
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
            <IconButton
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="icon-btn"
              sx={{ width: "50%" }}
            >
              <Box
                sx={{
                  width: "50%",
                  height: "50%",
                  maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 350, md: 250 },
                }}
                component="img"
                alt="Layne Profile Picture"
                src={LayneLogo}
              />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontSize: 30,
                // marginLeft: 5,
                marginRight: 5,
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Layne Nigro Portfolio
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            
            className="toolbar-box">

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
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
            {/* <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            ></Typography> */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              
                <Button
                  key={"Linkedin"}
                  href={"https://www.linkedin.com/in/layne-nigro-b91184255/"}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  LinkedIn
                </Button>
                <Button
                  key={"Github"}
                  href={"https://github.com/LayneNi"}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Github
                </Button>
                <Button
                  key={"Resumè"}
                  href={"https://drive.google.com/file/d/1e3Pkw8dDJw-IggkOXnL9SUcBzJk46FIL/view?usp=sharing"}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Resumè
                </Button>
             
            </Box>

            <Box className="toolbar-avatar" sx={{ flexGrow: 0 }}>
              <Tooltip title="Options">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Layne Profile Picture" src={ProfilePic} />
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
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <a href={"#" + setting}>
                      <Typography textAlign="center">{setting}</Typography>
                    </a>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Header;
