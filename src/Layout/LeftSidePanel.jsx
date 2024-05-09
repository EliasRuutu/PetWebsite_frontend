import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";

import TagIcon from "../components/TagIcon";
import ClientIcon from "../components/ClientIcon";
import PetFootPrintIcon from "../components/PetFootPrintIcon";
import { useNavigate } from "react-router-dom";

export default function LeftSidePanel() {
  const [value, setValue] = React.useState(0);
  const navigator = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const performNavigation = (newValue) => {
    if (newValue === 0) navigator("/idtags");
    if (newValue === 1) navigator("/assignedpetslist");
    if (newValue === 2) navigator("/balanceofclient");
  };

  return (
    <div className="flex w-1/6 border-2 border-r-2 h-screen flex-col pt-4">
      <Tabs
        value={value}
        orientation="vertical"
        className="border-r-2"
        onChange={handleChange}
        aria-label="icon label tabs example"
        sx={{
          "& .MuiTabs-indicator": {
            backgroundColor: "#3D9FAD",
            height: 4,
            width: 9,
            left: 0,
            right: "auto",
            borderTopRightRadius: 9,
            borderBottomRightRadius: 9, // to make it rounded
          },
        }}
      >
        <Tab
          onClick={() => performNavigation(0)}
          icon={<TagIcon />}
          sx={{
              marginLeft: 4,
              justifyContent: "flex-start",
          }}
        />
        <Tab 
        onClick={() => performNavigation(1)}
          
          icon={<PetFootPrintIcon />} sx={{
          marginLeft: 4,
          justifyContent: "flex-start",
          }}/>
        <Tab 
        onClick={() => performNavigation(2)}
        
        icon={<ClientIcon />} sx={{
              marginLeft: 4,
              justifyContent: "flex-start",
          }}/>
      </Tabs>
    </div>
  );
}
