import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  IconButton,
} from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme, useMediaQuery } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { IoPeopleOutline, IoLogOutOutline, IoSettingsOutline } from "react-icons/io5";
import { AiOutlineDashboard } from "react-icons/ai";

const SideNav = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const navigateTo = (path) => {
    navigate(path);
    if (isMobile || isTablet) setMobileOpen(false);
  };


  const getDrawerHeight = () => {
    if (isMobile) return "100vh"; 
    if (location.pathname === "/dashboard/apply-leave") return "240vh";
    if (location.pathname.includes("/dashboard/all-employees")) return "134vh";
    if (location.pathname === "/dashboard/add-new-employee") return "140vh";
    if (location.pathname === "/dashboard/edit-profile") return "153vh";
    return "140vh"; 
  };

  const drawerContent = (
    <List>
      <ListItem
        className="sidenav-items"
        button
        onClick={() => navigateTo("/dashboard")}
        sx={{ backgroundColor: location.pathname === "/dashboard" ? "#394867" : "transparent" }}
      >
        <ListItemIcon>
          <AiOutlineDashboard className="sidenav-icons" />
        </ListItemIcon>
        <ListItemText primary="Dashboard" sx={{ color: "#fff", "& .MuiTypography-root": { fontSize: "0.860rem" } }} />
      </ListItem>

      <ListItem
        className="sidenav-items"
        button
        onClick={() => handleClick(0)}
        sx={{ backgroundColor: location.pathname.includes("/dashboard/employees") ? "#394867" : "transparent" }}
      >
        <ListItemIcon>
          <IoPeopleOutline className="sidenav-icons" />
        </ListItemIcon>
        <ListItemText primary="Employees" sx={{ color: "#fff", "& .MuiTypography-root": { fontSize: "0.860rem" } }} />
        {activeIndex === 0 ? <ExpandLess sx={{ color: "#fff" }} /> : <ExpandMore sx={{ color: "#fff" }} />}
      </ListItem>
      <Collapse in={activeIndex === 0} timeout="auto" unmountOnExit>
        <List sx={{ pl: 4 }} component="div" disablePadding>
          <ListItem
            className="sidenav-items"
            button
            onClick={() => navigateTo("/dashboard/all-employees")}
            sx={{ backgroundColor: location.pathname === "/dashboard/all-employees" ? "#394867" : "transparent" }}
          >
            <ListItemText primary="All Employees" sx={{ color: "#fff", "& .MuiTypography-root": {fontSize: "0.860rem"} }} />
          </ListItem>
          <ListItem
            className="sidenav-items"
            button
            onClick={() => navigateTo("/dashboard/add-new-employee")}
            sx={{ backgroundColor: location.pathname === "/dashboard/add-new-employee" ? "#394867" : "transparent" }}
          >
            <ListItemText primary="Add New Employees" sx={{ color: "#fff", "& .MuiTypography-root": { fontSize: "0.860rem" } }} />
          </ListItem>
          <ListItem className="sidenav-items"
            button
            onClick={() => navigateTo('/dashboard/profile')}
            sx={{ backgroundColor: location.pathname === '/dashboard/profile' ? '#394867' : 'transparent' }}
          >
            <ListItemText primary="Profile" sx={{ color: "#fff", "& .MuiTypography-root": { fontSize: "0.860rem" } }} />
          </ListItem>
        </List>
      </Collapse>

      <ListItem
        className="sidenav-items"
        button
        onClick={() => navigateTo("/")}
        sx={{ backgroundColor: location.pathname === "/" ? "#394867" : "transparent" }}
      >
        <ListItemIcon>
          <IoLogOutOutline className="sidenav-icons" />
        </ListItemIcon>
        <ListItemText primary="Leave" sx={{ color: "#fff", "& .MuiTypography-root": { fontSize: "0.860rem" } }} />
      </ListItem>

      <ListItem
        className="sidenav-items"
        button
        onClick={() => navigateTo("/settings")}
        sx={{ backgroundColor: location.pathname === "/settings" ? "#394867" : "transparent" }}
      >
        <ListItemIcon>
          <IoSettingsOutline className="sidenav-icons" />
        </ListItemIcon>
        <ListItemText primary="Settings" sx={{ color: "#fff", "& .MuiTypography-root": { fontSize: "0.860rem"} }} />
      </ListItem>
    </List>
  );

  return (
    <>
      {(isMobile || isTablet) && (
        <IconButton
          className="sidenav-menu"
          color="inherit"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ position: "relative", bottom: 53, left: 15, zIndex: 1300 }}
        >
          <MenuIcon sx={{ color: "#fff" }} />
        </IconButton>
      )}
      <Drawer
        variant={isMobile || isTablet ? "temporary" : "permanent"}
        open={isMobile || isTablet ? mobileOpen : true}
        onClose={handleDrawerToggle}
        className="side-nav"
        sx={{
          "& .MuiDrawer-paper": {
            width: isMobile ? "100vw" : isTablet ? "70vw" : 195,
            height: getDrawerHeight(), 
            backgroundColor: "#121224",
            color: "#fff",
            boxSizing: "border-box",
            zIndex: 1200,
            paddingTop: "20px",
            marginTop: "20px",
            marginLeft: "25px",
            borderRadius: isMobile || isTablet ? 0 : "10px",
            position: "relative",
          },
        }}
        anchor="left"
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default SideNav;