import * as React from "react";
import { useNavigate } from "react-router-dom";

import dogAvatar from "../assets/images/avatars//Group 385.png";
import QRcodeCard from "./QRcodeCard";

const PetCard = (props) => {
  let navigator = useNavigate();
  console.log("props", props.petsInfo)
  const[petInfo, setPetInfo] = React.useState(props.petsInfo)
  const[petName, setPetName] = React.useState(petInfo.name);
  const petOwner = "Rodolfo Guerra";

  const viewQRCode = () => {
    props.onClick();
  };

  const goToDetailedPetInfo = () => navigator('/petaccountinfo')
  return (
    <>
      <div className="flex flex-row justify-between items-center w-full p-4 rounded-lg hover:bg-[#EBFCFF] hover:cursor-pointer">
        <div className="client flex flex-row h-16">
          <img className="object-cover" src={dogAvatar} alt="avatar" />
          <div className="client-name flex flex-col justify-around p-2">
            <p>Name</p>
            <p>{petName}</p>
          </div>
        </div>
        <div className="client-contact-info">
          <p>Owner</p>
          <p>{petOwner}</p>
        </div>
        <div
          className="client-pets-info flex flex-row items-center hover:cursor-pointer"
          onClick={viewQRCode}
        >
          <QRcodeCard />
        </div>
        <div className=" client-info-manage flex flex-row justify-between gap-2">
          <button className="view-detail text-sm items-center text-[#3D9FAD] text-center w-36 h-11 bottom-2.5 font-['Poppins'] bg-[#FFFFFF] rounded-md px-5  border-2 border-[#3D9FAD] hover:bg-[#3D9FAD] hover:text-[#FFFFFF]" onClick={goToDetailedPetInfo}>
            Ver Detalles
          </button>
          <button className="delete-card text-sm items-center text-[#155263] text-center w-36 h-11 bottom-2.5 font-['Poppins'] bg-[#FFFFFF] rounded-md px-5  border-2 border-[#155263] hover:bg-[#155263] hover:text-[#FFFFFF]">
            Eliminar
          </button>
        </div>
      </div>
    </>
  );
};

export default PetCard;
