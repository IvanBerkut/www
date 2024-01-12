import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  CssBaseline,
} from "@mui/material";
import CompareIcon from "@mui/icons-material/Compare";
import MenuIcon from "@mui/icons-material/Menu";
import { mainNavbarItems } from "./consts/navbarItems";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            onClick={() => navigate("/")}
          >
            <CompareIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            OmniSpecsCompare
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {mainNavbarItems.map((item) => (
              <Button
                key={item.id}
                color="inherit"
                onClick={() => navigate(item.route)}
              >
                {item.label}
              </Button>
            ))}
          </Stack>
          <IconButton
            size="large"
            color="inherit"
            onClick={handleDrawerOpen}
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
        <List>
          {mainNavbarItems.map((item) => (
            <ListItem
              key={item.id}
              onClick={() => {
                navigate(item.route);
                handleDrawerClose();
              }}
            >
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Navbar;
