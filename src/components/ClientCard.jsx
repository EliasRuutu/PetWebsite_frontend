import * as React from "react";
import { useNavigate } from "react-router-dom";

import clientAvatar from "../assets/images/avatars/avatar2.png";
import { loadAllPetsInfo } from "../redux/client/clientSlice";
import axios from "axios";
import { useDispatch } from "react-redux";

const ClientCard = (props) => {
  let navigator = useNavigate();
  const dispatch = useDispatch();

  const [clientInfo, setClientsInfo] = React.useState(props.clientInfo);
  const [profileID, setProfileID] = React.useState(clientInfo.Profile_ID);
  const [clientName, setClientName] = React.useState(clientInfo.name);
  const [clientPhoneNumber, setClientPhoneNumber] = React.useState(
    clientInfo.phone
  );
  const [avatarURL, setAvatar] = React.useState(`/assets/images/clients/${clientInfo.avatarName}`);
 
  const [petsInfo, setPetsInfo] = React.useState([]);
  const [petInfoRecap, setPetInfoRecap] = React.useState("0")

  //Pets info
  let petsNumber = 0;
  let firstPetNameList = [];
  React.useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_Pet_Backend_Url}/getallpets`)
      .then((response) => {
        // setClientsInfo(response.data);
        dispatch(loadAllPetsInfo(response.data));
        setPetsInfo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  React.useEffect(() => {
    if (petsInfo.length > 0) {
      petsInfo.forEach((element) => {
        if (element.Profile_ID == profileID) {
          petsNumber ++;
          firstPetNameList.push(element.name);
        }
      });

      if(petsNumber > 0) {
        const infoRecap = petsNumber + "-" + firstPetNameList[0]+"  " + firstPetNameList[1]+"..."
        setPetInfoRecap(infoRecap);
      } else setPetInfoRecap("0");
    }
  }, [petsInfo])

  const goToDetailedClientInfo = () =>
    navigator(`/clientaccountinfo/${profileID}`);

  const deleteInfo = () => {
    props.deleteInfo(profileID);
  };

  return (
    <>
      <div className="flex flex-row justify-between items-center w-full p-4 rounded-lg hover:bg-[#EBFCFF] hover:cursor-pointer">
        <div className="client flex flex-row h-16">
          <img className="object-cover w-16 h-16 rounded-full" src={avatarURL} alt="avatar" />
          <div className="client-name flex flex-col justify-around p-2">
            <p className="font-bold">Client</p>
            <p>{clientName}</p>
          </div>
        </div>
        <div className="client-contact-info">
          <p className="font-bold">Phone</p>
          <p>{clientPhoneNumber}</p>
        </div>
        <div className="client-pets-info">
          <p className="text-[#155263] font-bold">Pet</p>
          <p>{petInfoRecap}</p>
        </div>
        <div className=" client-info-manage flex flex-row justify-between gap-2">
          <button
            className="view-detail view-detail items-center font-bold text-base text-[#3D9FAD] text-center w-36 h-11 bottom-2.5 font-['Poppins'] bg-[#FFFFFF] rounded-md px-5  border-2 border-[#3D9FAD] hover:bg-[#3D9FAD] hover:text-[#FFFFFF]"
            onClick={goToDetailedClientInfo}
          >
            Ver Detalles
          </button>
          <button
            className="items-center font-bold text-base text-[#155263] text-center w-36 h-11 bottom-2.5 font-['Poppins'] bg-[#FFFFFF] rounded-md px-5  border-2 border-[#155263] hover:bg-[#155263] hover:text-[#FFFFFF]"
            onClick={deleteInfo}
          >
            Eliminar
          </button>
        </div>
      </div>
    </>
  );
};

export default ClientCard;
