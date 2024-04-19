
import clientAvatar from "../assets/images/avatars/avatar2.png";

const ClientContactCard = () => {
  return (
    <>
      <div className="flex flex-row w-full h-24 px-4 py-3 ">
        <div className="w-20 bg-cover h-20 bg-cover">
          <img src={clientAvatar} alt="" />
        </div>
        <div className="w-2/3 ml-5">
          <p className="client-name title-info">Sebastian Torres</p>
          <p className="client-phone flex flex-row">
             <span>
              <svg
                width="14"
                height="24"
                viewBox="0 0 14 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5142 16.7715V19.9324C10.5142 20.4114 10.1258 20.7998 9.64674 20.7998C7.21378 20.7998 5.10547 19.1142 4.56989 16.741L4.53201 16.5731C3.85255 13.5622 3.85257 10.4378 4.53206 7.42689L4.56984 7.25949C5.10545 4.88622 7.21377 3.20068 9.64673 3.20068C10.1258 3.20068 10.5142 3.58904 10.5142 4.06811L10.5142 7.229C10.5142 7.78128 10.0664 8.229 9.51416 8.229L8.3416 8.229C8.1376 8.229 7.95649 8.35954 7.89198 8.55307C7.14611 10.7907 7.14611 13.2098 7.89197 15.4474C7.95649 15.6409 8.1376 15.7715 8.3416 15.7715H9.51416C10.0664 15.7715 10.5142 16.2192 10.5142 16.7715Z"
                  stroke="#3D9FAD"
                  stroke-width="1.5"
                />
              </svg>             
            </span>
            <span className="">+54  569-312 -127</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default ClientContactCard;
