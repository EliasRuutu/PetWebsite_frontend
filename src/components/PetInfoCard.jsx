import * as React from "react";
import { useNavigate } from "react-router-dom";

import dogAvatar from "../assets/images/avatars/Group 385.png";
import QRcodeCard from "./QRcodeCard";
// import { useSelector } from "react-redux";

const PetInfoCard = (props) => {
  let navigator = useNavigate();
  const [petInfo, setPetInfo] = React.useState(props.petsInfo);
  const [idTag, setIdTag] = React.useState(petInfo.idTag);
  const [petName, setPetName] = React.useState(petInfo.name);
  const [isAssigned, setAssinged] = React.useState(petInfo.isAssigned);
  const [petAvatarPath, setPetAvatarPath] = React.useState(
    `/assets/images/pets/${petInfo.petAvatar}`
  );
  const [petOwnerID, setPetOwnerID] = React.useState(petInfo.Profile_ID);
  const [clientsInfo, setAllClients] = React.useState(props.clientsInfo);
  const [currentClient, setCurrentClient] = React.useState();

  // const clientInfo = useSelector((state) => state.client.allClientsInfo);
  React.useEffect(() => {
    if (clientsInfo[0].length > 0) {
      clientsInfo[0].forEach((element) => {
        if (element.Profile_ID == petOwnerID) {
          console.log("element", element);
          setCurrentClient(element);
        }
      });
    }
  }, [props.clientsInfo]);

  React.useEffect(() => {
    console.log("currentClient==>", currentClient);
  }, [currentClient]);

  const viewQRCode = () => {
    props.onClick();
  };

  const goToDetailedPetInfo = () =>
    navigator(`/petaccountinfo/${petOwnerID}/${idTag}`);
  return (
    <>
      <div className="flex flex-row justify-between items-center w-full p-4 rounded-lg hover:bg-[#EBFCFF] hover:cursor-pointer">
        <div className="client flex flex-row h-16">
          {/* <div className="w-64 h-64 ">             */}
            <img
              className="object-cover w-16 h-16 rounded-full"
              src={petAvatarPath}
              alt="avatar"
            />
          {/* </div> */}
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
          className="client-pets-info flex flex-col items-center hover:cursor-pointer"
        >
          <p>Tag</p>
          {!isAssigned ? (
              <span className="bg-[#E7E7E7] font-['Poppins'] text-[#155263] rounded-[50px] px-10 py-2">
                Unassign
              </span>
            ) : (
              <span className="bg-[#3D9FAD] font-['Poppins'] text-white rounded-[50px] px-10 py-2">
                Assign
              </span>
            )}
        </div>
        <div className=" client-info-manage flex flex-row justify-between gap-2">
          <button
            className="view-detail text-sm items-center text-[#3D9FAD] text-center w-36 h-11 bottom-2.5 font-['Poppins'] bg-[#FFFFFF] rounded-md px-5  border-2 border-[#3D9FAD] hover:bg-[#3D9FAD] hover:text-[#FFFFFF]"
            onClick={goToDetailedPetInfo}
          >
            View Details
          </button>
          <button className="delete-card text-sm items-center text-[#155263] text-center w-36 h-11 bottom-2.5 font-['Poppins'] bg-[#FFFFFF] rounded-md px-5  border-2 border-[#155263] hover:bg-[#155263] hover:text-[#FFFFFF]" onClick={() => {props.handleOpen(petOwnerID)}}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default PetInfoCard;
