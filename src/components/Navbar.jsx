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
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

// const pages = ["Home", "Project", "WorkExperience", "Contact"];

// const Navbar = () => {
//   return (
//     <Toolbar disableGutters>
//       <IconButton
//         size="large"
//         edge="start"
//         color="inherit"
//         aria-label="menu"
//         sx={{ mx: 1, fontWeight: "bold" }}
//       >
//         <MenuIcon />
//       </IconButton>
//       <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: "bold" }}>
//         Portfolio
//       </Typography>
//       <Box
//         sx={{
//           flexGrow: 0,
//           display: { md: "none", lg: "flex" },
//           mr: 4,
//         }}
//       >
//         {pages.map((page) => (
//           <Button
//             key={page}
//             sx={{
//               my: 2,
//               color: "#21243D",
//               display: "block",
//               fontWeight: "bold",
//             }}
//           >
//             <Link
//               style={{
//                 textDecoration: "none",
//                 color: "#21243D",
//                 fontSize: "bold",
//               }}
//               to={`/${page}`}
//             >
//               {page}
//             </Link>
//           </Button>
//         ))}
//       </Box>
//     </Toolbar>
//   );
// };

// export default Navbar;

const drawerWidth = 600;
const navItems = ["Home", "Project", "WorkExperience", "Contact"];

function Navbar(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawerForMobileDevices = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ py: 4, color: "#21243D", fontSize: 60 }}>
        Portfolio
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item}>
            <ListItemButton
              component={Link}
              to={`/${item}`}
              sx={{
                textAlign: "center",
              }}
            >
              <Typography variant="h6" sx={{ fontSize: "60px", py: 2 }}>
                {item}
              </Typography>
              {/* <ListItemText primary={item} /> */}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", mb: { xs: 15, lg: 5 } }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ backgroundColor: "#fff", boxShadow: "none" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { sm: "flex", lg: "none" },
              color: "#21243D",
            }}
          >
            <MenuIcon sx={{ fontSize: 75 }} />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", lg: "block" },
              color: "#21243D",
            }}
            onClick={handleDrawerToggle}
          >
            Portfolio
          </Typography>
          <Box sx={{ display: { xs: "none", lg: "flex" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  my: 2,
                  color: "#21243D",
                  display: "block",
                  fontWeight: "bold",
                }}
              >
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#21243D",
                    fontSize: "bold",
                  }}
                  to={`/${item}`}
                >
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
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawerForMobileDevices}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navbar;
