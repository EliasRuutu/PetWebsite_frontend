import * as React from "react";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import LeftSidePanel from "../components/LeftSidePanel";
import PetsCard from "../components/PetCard";
import dogAvatar from "../assets/images/avatars/Group 385.png";
import QR from "../assets/images/QR/QR.png";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loadAllClientsInfo, loadAllPetsInfo } from "../redux/client/clientSlice";

const AssignedPetsList = () => {
  const [open, setOpen] = React.useState(false);
  const [petsInfo, setPetsInfo] = React.useState([]);
  const [clientsInfo, setClientsInfo ] = React.useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios
    .get("http://localhost:5000/getAllClientInfos/")
    .then((response) => {
      dispatch(loadAllClientsInfo(response.data));
    })
    .catch((error) => {});
  }, []); 

  React.useEffect(() => {
    axios
      .get("http://localhost:5000/getallpets")
      .then((response) => {
        // setClientsInfo(response.data);
        dispatch(loadAllPetsInfo(response.data));
        setPetsInfo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    }, []);
    
    const allclients = useSelector((state) => state.client.allClientsInfo);
    React.useEffect(() => {
    console.log("allclients",allclients);
    setClientsInfo(allclients)
  },[allclients])
  
  React.useEffect(() => {
    
    console.log("clientsInfo", clientsInfo)
  }, [clientsInfo])
  // React.useEffect(() => {
  //   if (clientInfo.length > 0) {
  //     clientInfo[0].forEach((element) => {
  //       if (element.Profile_ID == petOwnerID) {
  //         setCurrentClient(element);
  //         // console.log("currentClient==>", currentClient)
  //       }
  //     });
  //   }
  // }, [clientInfo]);
  // React.useEffect([clientsInfo]);
  const navigator = useNavigate();
  const style = {
    backgroundImage: "url(assets/QR_Box.png)",
    backgroundSize: "cover",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    padding: 10,
    color: "white",
    // boxShadow: 24,
    // p: 4,
  };

  return (
    <div className="w-full flex top-10">
      <LeftSidePanel />
      <div className="flex w-5/6 h-screen mt-[130px] flex-col border-t-2 px-20 mb-3">
        <div className="flex flex-row">
          <h1 className="title-info font-['Poppins'] py-7 text-[#155263] text-2xl font-bold w-1/2">
            Mascotas Registradas
          </h1>
          <div className="w-1/2 flex flex-row justify-end">
            <label
              for="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative flex flex-row py-7 w-5/6 justify-between mr-4">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full px-4 py-2 ps-10 text-sm text-gray-900 rounded-lg bg-gray-50 focus:ring-blue-500 dark:bg-[#F8F8F8] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 "
                placeholder="Buscar..."
                required
              />
            </div>
            <div className="flex flex-row py-7 w-1/6 justify-end">
              <button
                type="submit"
                class="flex text-sm items-center text-white bottom-2.5 font-['Poppins'] bg-[#F1B21B] rounded-md px-5 hover:bg-white hover:text-[#F1B21B] hover:border hover:border-[#F1B21B]"
              >
                AGREGAR
              </button>
            </div>
          </div>
        </div>
        <div className="">
        {clientsInfo && petsInfo.map((pet) => (
            <PetsCard key={pet.id} petsInfo={pet} onClick={handleOpen} clientsInfo={clientsInfo} />
          ))}
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            style={style}
            className="detailed-info flex flex-col justify-center items-center border-none outline-none items-center w-96 h-96 px-10 gap-2 rounded-[20px]"
          >
            <div className="flex flex-row justify-around w-full h-full p-10  gap-4 ">
              <div className="QRcode bg-white p-4 rounded-[20px]">
                <img src={QR} alt="" className="" />
              </div>
              <div className="pet-info flex flex-col justify-arround p-10 w-full">
                <div className="flex flex-row justify-center items-center gap-2 mb-2 h-1/2">
                  <img src={dogAvatar} alt="pet" className="" />
                  <span className="text-3xl font-bold">Bella</span>
                </div>
                <div className="w-full">
                  <span className="pet-description ">Edad: 3 años</span>
                </div>
                <hr />
                <div className="flex flex-row gap-4 mt-4">
                  <svg
                    width="13"
                    height="20"
                    viewBox="0 0 13 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.6658 6.89381C12.6665 5.76346 12.3215 4.65689 11.6721 3.70675C11.0226 2.7566 10.0964 2.00321 9.00427 1.53688C7.91217 1.07056 6.70061 0.911083 5.51482 1.07758C4.32902 1.24408 3.2193 1.72948 2.31871 2.4756C1.41812 3.22172 0.764854 4.19689 0.437237 5.28422C0.10962 6.37155 0.121557 7.52489 0.471602 8.60599C0.821648 9.68709 1.49495 10.6501 2.4108 11.3795C3.32666 12.1089 4.44619 12.5738 5.63521 12.7185V15.3668H4.15018C3.93862 15.3668 3.73574 15.446 3.58614 15.587C3.43655 15.7281 3.35252 15.9194 3.35252 16.1188C3.35252 16.3183 3.43655 16.5096 3.58614 16.6506C3.73574 16.7917 3.93862 16.8709 4.15018 16.8709H5.63521V18.2711C5.64576 18.4641 5.73453 18.6459 5.88316 18.779C6.0318 18.9121 6.22896 18.9863 6.43395 18.9863C6.63894 18.9863 6.8361 18.9121 6.98474 18.779C7.13337 18.6459 7.22213 18.4641 7.23269 18.2711V16.8709H8.71772C8.92928 16.8709 9.13216 16.7917 9.28175 16.6506C9.43135 16.5096 9.5154 16.3183 9.5154 16.1188C9.5154 15.9194 9.43135 15.7281 9.28175 15.587C9.13216 15.446 8.92928 15.3668 8.71772 15.3668H7.23269V12.7185C8.73335 12.5337 10.1117 11.8411 11.1111 10.7696C12.1106 9.69811 12.6631 8.32072 12.6658 6.89381ZM1.95871 6.89381C1.95829 6.059 2.22045 5.24282 2.71206 4.5485C3.20367 3.85419 3.90263 3.31293 4.72053 2.99318C5.53843 2.67344 6.43854 2.58957 7.307 2.7522C8.17546 2.91482 8.97326 3.31662 9.5995 3.90679C10.2257 4.49695 10.6523 5.24896 10.8252 6.06771C10.998 6.88645 10.9095 7.73515 10.5708 8.50646C10.232 9.27776 9.65831 9.93703 8.92214 10.4009C8.18596 10.8647 7.32043 11.1123 6.43501 11.1123C5.24853 11.1112 4.11094 10.6665 3.27177 9.87568C2.4326 9.08485 1.96039 8.01248 1.95871 6.89381Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.8658 6.89419C12.863 8.37309 12.2903 9.79869 11.2574 10.906C10.264 11.971 8.91026 12.6719 7.43269 12.893V15.1668H8.71772C8.97865 15.1668 9.23108 15.2644 9.41896 15.4415C9.60723 15.619 9.7154 15.8624 9.7154 16.1188C9.7154 16.3753 9.60723 16.6186 9.41896 16.7962C9.23108 16.9733 8.97865 17.0709 8.71772 17.0709H7.43269V18.282C7.41913 18.5299 7.30491 18.7608 7.11816 18.928C6.93175 19.0949 6.68669 19.1863 6.43395 19.1863C6.18121 19.1863 5.93614 19.0949 5.74974 18.928C5.56299 18.7608 5.44906 18.5299 5.43551 18.282L5.43491 18.2711L5.43521 17.0709H4.15018C3.88925 17.0709 3.63682 16.9733 3.44894 16.7962C3.26066 16.6186 3.15252 16.3753 3.15252 16.1188C3.15252 15.8624 3.26066 15.619 3.44894 15.4415C3.63682 15.2644 3.88925 15.1668 4.15018 15.1668H5.43521V12.8933C4.27587 12.7214 3.18632 12.2528 2.2862 11.5359C1.3406 10.7828 0.643858 9.78725 0.281328 8.6676C-0.0812449 7.54781 -0.0936252 6.35284 0.245741 5.22652C0.585069 4.10032 1.26117 3.09202 2.19112 2.32159C3.12096 1.55124 4.26543 1.05104 5.48701 0.879522C6.70856 0.708005 7.95692 0.872193 9.08281 1.35295C10.2088 1.83374 11.1656 2.61125 11.8372 3.59389C12.5089 4.57667 12.8666 5.72274 12.8658 6.89419ZM5.63521 12.7185C4.44619 12.5738 3.32666 12.1089 2.4108 11.3795C1.49495 10.6501 0.821648 9.68709 0.471602 8.60599C0.121557 7.52489 0.10962 6.37155 0.437237 5.28422C0.764854 4.19689 1.41812 3.22172 2.31871 2.4756C3.2193 1.72948 4.32902 1.24408 5.51482 1.07758C6.70061 0.911083 7.91217 1.07056 9.00427 1.53688C10.0964 2.00321 11.0226 2.7566 11.6721 3.70675C12.3215 4.65689 12.6665 5.76346 12.6658 6.89381C12.6631 8.32072 12.1106 9.69811 11.1111 10.7696C10.1117 11.8411 8.73335 12.5337 7.23269 12.7185V15.3668H8.71772C8.92928 15.3668 9.13216 15.446 9.28175 15.587C9.43135 15.7281 9.5154 15.9194 9.5154 16.1188C9.5154 16.3183 9.43135 16.5096 9.28175 16.6506C9.13216 16.7917 8.92928 16.8709 8.71772 16.8709H7.23269V18.2711C7.22213 18.4641 7.13337 18.6459 6.98474 18.779C6.8361 18.9121 6.63894 18.9863 6.43395 18.9863C6.22896 18.9863 6.0318 18.9121 5.88316 18.779C5.73453 18.6459 5.64576 18.4641 5.63521 18.2711V16.8709H4.15018C3.93862 16.8709 3.73574 16.7917 3.58614 16.6506C3.43655 16.5096 3.35252 16.3183 3.35252 16.1188C3.35252 15.9194 3.43655 15.7281 3.58614 15.587C3.73574 15.446 3.93862 15.3668 4.15018 15.3668H5.63521V12.7185ZM2.87529 4.66408C2.40717 5.32521 2.15835 6.10104 2.15871 6.89351C2.16031 7.9553 2.60841 8.9757 3.40894 9.73012C4.20987 10.4849 5.29801 10.9113 6.43519 10.9123C7.28352 10.9123 8.11191 10.675 8.81552 10.2317C9.51908 9.78837 10.0655 9.15951 10.3877 8.42603C10.7097 7.69272 10.7937 6.88658 10.6295 6.10903C10.4653 5.33137 10.0598 4.61538 9.46233 4.05234C8.86475 3.48918 8.10207 3.10455 7.27019 2.94878C6.43828 2.793 5.57617 2.87343 4.79335 3.17946C4.0106 3.48546 3.34355 4.00272 2.87529 4.66408ZM6.43501 11.1123C7.32043 11.1123 8.18596 10.8647 8.92214 10.4009C9.65831 9.93703 10.232 9.27776 10.5708 8.50646C10.9095 7.73515 10.998 6.88645 10.8252 6.06771C10.6523 5.24896 10.2257 4.49695 9.5995 3.90679C8.97326 3.31662 8.17546 2.91482 7.307 2.7522C6.43854 2.58957 5.53843 2.67344 4.72053 2.99318C3.90263 3.31293 3.20367 3.85419 2.71206 4.5485C2.22045 5.24282 1.95829 6.059 1.95871 6.89381C1.96039 8.01248 2.4326 9.08485 3.27177 9.87568C4.11094 10.6665 5.24853 11.1112 6.43501 11.1123Z"
                      fill="white"
                    />
                  </svg>
                  <span>Hembra</span>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <button className="view-detail items-center font-bold text-base text-[#3D9FAD] text-center w-36 h-11 bottom-2.5 font-['Poppins'] bg-[#FFFFFF] rounded-md px-5  border-2 border-[#3D9FAD] hover:bg-[#3D9FAD] hover:text-[#FFFFFF]">
                VOLVER
              </button>
              <button className="delete-card items-center font-bold text-base text-[#155263] text-center w-36 h-11 bottom-2.5 font-['Poppins'] bg-[#FFFFFF] rounded-md px-5  border-2 border-[#155263] hover:bg-[#155263] hover:text-[#FFFFFF]">
                DESCARGAR
              </button>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default AssignedPetsList;
