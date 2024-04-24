import * as React from "react";
import { useNavigate } from "react-router-dom";

import clientAvatar from "../assets/images/avatars/avatar2.png";

const ClientCard = (props) => {
  let navigator = useNavigate();
  const [clientInfo, setClientsInfo] = React.useState(props.clientInfo)
  const [profileID, setProfileID] = React.useState(clientInfo.Profile_ID);
  const [clientName, setClientName] = React.useState(clientInfo.name);
  const [clientPhoneNumber, setClientPhoneNumber] = React.useState(clientInfo.phone);
  const [avatar, setAvatar] = React.useState(clientInfo.avatarName);
  const [avatarURL, setAvatarURL] = React.useState("../assets/images/avatars/avatar2.png");
  
  //Pets info
  const petsNumber = "";
  const petsType = "";
  const petsName = "";
  const petsInfo = "";

  const goToDetailedClientInfo =() => navigator(`/clientaccountinfo/${profileID}`)

  const deleteInfo = () => {
    props.deleteInfo();
  }

  return (
    <>
      <div className="flex flex-row justify-between items-center w-full p-4 rounded-lg hover:bg-[#EBFCFF] hover:cursor-pointer">
        <div className="client flex flex-row h-16">
          <img className="object-cover" src={clientAvatar} alt="avatar" />
          <div className="client-name flex flex-col justify-around p-2">
            <p>Cliente</p>
            <p>{clientName}</p>
          </div>
        </div>
        <div className="client-contact-info">
          <p>Telefono</p>
          <p>{clientPhoneNumber}</p>
        </div>
        <div className="client-pets-info">
          <p className="text-[#155263]">Mascotas</p>
          <p>{petsInfo}</p>
        </div>
        <div className=" client-info-manage flex flex-row justify-between gap-2">
          <button className="view-detail view-detail items-center font-bold text-base text-[#3D9FAD] text-center w-36 h-11 bottom-2.5 font-['Poppins'] bg-[#FFFFFF] rounded-md px-5  border-2 border-[#3D9FAD] hover:bg-[#3D9FAD] hover:text-[#FFFFFF]" onClick={goToDetailedClientInfo}>Ver Detalles</button>
          <button className="items-center font-bold text-base text-[#155263] text-center w-36 h-11 bottom-2.5 font-['Poppins'] bg-[#FFFFFF] rounded-md px-5  border-2 border-[#155263] hover:bg-[#155263] hover:text-[#FFFFFF]" onClick={deleteInfo}>Eliminar</button>
        </div>
      </div>
    </>
  );
};

export default ClientCard;
