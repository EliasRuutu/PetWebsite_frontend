import { useState } from "react";
import { Input } from "@material-tailwind/react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import PasswordInput from "../../components/passwordInput";
import User from "../../assets/images/user.svg";
import DogAvatar from "../../assets/images/avatars/dog-avatar.png";

const PanelForPet = () => {
  const [updatePassword, setUpdatePassword] = useState("");
  const [file, setFile] = useState(DogAvatar);
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  const handleUpload = (e) => {
    const input = document.createElement("input");
    input.type = "file";
    input.onchange = (e) => handleChange(e);
    input.click();
  };
  const select_items = ["1", "2", "3"];
  return (
    <>
      <div className="flex flex-row">
        <div className="flex w-1/5 overflow-hidden h-[160px] relative">
          <input type="file" onChange={handleChange} className="hidden" />
          <img
            src={file}
            width={160}
            height={128}
            className="border border-gray-100 rounded-full p-1"
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
        <div className="w-5/6 px-20">
          <div className="flex flex-col justify-between">
            <div className="flex flex-row justify-between mb-5">
              <div className="flex flex-col gap-2">
                <h1 className="text-[16px] text-[#155263] font-['Poppins']">
                  Nombre
                </h1>
                <Input
                  className="p-2 rounded-md bg-[#F8F8F8] indent-1.5"
                  placeholder="Tommy"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-[16px] text-[#155263] font-['Poppins']">
                  Genero
                </h1>
                <Input
                  className="p-2 rounded-md bg-[#F8F8F8] indent-1.5"
                  placeholder="Macho"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-[16px] text-[#155263] font-['Poppins']">
                  Edad
                </h1>
                <Input
                  className="p-2 rounded-md bg-[#F8F8F8] indent-1.5"
                  placeholder="5 años"
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
                defaultValue="Descripción"
              />
              <TextField
                id="outlined-multiline-static"
                className="w-1/2"
                label="Condiciones especiales"
                multiline
                rows={4}
                defaultValue="Descripción"
              />
            </div>
            <div className="flex flex-row">
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={select_items}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Plaquita" />
                )}
              />
            </div>
          </div>
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              class="text-sm items-center text-black text-center w-36 h-11 bottom-2.5 font-['Poppins'] bg-[#FFFFFF] rounded-md px-5  border-2 border-[#155263]"
            >
              VOLVER
            </button>
            <button
              type="submit"
              class="text-sm items-center text-white text-center w-36 h-11 bottom-2.5 font-['Poppins'] bg-[#3D9FAD] rounded-md px-5  mx-3.5"
            >
              EDITAR
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PanelForPet;
