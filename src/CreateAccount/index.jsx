import '../assets/css/component.css'
import LeftSidePanel from '../components/LeftSidePanel';
// import profileBackground from "../assests/images/backgrounds/profile_background.png"
 import CreateTapPanel from './CreateTapPanel'
import { useNavigate } from 'react-router-dom';
import PanelForPet from './Panels/PanelForPet';

const CreatePetAccount = () => {
  
  return (
    <>
      <div className="w-full flex">
        <LeftSidePanel/>
        <div className="flex w-full flex-col items-center justify-between h-[55rem]   bg-[#EBFCFF]  border-t-2 px-24 mb-3 pt-28 pb-52 px-9">
          <PanelForPet className="h-full"/>
        </div>
      </div>
    </>
  );
};

export default CreatePetAccount;
