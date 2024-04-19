import * as React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

import ClientCard1 from "../components/ClientCard1";

import dogAvatar from "../assets/images/avatars//Group 385.png";
import LeftSidePanel from "../components/LeftSidePanel";

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
      <LeftSidePanel/>
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
              <p>
                ¿Estas seguro de que deseas eliminar{" "}
                <span className="text-[#3D9FAD]">toda la información</span> de
                este cliente?
              </p>
            </div>
            <div className="">
              <p className="text-[#155263]">
                Al eliminarse, estos datos no podrán recuperarse.
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <button
                className="view-detail items-center font-bold text-base text-[#3D9FAD] text-center w-36 h-11 bottom-2.5 font-['Poppins'] bg-[#FFFFFF] rounded-md px-5  border-2 border-[#3D9FAD] hover:bg-[#3D9FAD] hover:text-[#FFFFFF]"
                onClick={handleClose}
              >
                VOLVER
              </button>
              <button className="delete-card items-center font-bold text-base text-[#FFFFFF] text-center w-36 h-11 bottom-2.5 font-['Poppins'] bg-[#3D9FAD] rounded-md px-5 hover:bg-[#155263] hover:text-[#FFFFFF]">
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
