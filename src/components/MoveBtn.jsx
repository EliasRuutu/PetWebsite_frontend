const MoveBtn = (props) => {

  return (
    <>
    {props.name !== "Back" ? (
        <button
            type="submit"
            className="text-sm items-center text-black text-center w-36 h-11 bottom-2.5 font-Poppins bg-#FFFFFF rounded-md px-5 border-2 border-#155263"
        >
            { props.name}
        </button>
    ) : (
        <button
            type="submit"
            className="text-sm items-center text-white text-center w-36 h-11 bottom-2.5 font-Poppins bg-#3D9FAD rounded-md px-5 mx-3.5"
        >
            {props.name}
        </button>
    )}
    {/* <button
          type="submit"
          className="text-sm items-center text-black text-center w-36 h-11 bottom-2.5 font-['Poppins'] bg-[#FFFFFF] rounded-md px-5  border-2 border-[#155263]"
        >
          VOLVER
        </button> */}
    </>
  );
};
export default MoveBtn;
