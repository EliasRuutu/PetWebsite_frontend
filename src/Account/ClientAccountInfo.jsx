import * as React from "react";

import DogCard from "../components/DogCard";
import MoveBtn from "../components/MoveBtn";
import { useNavigate } from "react-router-dom";

import "../assets/css/component.css";
import LeftSidePanel from "../Layout/LeftSidePanel";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { current } from "@reduxjs/toolkit";
import axios from "axios";
import { loadAllClientsInfo, loadAllPetsInfo } from "../redux/client/clientSlice";

const CustomerInfo = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const urlParam = useParams();
  // .find((clientInfo) => clientInfo.Profile_ID == urlParam.ProfileID)
  const [currentClient, setCurrentClient] = React.useState();
  const [petsInfo, setPetsInfo] = React.useState([]);
  const [clientAvatarUrl, setClientAvatarUrl] = React.useState("")
  const [ownedPets, setOwnedPets] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_Pet_Backend_Url}/getAllClientInfos/`)
      .then((response) => {
        // setClientsInfo(response.data);
        dispatch(loadAllClientsInfo(response.data));
      })
      .catch((error) => {});
  }, []);

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

  const clientInfo = useSelector((state) => state.client.allClientsInfo);

  React.useEffect(() => {
    if (clientInfo.length > 0) {
      clientInfo[0].forEach((element) => {
        if (element.Profile_ID == urlParam.ProfileID) {
          setCurrentClient(element);
          setClientAvatarUrl(`/assets/images/clients/${element.avatarName}`)
        }
      });
    }
  }, [clientInfo]);

  let petsList = [];
  React.useEffect(() => {
    if (petsInfo.length > 0) {
      petsInfo.forEach((element) => {
        if (element.Profile_ID == urlParam.ProfileID) {          
          petsList.push(element)
        }
      });

      setOwnedPets(petsList)
    }
  }, [petsInfo])
  
  function goToBalancePage() {
    navigate("/balanceofclient");
  }

  function goToEditPage() {
    navigate(`/registerNewClient/${currentClient.Profile_ID}`);
  }

  function addPetPage() {
    navigate(`/createpetaccount/${currentClient.Profile_ID}`);
  }
  return (
    <>
        <div className="flex flex-col w-5/6 h-screen bg-[#EBFCFF] rounded-lg border-t-2 px-32 mb-3 pt-28 pb-52 px-10 ">
          <div className="mb-7 font-bold text-[#155263] text-3xl">
            Información del Cliente
          </div>
          <div className="flex flex-row h-full mb-18 border rounded-[20px]">
            <div className="info-client flex flex-col w-2/5 bg-cover px-16 pt-14 pb-12 ">
              <div className="flex flex-col justify-around items-center h-3/4 align-middle mb-4">
                {/* <div className="avatar-client"></div> */}
                <img className="object-cover w-64 h-64 rounded-full" src={clientAvatarUrl} ></img>
                <div className="text-3xl font-bold text-white">
                  {currentClient && <span>{currentClient.name}</span>}
                </div>
              </div>
              <hr />
              <div className="flex flex-col text-white text-base mt-2">
                <div className="flex flex-row">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="4"
                      y="6"
                      width="16"
                      height="12"
                      rx="2"
                      stroke="white"
                      stroke-width="1.7"
                    />
                    <path
                      d="M4 9L11.1056 12.5528C11.6686 12.8343 12.3314 12.8343 12.8944 12.5528L20 9"
                      stroke="white"
                      stroke-width="1.7"
                    />
                  </svg>
                  {currentClient && <span>{currentClient.email}</span>}
                </div>
                <div className="flex flex-row text-white">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.1516 13.596L19.4269 15.8713C19.7434 16.1878 19.7434 16.701 19.4269 17.0176C17.7156 18.7289 15.0063 18.9214 13.0702 17.4693L11.9619 16.6381C10.2184 15.3304 8.66955 13.7816 7.3619 12.0381L6.53067 10.9298C5.07858 8.99367 5.27112 6.28443 6.98243 4.57313C7.29896 4.2566 7.81215 4.2566 8.12868 4.57313L10.404 6.84845C10.7945 7.23897 10.7945 7.87214 10.404 8.26266L9.57488 9.09178C9.43063 9.23603 9.39487 9.45641 9.4861 9.63887C10.5409 11.7485 12.2515 13.4591 14.3611 14.5139C14.5436 14.6051 14.764 14.5694 14.9082 14.4251L15.7373 13.596C16.1279 13.2055 16.761 13.2055 17.1516 13.596Z"
                      stroke="white"
                      stroke-width="1.7"
                    />
                  </svg>
                  {currentClient && <span className="hover:cursor-pointer">{currentClient.phone}</span>}
                </div>
              </div>
            </div>
            <div className="w-3/5 px-10 pt-10 bg-[#FFFFFF]">
              <div className="h-1/3">
                <div className="flex h-1/4 title-info items-center justify-start">
                  Personal Information
                </div>
                <hr />
                <div className="mt-5">
                  <span className="text-[#155263]">
                    Address:{" "}
                    {currentClient && <span>{currentClient.address}</span>}
                  </span>
                  <br />
                </div>
              </div>
              <div className="h-2/3">
                <div className="flex h-1/4 title-info title-info items-center justify-start">
                  Pets
                </div>
                <hr />
                <div className="flex flex-row items-center flex-wrap p-4">
                  {ownedPets.length > 0 ? (
                    ownedPets.map((element) => <DogCard key={element._id} name={element.name} avatarName={element.petAvatar} gender={element.gender}/>)
                  ) : null}
                  <button className="view-detail items-center font-bold text-base text-[#FFFFFF] text-center w-36 h-11 bottom-2.5 font-['Poppins'] bg-[#F1B21B] rounded-md px-5   hover:bg-[#FFCA4A] hover:text-[#FFFFFF]" onClick={addPetPage}>
                      ADD A PET
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-end mt-10 gap-4 text-base">
            {/* <MoveBtn name="VOLVER" direction="Back"/>
        <MoveBtn name="EDITAR" direction="Next"/> */}
            <button
              type="submit"
              className="text-sm items-center text-[#3D9FAD] text-center w-36 h-11 bottom-2.5 font-['Poppins'] bg-[#FFFFFF] rounded-md px-5  border-2 border-[#3D9FAD] hover:bg-[#3D9FAD] hover:text-white"
              onClick={goToBalancePage}
            >
              VOLVER
            </button>
            <button
              type="submit"
              className="text-sm items-center text-[#3D9FAD] text-center w-36 h-11 bottom-2.5 font-['Poppins'] bg-[#FFFFFF] rounded-md px-5  border-2 border-[#3D9FAD] hover:bg-[#3D9FAD] hover:text-white"
              onClick={goToEditPage}
            >
              EDITAR
            </button>
          </div>
        </div>
    </>
  );
};

export default CustomerInfo;
