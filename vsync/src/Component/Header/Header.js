import React, { useState } from "react";
import "./Header.css";
import Logo from "./Logo.png";
import DensitySmallIcon from "@mui/icons-material/DensitySmall";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="nav">
        <ul>
          <li>Home</li>
          <li>Training</li>
          <li>Services</li>
          <li>Career</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="nav-bar">
          <IconButton size="large"  onClick={() => setIsDrawerOpen(true)} >
            <DensitySmallIcon
              fontSize="large"
              aria-label="logo"
             
            />
          </IconButton>
          <Drawer
            anchor="right"
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
          >
            <Box p={2} width="250px" textAlign="center" role="presentation" >
              
              <Typography p={2} variant="h6" color="black" fontWeight="600" sx={{":hover":{color:"blue",borderBottom:"3px solid blue"}}}>
                Home
               
              </Typography>
              <Divider />
              <Typography p={2} variant="h6" color="black" fontWeight="600" sx={{":hover":{color:"blue",borderBottom:"3px solid blue"}}}>
                Training
               
              </Typography>
              <Divider />
              <Typography p={2} variant="h6" color="black" fontWeight="600" sx={{":hover":{color:"blue",borderBottom:"3px solid blue"}}}>
               Services
               
              </Typography>
              <Divider />
              <Typography p={2} variant="h6" color="black" fontWeight="600" sx={{":hover":{color:"blue",borderBottom:"3px solid blue"}}} >
               Career
               
              </Typography>
              <Divider />
              <Typography p={2} variant="h6" color="black" fontWeight="600" sx={{":hover":{color:"blue",borderBottom:"3px solid blue"}}} >
              About
               
              </Typography>
              <Divider />
              <Typography p={2} variant="h6" color="black" fontWeight="600" >
              Contact
               
              </Typography>
              
            </Box>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default Header;
