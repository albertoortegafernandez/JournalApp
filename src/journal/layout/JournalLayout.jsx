import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Navbar } from "../components/Navbar";
import { SideBar } from "../components/SideBar";

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Navbar drawerWidth={drawerWidth}></Navbar>
      <SideBar drawerWidth={drawerWidth}></SideBar>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
