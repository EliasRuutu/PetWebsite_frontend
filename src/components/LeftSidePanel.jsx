import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';

import TagIcon from "./TagIcon"
import ClientIcon from "./ClientIcon"
import PetFootPrintIcon from "./PetFootPrintIcon"
import { useNavigate } from 'react-router-dom';

export default function LeftSidePanel() {
  const [value, setValue] = React.useState(0);
  const navigator = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    
    if(newValue === 1) navigator("/idtags");
    if(newValue === 2) navigator("/assignedpetslist");
    if(newValue === 3) navigator("/balanceofclient");
  };

  return (
    <div className="flex w-1/6 border-2 border-r-2 h-screen flex-col pt-4">
      <Tabs value={value} orientation="vertical" className="border-r-2" onChange={handleChange} aria-label="icon label tabs example">
        <Tab icon={<TagIcon />} />
        <Tab icon={<PetFootPrintIcon />}/>
        <Tab icon={<ClientIcon />} />
      </Tabs>
    </div>
  );
}