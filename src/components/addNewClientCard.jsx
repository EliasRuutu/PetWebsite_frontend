import { useNavigate } from "react-router-dom";
import PlusIcon from "../assets/images/backgrounds/plus.png"

const AddNewClientCard = (props) => {

  const navigator = useNavigate();

  const handleClick = () => {
    navigator("/registerNewClient"); 
  }
  return (
    <>
      <div className="client flex flex-row gap-2 justify-start m-2 items-center w-full cursor-pointer hover:text-[#3D9FAD]" onClick={handleClick} >
        <div className="avatar rounded-lg overflow-hidden">
          <img src={PlusIcon} width ={64} className="w-10 h-10 object-cover" alt="avatar"></img>
        </div>
        <div className="name text-base font-[#155263]">Add a new client</div>
      </div>
    </>
  );
};

export default AddNewClientCard;
