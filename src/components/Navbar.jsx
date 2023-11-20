import React from "react";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const drawerWidth = 600;
const navItems = ["Home", "Project", "WorkExperience", "Contact"];

function Navbar(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawerForMobileDevices = (
    <Box onClick={handleDrawerToggle} sx={styles.alignment}>
      <Typography variant="h6" sx={styles.heading}>
        Portfolio
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item}>
            <ListItemButton
              component={Link}
              to={`/${item}`}
              sx={styles.alignment}
            >
              <Typography variant="h6" sx={styles.navItems}>
                {item}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={styles.container}>
      <AppBar component="nav" sx={styles.appbarElement}>
        <Toolbar>
          <IconButton
            size="large"
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={styles.iconStyle}
          >
            <MenuIcon sx={{ fontSize: 75 }} />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={styles.title}
            onClick={handleDrawerToggle}
          >
            Portfolio
          </Typography>
          <Box sx={styles.itemElement}>
            {navItems.map((item) => (
              <Button key={item} sx={styles.buttonStyle}>
                <Link style={styles.buttonlink} to={`/${item}`}>
                  {item}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={styles.drawerStyle}
        >
          {drawerForMobileDevices}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navbar;

const styles = {
  heading: { py: 4, color: "#21243D", fontSize: 60 },
  alignment: { textAlign: "center" },
  navItems: { fontSize: "50px", py: 2 },
  container: { display: "flex", mb: { xs: 15, lg: 5 } },
  appbarElement: { backgroundColor: "#fff", boxShadow: "none" },
  iconStyle: {
    mr: 2,
    display: { sm: "flex", lg: "none" },
    color: "#21243D",
  },
  title: {
    flexGrow: 1,
    display: { xs: "none", lg: "block" },
    color: "#21243D",
  },

  itemElement: { display: { xs: "none", lg: "flex" } },

  buttonStyle: {
    my: 2,
    color: "#21243D",
    display: "block",
    fontWeight: "bold",
  },

  buttonlink: {
    textDecoration: "none",
    color: "#21243D",
    fontSize: "bold",
  },

  drawerStyle: {
    display: { xs: "block", lg: "none" },
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: drawerWidth,
    },
  },
};
