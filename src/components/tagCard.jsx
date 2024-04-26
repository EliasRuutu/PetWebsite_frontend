import QR from "../assets/images/QR.svg";
const TagCard = () => {
  const isChecked = false;
  return (
    <>
      <div className="flex flex-col w-full border-none rounded-xl bg-[#FFFFFF] hover:bg-[#EBFCFF] hover: cursor-pointer p-3">
        <div className="flex flex-row w-full justify-between px-4 ">
          <div className="flex gap-6">
            <div
              style={{
                height: "auto",
                margin: "0 auto",
                maxWidth: 64,
                width: "100%",
              }}
            >
              <img src={QR} />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-['Poppins'] text-[#155263] w-40">
                Surfing dogs ID tag
              </span>
              <span className="font-['Poppins'] text-[#bbb]">PT0000001</span>
            </div>
          </div>
          <div className="flex py-2 items-center">
            {isChecked ? (
              <span className="bg-[#E7E7E7] font-['Poppins'] text-[#155263] rounded-[50px] px-10 py-2">
                Unassing
              </span>
            ) : (
              <span className="bg-[#3D9FAD] font-['Poppins'] text-white rounded-[50px] px-10 py-2">
                Assign
              </span>
            )}

            {}
          </div>
          <div className="flex flex-row items-center justify-between gap-10">
            <div>
              <button className="font-['Poppins'] text-[#3D9FAD] border border-[#3D9FAD] hover:bg-[#3D9FAD] hover:text-white py-1 px-6 rounded-md">
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TagCard;
