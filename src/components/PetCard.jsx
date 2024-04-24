import * as React from "react";
import { useNavigate } from "react-router-dom";

import dogAvatar from "../assets/images/avatars//Group 385.png";
import QRcodeCard from "./QRcodeCard";
// import { useSelector } from "react-redux";

const PetCard = (props) => {
  let navigator = useNavigate();
  const[petInfo, setPetInfo] = React.useState(props.petsInfo)
  const[petName, setPetName] = React.useState(petInfo.name);
  const [petOwnerID, setPetOwnerID] = React.useState(petInfo.Profile_ID);
  const [clientsInfo, setAllClients] = React.useState(props.clientsInfo)
  const [currentClient, setCurrentClient] = React.useState();

  // const clientInfo = useSelector((state) => state.client.allClientsInfo);
  React.useEffect(() => {
    if (clientsInfo[0].length > 0) {
      clientsInfo[0].forEach((element) => {
        if (element.Profile_ID == petOwnerID) {
          console.log("element", element)
          setCurrentClient(element);
        }
      });
    }
  }, [props.clientsInfo]);
  
  React.useEffect(() => {
    console.log("currentClient==>", currentClient)

  }, [currentClient])

  const viewQRCode = () => {
    props.onClick();
  };


  const goToDetailedPetInfo = () => navigator(`/petaccountinfo/${petOwnerID}`)
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
          {currentClient && <span>{currentClient.name}</span>}
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
