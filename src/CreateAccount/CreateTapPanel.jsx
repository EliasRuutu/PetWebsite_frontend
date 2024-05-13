import * as React from "react";
import { useNavigate } from "react-router-dom";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import PanelForClient from "./Panels/PanelForClient";
import PanelForPet from "./Panels/PanelForPet";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className="pt-2.5"
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function CreateTapPanel() {
  const [value, setValue] = React.useState(0);
  let naviagtor = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const goToPrevious = () => {
    naviagtor('/clientaccountinfo')
  }
  return (
    <Box
      sx={{
        width: "80%",
        backgroundColor: "#FFFFFF",
        paddingX: "48px",
        paddingY: "24px",
        height: "100%",
        position: "relative",
      }}
      className="rounded-lg "
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Dueño" {...a11yProps(0)} />
          <Tab label="Mascotas" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <PanelForClient />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <PanelForPet />
      </CustomTabPanel>
      <div className="flex items-end bottom-4 right-4 gap-4 absolute">
        <button
          type="submit"
          className="text-sm items-center text-[#3D9FAD] text-center w-36 h-11 bottom-2.5 font-['Poppins'] bg-[#FFFFFF] rounded-md px-5  border-2 border-[#3D9FAD] hover:bg-[#3D9FAD] hover:text-white" onClick={goToPrevious}
        >
          VOLVER
        </button>
        <button
          type="submit"
          className="text-sm items-center text-[#3D9FAD] text-center w-36 h-11 bottom-2.5 font-['Poppins'] bg-[#FFFFFF] rounded-md px-5  border-2 border-[#3D9FAD] hover:bg-[#3D9FAD] hover:text-white"
        >
          SIGUIENTE
        </button>
      </div>
    </Box>
  );
}
