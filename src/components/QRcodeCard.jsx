import QR from "../assets/images/QR.svg";

const QRcodeCard = () => {
  return (
    <>
      <div className="flex flex-row gap-2 items-center justify-center">
        <div
          className="QR-svg"
          style={{
            backgroundImage: `url(${QR})`,
            width: "50px",
            height: "50px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="description">Codigo QR</div>
      </div>
    </>
  );
};

export default QRcodeCard;
