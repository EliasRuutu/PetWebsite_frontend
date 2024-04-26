import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {uploadClientInfo} from "../redux/client/clientSlice";

import { Avatar } from "flowbite-react";
import axios from "axios";

import { Input } from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import User from "../assets/images/user.svg";
import PasswordInput from "../components/passwordInput";
import LeftSidePanel from "../components/LeftSidePanel";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import {showToast} from "../utils/showToast";

const RegisterNewClient = () => {
  const [file, setFile] = useState(User);
  const [newClient, setNewClient] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    address: "",
    avatar: "",
  });

  const navigator = useNavigate();

  const dispatch = useDispatch();

  const clientPassword = useSelector((state) => state.client.clientPassword);

  useEffect(() => {
    setNewClient({ ...newClient, password: clientPassword });
  }, [clientPassword]);

  function updateClientProfile(e) {
    setNewClient({ ...newClient, [e.target.name]: e.target.value });
  }

  function handleChange(e) {
    console.log(e.target.files[0]);
    setFile(URL.createObjectURL(e.target.files[0]));
    setNewClient({ ...newClient, avatar: e.target.files[0] });
  }
  const handleUpload = (e) => {
    const input = document.createElement("input");
    input.type = "file";
    input.onchange = (e) => handleChange(e);
    input.click();
  };

  const saveClientProfile = () => {
    if (
      newClient.name.trim() === "" || 
      newClient.lastName.trim() === "" ||
      newClient.email.trim() === "" ||
      newClient.phone.trim() === "" ||
      newClient.password.trim() === "" ||
      newClient.address.trim() === "" 
    ) {
      // toast.success("Plese enter the data correctly", {
      //   position: "bottom-right",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      // });
      alert("enter the data")
    } else {
      const formData = new FormData();
      formData.append("name", newClient.name);
      formData.append("lastName", newClient.lastName);
      formData.append("email", newClient.email);
      formData.append("phone", newClient.phone);
      formData.append("password", newClient.password);
      formData.append("address", newClient.address);
      formData.append("avatar", newClient.avatar);

      axios
        .post("http://localhost:5000/register/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          const personalInfo = response.data;
          dispatch(uploadClientInfo(personalInfo))
          alert("successfully registerd")
          navigator('/balanceofclient');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="w-full flex top-10">
      <LeftSidePanel />
      <div className="flex w-5/6 h-screen mt-[130px] flex-col border-t-2 mb-3 bg-[#EBFCFF] px-[250px] pt-[30px]">
        <div className="flex mb-[10px]">
          <h1 className="font-['Poppins'] py-7 text-[#155263] text-2xl font-bold w-full">
            New Client
          </h1>
        </div>
        <div className="flex flex-col gap-6 bg-white border rounded-3xl shadow-[0px_2px_0px_1px_rgba(0,0,0,0.3)] border-none p-[40px]">
          <div className="flex flex-row gap-4 justify-between">
            <div className="flex w-1/4 overflow-hidden h-[250px] relative">
              <input type="file" onChange={handleChange} className="hidden" />
              <img
                src={file}
                width={256}
                height={128}
                className="border border-gray-100 rounded-full p-1"
              />
              <svg
                width="40"
                onClick={handleUpload}
                className="hover:cursor-pointer absolute top-3/4 left-3/4"
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
            <div className="flex flex-col w-1/3 gap-3">
              <div className="flex flex-col gap-2">
                <h1 className="text-[16px] text-[#155263] font-['Poppins']">
                  Name
                </h1>
                <Input
                  className="p-2 rounded-md bg-[#F8F8F8] indent-1.5"
                  placeholder="Alexandra"
                  name="name"
                  onChange={updateClientProfile}
                  required
                />
              </div>
              <div className="flex flex-col text-[#155263] gap-2">
                <h1 className="text-[16px] text-[#155263] font-['Poppins']">
                  E-mail
                </h1>
                <Input
                  className="p-2 rounded-md bg-[#F8F8F8] indent-1.5"
                  placeholder="alexandra@gmail.com"
                  name="email"
                  onChange={updateClientProfile}
                />
              </div>
              <div className="flex flex-col text-[#155263] gap-2">
                <h1 className="text-[16px] text-[#155263] font-['Poppins']">
                  Password
                </h1>
                <PasswordInput />
              </div>
            </div>
            <div className="flex flex-col gap-3 w-1/3">
              <div className="flex flex-col gap-2">
                <h1 className="text-[16px] text-[#155263] font-['Poppins']">
                  Last Name
                </h1>
                <Input
                  className="p-2 rounded-md bg-[#F8F8F8] indent-1.5"
                  placeholder="Gomez"
                  name="lastName"
                  onChange={updateClientProfile}
                />
              </div>
              <div className="flex flex-col text-[#155263] gap-2">
                <h1 className="text-[16px] text-[#155263] font-['Poppins']">
                  Phone
                </h1>
                <Input
                  className="p-2 rounded-md bg-[#F8F8F8] indent-1.5"
                  placeholder="+58 789-564-52"
                  name="phone"
                  onChange={updateClientProfile}
                />
              </div>
              <div className="flex flex-col text-[#155263] gap-2">
                <h1 className="text-[16px] text-[#155263] font-['Poppins']">
                  Confirm Password
                </h1>
                <PasswordInput />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-[#155263] font-['Poppins'] text-[16px]">
              Address
            </h1>
            <Textarea
              className="border rounded-md py-2"
              name="address"
              onChange={updateClientProfile}
            />
          </div>
          <div className="flex flex-row">
            <div className="grid grid-cols-3 flex-wrap pt-2">
              {/* <CheckboxHorizontalListGroup /> */}
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Address"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Full Name"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Phone"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="E-mail"
              />
            </div>
          </div>
          <div className="flex flex-row gap-4 justify-end">
            <button
              className=" font-['Poppins'] w-[200px] h-[40px] ml-[6px] font-bold bg-white rounded-md text-[#155263] border border-[#155263] hover:bg-[#155263] hover:text-white transition-colors duration-300 ease-in-out"
              // onClick={handleIniciaClick}
            >
              Back
            </button>
            <button
              type="submit"
              className="w-[200px] font-['Poppins'] h-[40px] ml-[6px] font-bold bg-[#F1B21B] hover:bg-white hover:text-[#F1B21B] hover:border hover:border-[#F1B21B] rounded-md text-white transition-colors duration-300 ease-in-out"
              onClick={saveClientProfile}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterNewClient;
