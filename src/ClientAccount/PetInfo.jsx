import React from "react";
import petImage from "../assets/images/avatars/Rectangle 4290.png"; // Import the image file
import ClientCard from "../components/ClientCard.jsx" 

const PetInfo = () => {
  return (
    <>
      <div className="mb-7 font-bold text-[#155263] text-3xl">
        Información de Mascota
      </div>
      <div className="flex flex-row h-full mb-18">
        <div className="info-client flex flex-col w-1/3 bg-cover px-32 pt-14 pb-12">
          <div className="flex flex-col justify-center items-left h-3/4 align-middle">
            <div className="panel-QR flex flex-col justify-center items-center py-10">
              <div className="title-info">
                Plaquita no <br /> asignada aun
              </div>
            </div>
            <div className="flex flex-row items-left text-3xl mt-2 font-bold text-white">
              <span className="ml-0">Bella</span>
            </div>
          </div>
          <hr />
          <div className="flex flex-col text-white text-base mt-5">
            <div className="flex flex-row justify-start"></div>
          </div>
        </div>
        <div className="w-2/3 px-10 bg-[#FFFFFF]">
          <div className="flex flex-col h-1/2">
            <div className="flex flex-row w-full h-4/5 mt-10">
              <div className="w-1/5">
                <img src={petImage} alt="" className="" />
              </div>
              <div className="w-4/5 ml-10">
                <div className="">
                  <div className="title-info pb-4">Detalles Personales</div>
                  <hr />
                  <div className="text-base pt-4">
                    <p className="text-[#155263]">
                      Edad: <span>3 años</span>
                    </p>
                    <p className="text-[#155263]">
                      Condición Especial : &nbsp;
                      <span>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <span>
                <span className="text-[#155263]">Microchip :</span> Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do nulla pariatur excepteur.
              </span>
            </div>
          </div>
          <div className="h-1/2">
            <div className="flex h-1/4 title-info title-info items-center justify-start">
              Dueño
            </div>
            <hr />
            <div className="flex flex-row flex-wrap w-2/3 pt-5">
              <ClientCard/>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-end mt-10 text-base">
        <button
          type="submit"
          className="text-sm items-center text-black text-center w-36 h-11 bottom-2.5 font-['Poppins'] bg-[#FFFFFF] rounded-md px-5 border-2 border-[#155263]"
        >
          VOLVER
        </button>
        <button
          type="submit"
          className="text-sm items-center text-white text-center w-36 h-11 bottom-2.5 font-['Poppins'] bg-[#3D9FAD] rounded-md px-5 mx-3.5"
        >
          EDITAR
        </button>
      </div>
    </>
  );
};

export default PetInfo;
