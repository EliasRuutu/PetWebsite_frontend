const tagCard = (props) => {
  return (
    <>
    <div
              style={{
                height: "auto",
                margin: "0 auto",
                maxWidth: 64,
                width: "100%",
              }}
            >
              <img src={props.imgSrc} />
            </div>
    <div className="flex flex-col justify-center">
      <span className="font-['Poppins'] text-[#155263] w-40">
        Surfing dogs ID tag
      </span>
      <span className="font-['Poppins'] text-[#bbb]">{props.tagNumber}</span>
    </div>
    </>
  );
};

export default tagCard;
