import * as React from "react";

import clientAvatar from "../assets/images/avatars/avatar2.png";
import { useNavigate } from "react-router-dom";

const ClientContactCard = (props) => {
  const navigator = useNavigate()
  const [currentInfo, setCurrentInfo] = React.useState()
  
  React.useEffect(() => {
    setCurrentInfo(props.info)
  }, [props.info])

  const showClientInfo = () => {
    if(currentInfo.Profile_ID) navigator(`/clientaccountinfo/${currentInfo.Profile_ID}`)
  }
  return (
    <>
      <div className="flex flex-row w-3/4 rounded-lg h-24 px-4 py-3 bg-[#EBFCFF] hover:cursor-pointer" onClick={showClientInfo}>
        <div className="bg-cover">
          <img className="w-20 h-20 border-1 rounded-lg" src={`/assets/images/clients/${currentInfo && currentInfo.avatarName}`} alt="" />
        </div>
        <div className="w-2/3 ml-5">
          <p className="client-name title-info">{currentInfo && currentInfo.name}</p>
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
            <span className="">{currentInfo && currentInfo.phone}</span>
          </p>
        </div>
        <div className="mt-10">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.4374 1.27852C6.43552 1.27852 1.57002 6.14402 1.57002 12.1459C1.57002 15.0384 2.70007 17.667 4.54277 19.6142C5.13333 18.4768 6.07636 17.494 7.26706 16.7586C8.76233 15.835 10.5796 15.3422 12.4376 15.3422C14.2956 15.3422 16.1129 15.835 17.6081 16.7586C18.7987 17.494 19.7417 18.4766 20.3323 19.614C22.1749 17.6668 23.3048 15.0383 23.3048 12.1459C23.3048 6.14402 18.4393 1.27852 12.4374 1.27852ZM19.3526 20.5297C18.9028 19.4876 18.0735 18.5488 16.9363 17.8464C15.6576 17.0566 14.0761 16.6207 12.4376 16.6207C10.7991 16.6207 9.21759 17.0566 7.93891 17.8464C6.8016 18.5488 5.97231 19.4877 5.5225 20.5299C7.40136 22.0813 9.81054 23.0133 12.4374 23.0133C15.0644 23.0133 17.4737 22.0812 19.3526 20.5297ZM0.291504 12.1459C0.291504 5.43791 5.72942 0 12.4374 0C19.1454 0 24.5833 5.43791 24.5833 12.1459C24.5833 18.8539 19.1454 24.2918 12.4374 24.2918C5.72942 24.2918 0.291504 18.8539 0.291504 12.1459ZM12.4374 6.39278C10.6722 6.39278 9.24113 7.82381 9.24113 9.58907C9.24113 11.3543 10.6722 12.7854 12.4374 12.7854C14.2027 12.7854 15.6337 11.3543 15.6337 9.58907C15.6337 7.82381 14.2027 6.39278 12.4374 6.39278ZM7.96261 9.58907C7.96261 7.1177 9.96605 5.11426 12.4374 5.11426C14.9088 5.11426 16.9122 7.1177 16.9122 9.58907C16.9122 12.0604 14.9088 14.0639 12.4374 14.0639C9.96605 14.0639 7.96261 12.0604 7.96261 9.58907Z"
              fill="#3D9FAD"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default ClientContactCard;
