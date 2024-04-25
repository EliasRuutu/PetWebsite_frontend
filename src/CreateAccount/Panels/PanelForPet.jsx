import * as React from "react";
import { useState } from "react";
import { Input } from "@material-tailwind/react";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import DogAvatar from "../../assets/images/avatars/dog-avatar.png";
import { useDispatch } from "react-redux";
import { uploadPetInfo } from "../../redux/client/clientSlice";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const PanelForPet = () => {
  const navigator = useNavigate()
  
  const urlParams = useParams()

  const dispatch = useDispatch();

  const [file, setFile] = useState(DogAvatar);
  
  const [newPet, setNewPet] = React.useState({
    name: '',
    gender: '',
    birthday: '',
    microchip: '',
    specialDCondition: '',
    petAvatar: ''
  });

  function updateClientProfile(e) {
    setNewPet({ ...newPet, [e.target.name]: e.target.value});
  }

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
    setNewPet({...newPet, petAvatar: e.target.files[0]});
  }
  const handleUpload = (e) => {
    const input = document.createElement("input");
    input.type = "file";
    input.onchange = (e) => handleChange(e);
    input.click();
  };

  const updatePetProfile =() => {
    if(newPet.name.trim() === ""  || 
        newPet.gender === "" ||
        newPet.birthday === "" ||
        newPet.microchip === "" ||
        newPet.specialDCondition === "" ||
        !newPet.petAvatar
        ) {
      alert("input all the data")
    } else {
      const formData = new FormData();
      formData.append("Profile_ID", urlParams.ProfileID)
      formData.append("name", newPet.name);
      formData.append("gender", newPet.gender);
      formData.append("birthday", newPet.birthday);
      formData.append("microchip", newPet.microchip);
      formData.append("specialDCondition", newPet.specialDCondition);
      formData.append("petAvatar", newPet.petAvatar);

      axios
      .post("http://localhost:5000/pet", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        // toast.error("Plese enter the data correctly", {
        //   position: "bottom-right",
        //   autoClose: 1,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "light",
        // });
        dispatch(uploadPetInfo(response.data));
        alert("successfully Pet registerd");
        navigator(`/petaccountinfo/${urlParams.ProfileID}`);
      }).catch((error) => {
        console.log(error)
      });
    }
  }

  const backToClientInfo = () => {
    navigator(`/petaccountinfo/${urlParams.ProfileID}`);
  }
  const select_items = ["1", "2", "3"];
  return (
    <>
      <div className="flex flex-row bg-[#FFFFFF] h-full p-6 items-center rounded-0">
        <div className="flex flex-row items-start w-1/5 overflow-hidden h-[160px] relative">
          <input type="file" onChange={handleChange} className="hidden" />
          <img
            src={file}
            width={140}
            height={128}
            className="border border-gray-100 p-1"
          />
          <svg
            width="40"
            onClick={handleUpload}
            className="hover:cursor-pointer absolute top-3/4 left-2/3"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="18.2143" cy="18.2143" r="18.2143" fill="#3D9FAD" />
            <g clip-path="url(#clip0_1201_8874)">
              <path
                d="M26.371 14.0103L24.8846 15.4967C24.7331 15.6482 24.488 15.6482 24.3365 15.4967L20.7576 11.9178C20.6061 11.7663 20.6061 11.5212 20.7576 11.3697L22.244 9.88335C22.8469 9.28042 23.8271 9.28042 24.4332 9.88335L26.371 11.8211C26.9771 12.424 26.9771 13.4042 26.371 14.0103ZM19.4808 12.6465L11.0141 21.1133L10.3305 25.0307C10.237 25.5594 10.6981 26.0173 11.2269 25.927L15.1443 25.2402L23.611 16.7735C23.7626 16.6219 23.7626 16.3769 23.611 16.2254L20.0322 12.6465C19.8774 12.495 19.6324 12.495 19.4808 12.6465ZM14.3189 20.3878C14.1415 20.2105 14.1415 19.9268 14.3189 19.7494L19.2841 14.7841C19.4615 14.6068 19.7452 14.6068 19.9225 14.7841C20.0999 14.9615 20.0999 15.2452 19.9225 15.4225L14.9573 20.3878C14.7799 20.5651 14.4962 20.5651 14.3189 20.3878ZM13.1549 23.0994H14.7025V24.2698L12.6229 24.6341L11.6202 23.6314L11.9845 21.5518H13.1549V23.0994Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1201_8874">
                <rect
                  width="16.5079"
                  height="16.5079"
                  fill="white"
                  transform="translate(10.3175 9.42871)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="w-5/6 px-20 items-center">
          <div className="flex flex-col justify-between">
            <div className="flex flex-row gap-2 justify-between mb-5">
              <div className="flex flex-col gap-2">
                <h1 className="text-[16px] text-[#155263] font-['Poppins']">
                  Name
                </h1>
                <Input
                  className="p-2 rounded-md bg-[#F8F8F8] indent-1.5"
                  placeholder="Tommy"
                  name="name"
                  onChange = {updateClientProfile}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-[16px] text-[#155263] font-['Poppins']">
                  Gender
                </h1>
                <Input
                  className="p-2 rounded-md bg-[#F8F8F8] indent-1.5"
                  placeholder="Macho"
                  name="gender"
                  onChange = {updateClientProfile}
                />
              
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-[16px] text-[#155263] font-['Poppins']">
                  Birthday
                </h1>
                <Input
                  className="p-2 rounded-md bg-[#F8F8F8] indent-1.5"
                  placeholder="5 años"
                  name="birthday"
                  onChange = { updateClientProfile }
                />
              </div>
            </div>
            <div className="flex flex-row justify-between gap-4 mb-5">
              <TextField
                id="outlined-multiline-static"
                className="w-1/2"
                label="Microchip"
                multiline
                rows={4}
                defaultValue=""
                name = "microchip"
                onChange = { updateClientProfile }
              />
              <TextField
                id="outlined-multiline-static"
                className="w-1/2"
                label="Special Conditions"
                multiline
                rows={4}
                defaultValue=""
                name = "specialDCondition"
                onChange = {  updateClientProfile } 
              />
            </div>
            <div className="flex flex-row">
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={select_items}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Plaquita" 
                  onChange = {  updateClientProfile }/>
                )}
              />
            </div>  
          </div>
          <div className="flex flex-row gap-4 justify-end mt-4">
              <button
                className="view-detail items-center font-bold text-base text-[#3D9FAD] text-center w-36 h-11 bottom-2.5 font-['Poppins'] bg-[#FFFFFF] rounded-md px-5  border-2 border-[#3D9FAD] hover:bg-[#3D9FAD] hover:text-[#FFFFFF]" onClick={backToClientInfo}
              >
                Back
              </button>
              <button className="delete-card items-center font-bold text-base text-[#FFFFFF] text-center w-36 h-11 bottom-2.5 font-['Poppins'] bg-[#F1B21B] rounded-md px-5 hover:bg-[#FFCA4A] hover:text-[#FFFFFF]" onClick={updatePetProfile}>
                Save
              </button>
            </div>
        </div>
      </div>
    </>
  );
};

export default PanelForPet;
