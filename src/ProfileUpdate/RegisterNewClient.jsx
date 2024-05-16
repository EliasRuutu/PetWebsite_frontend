import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import { Input } from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import User from "../assets/images/user.svg";
import { useNavigate, useParams } from "react-router-dom";

const RegisterNewClient = () => {
  const urlParams = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };
  const navigator = useNavigate();
  const [file, setFile] = useState(User);
  const [clientInfo, setClientInfo] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    address: "",
    avatar: "",
  });
  const [confirmPassword, setConfirmPassword] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [clientID, setClientID] = useState("");

  useEffect(() => {
    if (urlParams.ProfileID != undefined) {
      setClientID(urlParams.ProfileID);
      axios
        .get(
          `${process.env.REACT_APP_Pet_Backend_Url}/getClientByProfileID/${urlParams.ProfileID}`
        )
        .then((res) => {
          if (res.status == 200) {
            console.log("status", res.status);
            setClientInfo(res.data);
            setPhoneNumber(res.data.phone);
          }
        })
        .catch((error) => {});
    }
  }, [urlParams.ProfileID]);

  function updateClientProfile(e) {
    setClientInfo({ ...clientInfo, [e.target.name]: e.target.value });
  }

  function handleChange(e) {
    console.log(e.target.files[0]);
    setFile(URL.createObjectURL(e.target.files[0]));
    setClientInfo({ ...clientInfo, avatar: e.target.files[0] });
  }

  const handleUpload = (e) => {
    const input = document.createElement("input");
    input.type = "file";
    input.onchange = (e) => handleChange(e);
    input.click();
  };

  const saveClientProfile = () => {
    if (clientInfo.password !== confirmPassword) {
      setClientInfo({ ...clientInfo, password: "" });
      setConfirmPassword("");
      alert("Password does not match");
    } else if (
      clientInfo.name.trim() === "" ||
      clientInfo.lastName.trim() === "" ||
      clientInfo.email.trim() === "" ||
      phoneNumber.trim() === "" ||
      clientInfo.password === "" ||
      clientInfo.address.trim() === "" ||
      !clientInfo.avatar
    ) {
      enqueueSnackbar("Please fill out all required fields", {
        variant: "error",
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "right",
        },
      });
    } else {
      const formData = new FormData();
      formData.append("name", clientInfo.name);
      formData.append("lastName", clientInfo.lastName);
      formData.append("email", clientInfo.email);
      formData.append("phone", phoneNumber);
      formData.append("password", clientInfo.password);
      formData.append("address", clientInfo.address);
      formData.append("avatar", clientInfo.avatar);
      formData.append("clientID", clientID);

      axios
        .post(`${process.env.REACT_APP_Pet_Backend_Url}/register/`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          if (response.status === 200) {
            const personalInfo = response.data;
            // Assuming navigator is a function, you might need to adjust this part
            enqueueSnackbar("Successfully registered!", {
              variant: "success",
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "right",
              },
            });
            navigator("/balanceofclient");
          }

          if (response.status === 202) {
            enqueueSnackbar("Successfully updated!", {
              variant: "success",
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "right",
              },
            });
            navigator(`/clientaccountinfo/${clientID}`);
          }
        })
        .catch((error) => {
          if (error.response.status === 404) {
            alert("The user has already registered.");
          } else if (error.response.status === 500) {
            alert("Network error occurred.");
          } else {
            console.log("Error:", error);
          }
        });
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };
  const onSubmit = (data) => {
    // Handle form submission
  };

  const goToBack = () => {
    if (clientID !== "") navigator(`/clientaccountinfo/${clientID}`);
    else navigator(`/balanceofclient/`);
  };
  return (
    <div className="flex w-5/6 h-screen  flex-col border-t-2 mb-3 bg-[#EBFCFF] px-[250px] pt-[30px]">
      <div className="flex mb-[10px]">
        <h1 className="font-['Poppins'] py-7 text-[#155263] text-2xl font-bold w-full">
          New Client
        </h1>
      </div>
      <form>
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
                  value={clientInfo?.name || ""}
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
                  required
                  value={clientInfo?.email || ""}
                  autoComplete="off"
                />
              </div>
              <div className="flex flex-col text-[#155263] gap-2">
                <h1 className="text-[16px] text-[#155263] font-['Poppins']">
                  Password
                </h1>
                {/* <PasswordInput /> */}
                <div className="relative">
                  <Input
                    type={isPasswordVisible ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    onChange={updateClientProfile}
                    value={clientInfo?.password || ""}
                    required
                    autoComplete="new-password"
                  />
                  <button
                    className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                    onClick={togglePasswordVisibility}
                  >
                    {isPasswordVisible ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    )}
                  </button>
                </div>
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
                  value={clientInfo?.lastName || ""}
                  required
                />
              </div>
              <div className="flex flex-col text-[#155263] gap-2">
                <h1 className="text-[16px] text-[#155263] font-['Poppins']">
                  Phone
                </h1>
                {/* <Input
                  className="p-2 rounded-md bg-[#F8F8F8] indent-1.5"
                  placeholder="+58 789-564-52"
                  name="phone"
                  onChange={updateClientProfile}
                  required
                  value={clientInfo?.phone || ""}
                /> */}
                <PhoneInput
                  className="p-2 rounded-md bg-[#F8F8F8] indent-1.5"
                  placeholder="+58 789-564-52"
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                />
              </div>
              <div className="flex flex-col text-[#155263] gap-2">
                <h1 className="text-[16px] text-[#155263] font-['Poppins']">
                  Confirm Password
                </h1>
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
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
              required
              value={clientInfo?.address || ""}
            />
          </div>
          <div className="flex flex-row">
            <div className="grid grid-cols-3 flex-wrap pt-2">
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
              type="button"
              className=" font-['Poppins'] w-[200px] h-[40px] ml-[6px] font-bold bg-white rounded-md text-[#155263] border border-[#155263] hover:bg-[#155263] hover:text-white transition-colors duration-300 ease-in-out"
              onClick={goToBack}
            >
              Back
            </button>
            <button
              type="button"
              className="w-[200px] font-['Poppins'] h-[40px] ml-[6px] font-bold bg-[#F1B21B] hover:bg-white hover:text-[#F1B21B] hover:border hover:border-[#F1B21B] rounded-md text-white transition-colors duration-300 ease-in-out"
              onClick={saveClientProfile}
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterNewClient;
