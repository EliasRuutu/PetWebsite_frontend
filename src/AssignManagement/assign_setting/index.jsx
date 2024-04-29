import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";

import {
  loadAllClientsInfo,
  loadAllPetsInfo,
} from "../../redux/client/clientSlice";

import QRcodeGenerater from "../../components/QRcreater";
import QRCard from "../../assets/images/QR/QRCard.png";
import "../../assets/css/component.css";
import petImage from "../../assets/images/avatars/Rectangle 4290.png"; // Import the image file
import uploadQR from "../../assets/images/backgrounds/uploadQR.png";
import ClientContactCard from "../../components/ClientContactCard.jsx";
import LeftSidePanel from "../../components/LeftSidePanel.jsx";
import ClientNameCard from "../../components/clientNameCard";
import AddNewClientCard from "../../components/addNewClientCard";

const PetInfo = () => {
  const urlParam = useParams();
  const dispatch = useDispatch();

  const [file, setFile] = useState(uploadQR);
  const [isUploaded, setNotifyUpload] = useState(false);
  const [profileID, setProfileID] = useState(urlParam.ProfileID);
  const [clientsInfo, setClientsInfo] = useState([]);
  const [currentClient, setCurrentClient] = useState();

  const [petsInfo, setPetsInfo] = React.useState([]);
  const [idTagNumber, setIdTagNumber] = React.useState(urlParam.IdTag);
  const [idTagInfo, setIdTagInfo] = React.useState();
  const [currentPet, setCurrentPet] = useState();

  const [open, setOpen] = React.useState(false);
  const [assignMark, setAssignMark] = React.useState(false);

  const [hideClient, setShowClient] = React.useState(true);
  const [selectedClient, setSelectedClient] = React.useState({
    visible: false,
    client: {},
  });
  const [assignedClientID, setAssignedClientID] = React.useState("");
  const [assignedPetID, setAssignedPetID] = React.useState("");
  const [QRInfo, setQRInfo] = React.useState();
  const openAssignModal = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  let navigator = useNavigate();

  React.useEffect(() => {
    axios
      .get("http://localhost:5000/getAllClientInfos/")
      .then((response) => {
        dispatch(loadAllClientsInfo(response.data));
      })
      .catch((error) => {});

    if (urlParam.success) {
      // const qrInfo = {
      //   idTag: idTagNumber,
      //   clientName:  currentClient.name + " " + currentClient.lastName,
      //   clientEmail: currentClient.email,

      //   petName: currentPet.name,
      //   petGender: currentPet.gender,
      //   petBirthday: currentPet.birthday,
      // }
      // setQRInfo(qrInfo);

      setAssignMark(true);
    }
  }, []);

  React.useEffect(() => {
    axios
      .get("http://localhost:5000/getallpets")
      .then((response) => {
        // setClientsInfo(response.data);
        dispatch(loadAllPetsInfo(response.data));
        setPetsInfo(response.data);
        // if(currentClient && currentPet) {
        // const qrInfo = {
        //   idTag: idTagNumber,
        //   clientName:  currentClient.name + " " + currentClient.lastName,
        //   clientEmail: currentClient.email,

        //   petName: currentPet.name,
        //   petGender: currentPet.gender,
        //   petBirthday: currentPet.birthday,
        // }
        const qrInfo = "sss";
        setQRInfo(qrInfo);
        // }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const allClients = useSelector((state) => state.client.allClientsInfo);

  React.useEffect(() => {
    if (allClients.length > 0) {
      allClients[0].forEach((element) => {
        console.log("client element", allClients[0].length);
        if (element.Profile_ID == profileID) {
          console.log("client element", element);
          setCurrentClient(element);
        }
      });
    }
    console.log("allclients, ", allClients);
  }, [allClients]);

  React.useEffect(() => {
    if (petsInfo.length > 0) {
      petsInfo.forEach((element) => {
        if (element.idTag == idTagNumber) {
          console.log("element", element);
          setCurrentPet(element);
        }
      });
    }
  }, [petsInfo]);
  React.useEffect(() => {
    if (allClients.length > 0) {
      allClients[0].forEach((element) => {
        if (element.Profile_ID == assignedClientID) {
          console.log("client element", element);
          setCurrentClient(element);
        }
      });
    }
  }, [assignedClientID]);

  React.useEffect(() => {
    console.log("currentClient", currentClient);
    // const qrInfo = {
    //   idTag: idTagNumber,
    //   clientName: currentClient.name + " " + currentClient.lastName,
    //   clientEmail: currentClient.email,

    //   // petName: currentPet.name,
    //   // petGender: currentPet.gender,
    //   // petBirthday: currentPet.birthday,
    // };
    // setQRInfo(qrInfo);
  }, [currentClient]);
  React.useEffect(() => {
    console.log("currentPet", currentPet)
    // setAssignedClientID(currentPet.Profile_ID);
  }, [currentPet]);

  function handleChange(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        setFile(event.target.result);
      };
      reader.readAsDataURL(file);
      setNotifyUpload(true);
    }
  }
  const handleUpload = (e) => {
    const input = document.createElement("input");
    input.type = "file";
    input.onchange = (e) => handleChange(e);
    input.click();
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  const toggleShow = () => {
    setShowClient(!hideClient);
  };

  const hideList = () => {
    setShowClient(true);
  };

  const selectClient = (id) => {
    allClients[0].forEach((element) => {
      if (element.Profile_ID == id) {
        setSelectedClient({ visible: true, client: element });
      }
    });
  };

  const doAssign = () => {
    if (selectedClient.client) {
      const data = {
        Tag_ID: idTagNumber,
        Assigned_Client: selectedClient.client.Profile_ID,
      };

      axios
        .put(`http://localhost:5000/assign`, data)
        .then((res) => {
          // Handle the response data here
          if (res.status == 200) {
            const assignedtagInfo = res.data.tagInfo;
            setIdTagInfo(assignedtagInfo);
            setAssignedClientID(assignedtagInfo.Assigned_Client);
          }
          // setAssignMark(true);
          setOpen(false);
        })
        .catch((error) => {
          // Handle errors here
        });
    }
  };

  return (
    <>
      <div className="w-full flex mt-1">
        <LeftSidePanel />
        <div className="flex flex-col w-5/6 h-screen  bg-[#EBFCFF]  border-t-2 px-32 py-20 ">
          <div className="mb-7 font-bold text-[#155263] rounded-lg text-3xl">
            ID Tag Details
          </div>
          <div className="flex flex-row h-full rounded-lg mb-18">
            <div className="info-client flex flex-col w-1/3 bg-cover px-28 pt-10 pb-40">
              <div className="flex flex-col justify-center items-left h-5/6 gap-2 align-middle">
                {/* <div
                  className="panel-QR flex flex-col justify-center items-center  hover: cursor-pointer px-2"
                  onClick={handleUpload}
                >
                  <img src={file} height={128} alt="" className="" />
                </div> */}
                <div className="panel-QR flex flex-col justify-center items-center  hover: cursor-pointer px-2">
                  {QRInfo && urlParam.success ? (
                    <>
                      <QRcodeGenerater info={QRInfo} />
                      <div className="flex flex-row justify-center items-center mt-10 gap-2 hover: cursor-pointer hover:text-[#3D9FAD]">
                        <svg
                          className=""
                          width="16"
                          height="18"
                          viewBox="0 0 16 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M1.27439 5.96627C1.64024 5.60042 2.23341 5.60042 2.59926 5.96627L6.69179 10.0588L6.69179 0.936915C6.69179 0.419522 7.11122 9.18199e-05 7.62862 9.18425e-05C8.14601 9.18651e-05 8.56544 0.419522 8.56544 0.936915L8.56544 10.0588L12.658 5.96627C13.0238 5.60042 13.617 5.60042 13.9828 5.96627C14.3487 6.33213 14.3487 6.92529 13.9828 7.29114L8.29105 12.9829C7.9252 13.3488 7.33203 13.3488 6.96618 12.9829L1.27439 7.29114C0.908537 6.92529 0.908537 6.33213 1.27439 5.96627Z"
                            fill="white"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0 17.0632C0 17.5806 0.41943 18 0.936823 18H14.2177C14.7351 18 15.1545 17.5806 15.1545 17.0632C15.1545 16.5458 14.7351 16.1264 14.2177 16.1264H0.936823C0.41943 16.1264 0 16.5458 0 17.0632Z"
                            fill="white"
                          />
                        </svg>
                        <span className="text-white font-bold">
                          Descargar Codigo QR
                        </span>
                      </div>
                    </>
                  ) : (
                    <img src={file} height={128} alt="" className="" />
                  )}
                </div>
              </div>
            </div>
            <div className="w-2/3 px-10 bg-[#FFFFFF]">
              <div className="flex flex-col h-1/2">
                <div className="flex flex-row w-full h-4/5 mt-10">
                  <div className="w-1/5">
                    <img src={QRCard} alt="" width="300px" className="" />
                  </div>
                  <div className="w-4/5 ml-10">
                    <div className="">
                      <div className="text-lg font-bold text-[#155263] pb-4">
                        Details
                      </div>
                      <hr />
                      <div className="text-base pt-4">
                        <p className="text-[#155263] pb-2">
                          <b>Purchase date:</b>{" "}
                          {/* {currentPet && <span>{currentPet.birthday}</span>} */}
                          <span className="">2/4/2024</span>
                        </p>
                        <p className="text-[#155263] pb-2">
                          <b>Status:</b> &nbsp;
                          {/* {currentPet && <span>{currentPet.microchip}</span>} */}
                          {!assignMark ? (
                            <span className="bg-[#E7E7E7] rounded-full px-2 py-1">
                              Unassigned
                            </span>
                          ) : (
                            <span className="bg-[#3D9FAD] text-white rounded-full px-2 py-1">
                              Assigned
                            </span>
                          )}
                        </p>
                        <p className="text-[#155263] pb-2">
                          <b>Tag ID: </b>
                          {/* {currentPet && <span>{currentPet.microchip}</span>} */}
                          <span className="">{idTagNumber}</span>
                        </p>
                        <p className="text-[#155263] pb-2">
                          <b>Times scanned: </b>
                          {/* {currentPet && <span>{currentPet.microchip}</span>} */}
                          <span className="">0</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-1/2">
                <p className="flex h-1/4 text-lg font-bold text-[#155263] items-center justify-start">
                  Client
                </p>
                <hr />
                <div className="flex flex-row flex-wrap w-2/3 pt-5 mb-5">
                  {idTagInfo && idTagInfo.IsAssigned ? (
                    <ClientContactCard info={currentClient} />
                  ) : (
                    <button
                      className="view-detail items-center font-bold text-base text-[#FFFFFF] text-center w-36 h-11 bottom-2.5 font-['Poppins'] bg-[#F1B21B] rounded-md px-5   hover:bg-[#FFCA4A] hover:text-[#FFFFFF]"
                      onClick={openAssignModal}
                    >
                      ASSIGN
                    </button>
                  )}
                </div>

                {idTagInfo && idTagInfo.IsAssigned ? (
                  <>
                    <div className="">
                      <hr />
                      <p className="flex h-1/4 text-lg font-bold text-[#155263] items-center justify-start">
                        Pet
                      </p>
                      <button
                        className="view-detail items-center font-bold text-base text-[#FFFFFF] text-center w-36 h-11 bottom-2.5 font-['Poppins'] bg-[#F1B21B] rounded-md px-5   hover:bg-[#FFCA4A] hover:text-[#FFFFFF]"
                        onClick={() => {
                          navigator(
                            `/createpetaccount/${assignedClientID}/${idTagNumber}`
                          );
                        }}
                      >
                        ADD A PET
                      </button>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-end mt-10 text-base gap-4">
            {/* <MoveBtn name="VOLVER" direction="Back"/>
        <MoveBtn name="EDITAR" direction="Next"/> */}

            <button
              type="submit"
              className="text-sm items-center text-[#3D9FAD] text-center w-36 h-11 bottom-2.5 font-['Poppins'] bg-[#FFFFFF] rounded-md px-5  border-2 border-[#3D9FAD] hover:bg-[#3D9FAD] hover:text-white"
              onClick={() => navigator("/idtags")}
            >
              Back
            </button>
          </div>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={style}
              className="flex flex-col justify-start items-left w-96 h-96 gap-4 rounded-[20px]"
            >
              <div className="title-info">
                <p>Assign Client</p>
              </div>
              <label className="text-[#155263]">Client</label>
              <div className="flex flex-row gap-4">
                <div className="grow ">
                  <div className="flex flex-row justify-around items-center border w-3/4 p-2">
                    <div className="grow text-[#D0D0D0]">
                      {selectedClient && selectedClient.visible ? (
                        <ClientNameCard
                          client={selectedClient.client}
                          hide={hideList}
                          select={selectClient}
                        />
                      ) : (
                        "Select a client..."
                      )}
                    </div>
                    <div
                      className="grow-0 mr-0 cursor-pointer"
                      onClick={toggleShow}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 10L12 15L17 10"
                          stroke="#D0D0D0"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div
                    className={`w-2/3 m-2 overflow-y-auto overflow-x-hidden h-40 ${
                      hideClient ? "hidden" : ""
                    }`}
                  >
                    {allClients[0] &&
                      allClients[0].map((client) => (
                        <ClientNameCard
                          client={client}
                          hide={hideList}
                          select={selectClient}
                        />
                      ))}
                    <AddNewClientCard />
                  </div>
                </div>
                <div className="flex flex-row gap-4 bottom-5">
                  <button
                    className="delete-card items-center font-bold text-base text-[#FFFFFF] text-center w-36 h-11 bottom-2.5 font-['Poppins'] bg-[#3D9FAD] rounded-md px-5 hover:bg-[#155263] hover:text-[#FFFFFF]"
                    onClick={doAssign}
                  >
                    ASSIGN
                  </button>
                </div>
              </div>
            </Box>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default PetInfo;
