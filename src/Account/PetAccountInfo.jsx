import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  loadAllClientsInfo,
} from "../redux/client/clientSlice";
import axios from "axios";
import ClientContactCard from "../components/ClientContactCard.jsx";
import QRcodeGenerater from "../components/QRgenerator";
import "../assets/css/component.css";

const PetInfo = () => {
  const urlParam = useParams();
  const [isUploaded, setNotifyUpload] = useState(false);
  const [profileID, setProfileID] = useState(urlParam.ProfileID);
  const [idTag, setIdTag] = React.useState(urlParam.IdTag);
  const [currentClient, setCurrentClient] = useState();
  const [currentPet, setCurrentPet] = useState();
  const [qrCodeInfo, setQRCodeInfo] = React.useState(
    `http://www.pawtrack.pet/tag/${urlParam.IdTag}`
  );
  const navigator = useNavigate();

  React.useEffect(() => {
    if(profileID && idTag) {
      axios.get(`${process.env.REACT_APP_Pet_Backend_Url}/getClientByProfileID/${profileID}`)
      .then((res) => {
        setCurrentClient(res.data)
      })
      .catch(() => {

      });

      axios.get(`${process.env.REACT_APP_Pet_Backend_Url}/getPetByTag/${idTag}`)
      .then((res) => {
        setCurrentPet(res.data.pet)
      })
      .catch(() => {

      })
    }
  }, [profileID, idTag]);

  const handleDownloadQRcode = () => {
    const svgElements = document.getElementsByClassName("QRcode-to-download");
    
    // Create an image element and set its source to the SVG data
    const img = new Image();
    const svgContent = new XMLSerializer().serializeToString(svgElements[0]);
    const svgBlob = new Blob([svgContent], { type: "image/svg+xml;charset=utf-8" });
    const DOMURL = window.URL || window.webkitURL || window;
    const url = DOMURL.createObjectURL(svgBlob);
  
    img.onload = () => {
      // Once the image is loaded, draw it on a canvas
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
  
      // Convert canvas content to PNG and trigger download
      const pngUrl = canvas.toDataURL("image/png");
      const link = document.createElement('a');
      link.href = pngUrl;
      link.download = `${idTag}.png`; // Making sure idTag is defined correctly
      document.body.appendChild(link);
      link.click();
  
      // Clean up resources
      DOMURL.revokeObjectURL(pngUrl);
      document.body.removeChild(link);
      canvas.remove(); // Remove canvas once the download is complete
    };
    
    // Set the image source to be the blob URL and start loading it
    img.src = url;
  
    // Release the created object URL after the image has been handled
    img.onloadend = () => DOMURL.revokeObjectURL(url);
  };
  
  return (
    <>
        <div className="flex flex-col w-5/6 h-screen  bg-[#EBFCFF] rounded-lg border-t-2 px-32 mb-3 pt-20 pb-52 px-10 ">
          <div className="mb-7 font-bold text-[#155263] text-3xl">
            Información de Mascota
          </div>
          <div className="flex flex-row h-full mb-18">
            <div className="info-client flex flex-col w-1/3 bg-cover px-28 pt-40 pb-12">
              <div className="flex flex-col justify-center items-left h-5/6 gap-2 align-middle">
                <div className="panel-QR flex flex-col justify-center items-center  hover: cursor-pointer px-2">
                  {qrCodeInfo && <QRcodeGenerater info={qrCodeInfo} />}
                </div>
                <div
                  className="flex flex-row justify-center items-center mt-10 gap-2 hover: cursor-pointer hover:text-[#3D9FAD]"
                  onClick={handleDownloadQRcode}
                >
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
                  <span className="text-white font-bold">Download QR code</span>
                </div>
                {isUploaded && (
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
                )}
                <div className="flex flex-row  items-left text-3xl mt-5 font-bold text-white">
                  {currentPet && (
                    <span className="ml-0">{currentPet.name}</span>
                  )}
                </div>
                
                {currentPet && (
                  <>
                  <hr />
                  <div className="flex flex-row items-center text-white text-base pt-4">
                    <div className="pr-2">
                      <svg
                        width="13"
                        height="19"
                        viewBox="0 0 13 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.6658 6.08034C12.6665 4.94999 12.3215 3.84341 11.6721 2.89327C11.0226 1.94313 10.0964 1.18974 9.00427 0.723408C7.91217 0.257081 6.70061 0.0976061 5.51482 0.264103C4.32902 0.4306 3.2193 0.916002 2.31871 1.66212C1.41812 2.40824 0.764854 3.38341 0.437237 4.47074C0.10962 5.55807 0.121557 6.71141 0.471602 7.79251C0.821648 8.87361 1.49495 9.83659 2.4108 10.566C3.32666 11.2954 4.44619 11.7603 5.63521 11.905V14.5533H4.15018C3.93862 14.5533 3.73574 14.6325 3.58614 14.7736C3.43655 14.9146 3.35252 15.1059 3.35252 15.3054C3.35252 15.5048 3.43655 15.6961 3.58614 15.8372C3.73574 15.9782 3.93862 16.0574 4.15018 16.0574H5.63521V17.4576C5.64576 17.6506 5.73453 17.8324 5.88316 17.9655C6.0318 18.0986 6.22896 18.1729 6.43395 18.1729C6.63894 18.1729 6.8361 18.0986 6.98474 17.9655C7.13337 17.8324 7.22213 17.6506 7.23269 17.4576V16.0574H8.71772C8.92928 16.0574 9.13216 15.9782 9.28175 15.8372C9.43135 15.6961 9.5154 15.5048 9.5154 15.3054C9.5154 15.1059 9.43135 14.9146 9.28175 14.7736C9.13216 14.6325 8.92928 14.5533 8.71772 14.5533H7.23269V11.905C8.73335 11.7202 10.1117 11.0276 11.1111 9.95612C12.1106 8.88463 12.6631 7.50725 12.6658 6.08034ZM1.95871 6.08034C1.95829 5.24552 2.22045 4.42934 2.71206 3.73503C3.20367 3.04071 3.90263 2.49945 4.72053 2.17971C5.53843 1.85996 6.43854 1.7761 7.307 1.93872C8.17546 2.10134 8.97326 2.50314 9.5995 3.09331C10.2257 3.68347 10.6523 4.43548 10.8252 5.25423C10.998 6.07298 10.9095 6.92167 10.5708 7.69298C10.232 8.46428 9.65831 9.12355 8.92214 9.58739C8.18596 10.0512 7.32043 10.2988 6.43501 10.2988C5.24853 10.2977 4.11094 9.85303 3.27177 9.0622C2.4326 8.27137 1.96039 7.199 1.95871 6.08034Z"
                          fill="white"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.8658 6.08071C12.863 7.55961 12.2903 8.98522 11.2574 10.0925C10.264 11.1575 8.91026 11.8584 7.43269 12.0795V14.3533H8.71772C8.97865 14.3533 9.23108 14.4509 9.41896 14.628C9.60723 14.8056 9.7154 15.0489 9.7154 15.3054C9.7154 15.5618 9.60723 15.8052 9.41896 15.9827C9.23108 16.1598 8.97865 16.2574 8.71772 16.2574H7.43269V17.4685C7.41913 17.7164 7.30491 17.9473 7.11816 18.1145C6.93175 18.2815 6.68669 18.3729 6.43395 18.3729C6.18121 18.3729 5.93614 18.2815 5.74974 18.1145C5.56299 17.9473 5.44906 17.7164 5.43551 17.4685L5.43491 17.4576L5.43521 16.2574H4.15018C3.88925 16.2574 3.63682 16.1598 3.44894 15.9827C3.26066 15.8052 3.15252 15.5618 3.15252 15.3054C3.15252 15.0489 3.26066 14.8056 3.44894 14.628C3.63682 14.4509 3.88925 14.3533 4.15018 14.3533H5.43521V12.0798C4.27587 11.9079 3.18632 11.4393 2.2862 10.7224C1.3406 9.96934 0.643858 8.97378 0.281328 7.85412C-0.0812449 6.73433 -0.0936252 5.53937 0.245741 4.41304C0.585069 3.28685 1.26117 2.27855 2.19112 1.50811C3.12096 0.737759 4.26543 0.237566 5.48701 0.0660457C6.70856 -0.105472 7.95692 0.0587167 9.08281 0.539475C10.2088 1.02026 11.1656 1.79778 11.8372 2.78041C12.5089 3.7632 12.8666 4.90927 12.8658 6.08071ZM5.63521 11.905C4.44619 11.7603 3.32666 11.2954 2.4108 10.566C1.49495 9.83659 0.821648 8.87361 0.471602 7.79251C0.121557 6.71141 0.10962 5.55807 0.437237 4.47074C0.764854 3.38341 1.41812 2.40824 2.31871 1.66212C3.2193 0.916002 4.32902 0.4306 5.51482 0.264103C6.70061 0.0976061 7.91217 0.257081 9.00427 0.723408C10.0964 1.18974 11.0226 1.94313 11.6721 2.89327C12.3215 3.84341 12.6665 4.94999 12.6658 6.08034C12.6631 7.50725 12.1106 8.88463 11.1111 9.95612C10.1117 11.0276 8.73335 11.7202 7.23269 11.905V14.5533H8.71772C8.92928 14.5533 9.13216 14.6325 9.28175 14.7736C9.43135 14.9146 9.5154 15.1059 9.5154 15.3054C9.5154 15.5048 9.43135 15.6961 9.28175 15.8372C9.13216 15.9782 8.92928 16.0574 8.71772 16.0574H7.23269V17.4576C7.22213 17.6506 7.13337 17.8324 6.98474 17.9655C6.8361 18.0986 6.63894 18.1729 6.43395 18.1729C6.22896 18.1729 6.0318 18.0986 5.88316 17.9655C5.73453 17.8324 5.64576 17.6506 5.63521 17.4576V16.0574H4.15018C3.93862 16.0574 3.73574 15.9782 3.58614 15.8372C3.43655 15.6961 3.35252 15.5048 3.35252 15.3054C3.35252 15.1059 3.43655 14.9146 3.58614 14.7736C3.73574 14.6325 3.93862 14.5533 4.15018 14.5533H5.63521V11.905ZM2.87529 3.8506C2.40717 4.51173 2.15835 5.28756 2.15871 6.08004C2.16031 7.14183 2.60841 8.16223 3.40894 8.91665C4.20987 9.67144 5.29801 10.0978 6.43519 10.0988C7.28352 10.0988 8.11191 9.8615 8.81552 9.41818C9.51908 8.97489 10.0655 8.34604 10.3877 7.61256C10.7097 6.87925 10.7937 6.07311 10.6295 5.29555C10.4653 4.51789 10.0598 3.8019 9.46233 3.23886C8.86475 2.6757 8.10207 2.29107 7.27019 2.1353C6.43828 1.97953 5.57617 2.05995 4.79335 2.36598C4.0106 2.67198 3.34355 3.18925 2.87529 3.8506ZM6.43501 10.2988C7.32043 10.2988 8.18596 10.0512 8.92214 9.58739C9.65831 9.12355 10.232 8.46428 10.5708 7.69298C10.9095 6.92167 10.998 6.07298 10.8252 5.25423C10.6523 4.43548 10.2257 3.68347 9.5995 3.09331C8.97326 2.50314 8.17546 2.10134 7.307 1.93872C6.43854 1.7761 5.53843 1.85996 4.72053 2.17971C3.90263 2.49945 3.20367 3.04071 2.71206 3.73503C2.22045 4.42934 1.95829 5.24552 1.95871 6.08034C1.96039 7.199 2.4326 8.27137 3.27177 9.0622C4.11094 9.85303 5.24853 10.2977 6.43501 10.2988Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="text-lg">
                      <b>{currentPet.gender}</b>
                    </div>
                  </div>
                  </>
                )}
              </div>
            </div>
            <div className="w-2/3 px-10 bg-[#FFFFFF]">
              <div className="flex flex-col h-1/2">
                <div className="flex flex-row w-full h-4/5 mt-10">
                  {idTag && currentPet ? (
                    <>
                      <div className="flex flex-row w-full h-4/5 mt-10">
                        <div className="w-1/5 ">
                          <img
                            className="w-30 h-30 border-black rounded-lg border-1"
                            src={`/assets/images/pets/${
                              currentPet && currentPet.petAvatar
                            }`}
                            alt=""
                          />
                        </div>
                        <div className="w-4/5 ml-10">
                          <div className="">
                            <div className="title-info pb-4">Pet details</div>
                            <hr />
                            <div className="text-base pt-4">
                              <p className="text-[#155263]">
                                <b>Birthday:</b>{" "}
                                {currentPet && (
                                  <span>{currentPet.birthday}</span>
                                )}
                              </p>
                              <p className="text-[#155263]">
                                <b>Microchip:</b> &nbsp;
                                {currentPet && (
                                  <span>{currentPet.microchip}</span>
                                )}
                              </p>
                              <p className="text-[#155263]">
                                <b>Special Condition: </b>
                                {currentPet && (
                                  <span>{currentPet.microchip}</span>
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div>
                      {" "}
                      <p className="title-info pb-4">
                        No Pet information.
                      </p>{" "}
                    </div>
                  )}
                </div>
              </div>
              <div className="h-1/2">
                <div className="flex h-1/4 title-info title-info items-center justify-start">
                  Dueño
                </div>
                <hr />
                <div className="flex flex-row flex-wrap w-2/3 pt-5">
                  {currentClient?(<ClientContactCard info={currentClient} />): null}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-end mt-10 text-base gap-4">
            <button
              type="submit"
              className="text-sm items-center text-[#3D9FAD] text-center w-36 h-11 bottom-2.5 font-['Poppins'] bg-[#FFFFFF] rounded-md px-5  border-2 border-[#3D9FAD] hover:bg-[#3D9FAD] hover:text-white"
              onClick={() => navigator("/assignedpetslist")}
            >
              Back
            </button>
            <button
              type="submit"
              className="text-sm items-center text-[#3D9FAD] text-center w-36 h-11 bottom-2.5 font-['Poppins'] bg-[#FFFFFF] rounded-md px-5  border-2 border-[#3D9FAD] hover:bg-[#3D9FAD] hover:text-white"
              onClick={() => navigator(`/createpetaccount/${profileID}/${idTag}`)}
            >
              Editor
            </button>
          </div>
        </div>
    </>
  );
};

export default PetInfo;
