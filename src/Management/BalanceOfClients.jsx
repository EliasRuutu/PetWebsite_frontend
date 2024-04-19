import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

import ClientCard1 from "../components/ClientCard1";

import dogAvatar from "../assets/images/avatars//Group 385.png";
import { useNavigate } from "react-router-dom";

const BalanceOfClients = () => {
  let navigator = useNavigate();

  const [open, setOpen] = React.useState(false);
  const openDeleteMoadl = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  return (
    <div className="w-full flex top-10">
      <div className="flex w-1/6 border-r-2 h-screen flex-col mt-[130px]">
        <span className="w-full pt-8 text-xl border-t-2 flex justify-center">
          <svg
            className="mr-4"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.96024 3.38572C8.30255 2.29478 9.85287 1.48846 11.5168 1.01589C13.1807 0.543311 14.9234 0.414362 16.6388 0.636893C18.3541 0.859424 20.0062 1.42878 21.4945 2.31028C22.9828 3.19179 24.276 4.36699 25.2955 5.76434C26.315 7.16168 27.0394 8.75192 27.4247 10.4382C27.8099 12.1245 27.8478 13.8716 27.5362 15.573C27.2246 17.2744 26.5699 18.8946 25.612 20.3349C24.6541 21.7752 23.4131 23.0054 21.9645 23.9507V23.0357C21.965 22.1494 21.6514 21.2915 21.0795 20.6143C22.5894 19.3634 23.6767 17.6773 24.1931 15.7858C24.7095 13.8943 24.6299 11.8896 23.965 10.045C23.3002 8.20047 22.0826 6.60587 20.4783 5.47874C18.8739 4.3516 16.961 3.74678 15.0002 3.74678C13.0395 3.74678 11.1266 4.3516 9.52221 5.47874C7.91786 6.60587 6.70025 8.20047 6.03544 10.045C5.37064 11.8896 5.291 13.8943 5.80739 15.7858C6.32379 17.6773 7.41107 19.3634 8.92096 20.6143C8.34906 21.2915 8.03552 22.1494 8.03596 23.0357V23.9507C6.35494 22.854 4.95668 21.3759 3.95502 19.6366C2.95337 17.8973 2.37664 15.946 2.2718 13.9416C2.16695 11.9372 2.53695 9.93642 3.35168 8.1021C4.1664 6.26778 5.40281 4.65179 6.96024 3.38572ZM18.8574 22.1786C18.9905 22.2784 19.0985 22.4078 19.1728 22.5566C19.2472 22.7053 19.286 22.8694 19.286 23.0357V26.25C19.286 26.4163 19.2472 26.5804 19.1728 26.7292C19.0985 26.8779 18.9905 27.0073 18.8574 27.1071L15.6431 29.5179C15.4576 29.657 15.2321 29.7322 15.0002 29.7322C14.7684 29.7322 14.5428 29.657 14.3574 29.5179L11.1431 27.1071C11.01 27.0073 10.902 26.8779 10.8276 26.7292C10.7533 26.5804 10.7145 26.4163 10.7145 26.25V23.0357C10.7145 22.8694 10.7533 22.7053 10.8276 22.5566C10.902 22.4078 11.01 22.2784 11.1431 22.1786L14.3574 19.7679C14.5428 19.6288 14.7684 19.5536 15.0002 19.5536C15.2321 19.5536 15.4576 19.6288 15.6431 19.7679L18.8574 22.1786Z"
              fill="#929292"
            />
          </svg>
          <h1 className="font-['Poppins'] text-xl text-[#155263]">Plaquitas</h1>
        </span>
        <span className="w-full flex pt-5 text-xl justify-center items-center">
          <svg
            className="mr-4"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.2202 10.1905C23.7255 9.85291 24.3195 9.6727 24.9273 9.6727C25.7422 9.6727 26.5238 9.99643 27.1 10.5727C27.6763 11.1489 28 11.9305 28 12.7454C28 13.3532 27.8198 13.9472 27.4822 14.4525C27.1445 14.9578 26.6646 15.3517 26.1032 15.5843C25.5417 15.8168 24.9239 15.8777 24.3278 15.7591C23.7318 15.6405 23.1843 15.3479 22.7545 14.9182C22.3248 14.4884 22.0322 13.9409 21.9136 13.3449C21.795 12.7488 21.8559 12.131 22.0884 11.5695C22.321 11.0081 22.7148 10.5282 23.2202 10.1905Z"
              fill="#3D9FAD"
            />
            <path
              d="M7.62761 11.0383C7.96524 11.5436 8.14546 12.1377 8.14546 12.7454C8.14546 13.5604 7.82172 14.3419 7.24547 14.9182C6.66923 15.4944 5.88767 15.8181 5.07273 15.8181C4.465 15.8181 3.87092 15.6379 3.36561 15.3003C2.86031 14.9627 2.46647 14.4828 2.2339 13.9213C2.00133 13.3598 1.94048 12.742 2.05904 12.146C2.1776 11.5499 2.47025 11.0024 2.89998 10.5727C3.32971 10.1429 3.87722 9.8503 4.47327 9.73174C5.06932 9.61318 5.68714 9.67403 6.24861 9.90659C6.81008 10.1392 7.28997 10.533 7.62761 11.0383Z"
              fill="#3D9FAD"
            />
            <path
              d="M12.4526 9.62758C11.9473 9.96521 11.3532 10.1454 10.7455 10.1454C9.93052 10.1454 9.14896 9.82169 8.57271 9.24544C7.99646 8.6692 7.67273 7.88763 7.67273 7.0727C7.67273 6.46497 7.85294 5.87089 8.19058 5.36558C8.52821 4.86027 9.00811 4.46644 9.56957 4.23387C10.131 4.0013 10.7489 3.94045 11.3449 4.05901C11.941 4.17757 12.4885 4.47022 12.9182 4.89995C13.3479 5.32968 13.6406 5.87719 13.7591 6.47324C13.8777 7.06929 13.8169 7.68711 13.5843 8.24858C13.3517 8.81005 12.9579 9.28994 12.4526 9.62758Z"
              fill="#3D9FAD"
            />
            <path
              d="M20.9617 9.62758C20.4564 9.96521 19.8623 10.1454 19.2545 10.1454C18.4396 10.1454 17.658 9.82169 17.0818 9.24544C16.5056 8.6692 16.1818 7.88763 16.1818 7.0727C16.1818 6.46497 16.362 5.87089 16.6997 5.36558C17.0373 4.86027 17.5172 4.46644 18.0787 4.23387C18.6401 4.0013 19.258 3.94045 19.854 4.05901C20.4501 4.17757 20.9976 4.47022 21.4273 4.89995C21.857 5.32968 22.1497 5.87719 22.2682 6.47324C22.3868 7.06929 22.3259 7.68711 22.0934 8.24858C21.8608 8.81005 21.467 9.28994 20.9617 9.62758Z"
              fill="#3D9FAD"
            />
            <path
              d="M20.5568 16.6711C20.9181 17.124 21.3651 17.5011 21.8723 17.7811C22.7498 18.2579 23.4433 19.0136 23.8433 19.9286C24.2433 20.8437 24.3268 21.8659 24.0807 22.8338C23.8347 23.8017 23.273 24.6599 22.4846 25.2728C21.6962 25.8857 20.7259 26.2184 19.7273 26.2181C19.1251 26.2197 18.5288 26.0991 17.9746 25.8636C16.0667 25.0772 13.9251 25.0772 12.0171 25.8636C11.4655 26.0983 10.8722 26.2189 10.2727 26.2181C9.27339 26.2185 8.30247 25.8855 7.51368 25.272C6.72489 24.6584 6.16329 23.7992 5.91779 22.8305C5.67229 21.8618 5.75691 20.8389 6.15825 19.9236C6.5596 19.0084 7.25474 18.2532 8.13364 17.7776C9.15542 17.2123 9.91083 16.2643 10.2337 15.1421C10.5338 14.1102 11.1606 13.2035 12.0201 12.5583C12.8796 11.9131 13.9253 11.5643 15 11.5643C16.0747 11.5643 17.1204 11.9131 17.9799 12.5583C18.8394 13.2035 19.4662 14.1102 19.7663 15.1421C19.9268 15.6988 20.1954 16.2183 20.5568 16.6711Z"
              fill="#3D9FAD"
            />
          </svg>
          <h1 className="font-['Poppins'] text-xl text-[#155263] font-bold">
            Mascotas
          </h1>
        </span>
      </div>
      <div className="flex w-5/6 h-screen mt-[130px] flex-col border-t-2 px-20 mb-3">
        <div className="flex flex-row">
          <h1 className="title-info font-['Poppins'] py-7 text-[#155263] text-2xl font-bold w-1/2">
            Balance de tus Clientes
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
          <ClientCard1 deleteInfo={openDeleteMoadl} />
          <ClientCard1 deleteInfo={openDeleteMoadl} />
          <ClientCard1 deleteInfo={openDeleteMoadl} />
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={style}
            className="flex flex-col justify-center items-center w-96 h-96 gap-4 rounded-[20px]"
          >
            <div className="rounded-full">
              <svg
                width="136"
                height="136"
                viewBox="0 0 136 136"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle opacity="0.7" cx="68" cy="68" r="68" fill="#EBFCFF" />
                <path
                  d="M24.1963 45.9482H110.803"
                  stroke="#3D9FAD"
                  stroke-width="7"
                  stroke-linecap="round"
                />
                <path
                  d="M98.6139 45.9482H36.3563L35.9108 54.0037C35.0571 69.4378 35.7824 84.9187 38.0754 100.205C39.0754 106.871 44.8017 111.803 51.5424 111.803H83.4277C90.1684 111.803 95.8948 106.871 96.8948 100.205C99.1877 84.9187 99.9131 69.4378 99.0594 54.0038L98.6139 45.9482Z"
                  stroke="#3D9FAD"
                  stroke-width="7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M50.1924 45.9488V42.49C50.1924 37.9035 52.0144 33.5047 55.2576 30.2615C58.5008 27.0183 62.8996 25.1963 67.4861 25.1963C72.0727 25.1963 76.4715 27.0183 79.7147 30.2615C82.9579 33.5047 84.7799 37.9035 84.7799 42.49V45.9488"
                  stroke="#3D9FAD"
                  stroke-width="7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M57.1104 64.4722V93.1418"
                  stroke="#3D9FAD"
                  stroke-width="7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M77.8623 64.4722V93.1418"
                  stroke="#3D9FAD"
                  stroke-width="7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="title-info">
              <p>¿Estas seguro de que deseas eliminar <span className="text-[#3D9FAD]">toda la información</span> de este cliente?</p>
            </div>
            <div className="">
              <p className="text-[#155263]">Al eliminarse, estos datos no podrán recuperarse.</p>
            </div>
            <div className="flex flex-row gap-4">
              <button className="view-detail items-center font-bold text-base text-[#3D9FAD] text-center w-36 h-11 bottom-2.5 font-['Poppins'] bg-[#FFFFFF] rounded-md px-5  border-2 border-[#3D9FAD] hover:bg-[#3D9FAD] hover:text-[#FFFFFF]" onClick={handleClose}>
                VOLVER
              </button>
              <button className="delete-card items-center font-bold text-base text-[#FFFFFF] text-center w-36 h-11 bottom-2.5 font-['Poppins'] bg-[#3D9FAD] rounded-md px-5 hover:bg-[#155263] hover:text-[#FFFFFF]" >
                DESCARGAR
              </button>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default BalanceOfClients;
