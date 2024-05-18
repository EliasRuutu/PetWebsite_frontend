import { CircularProgress } from '@mui/material';
import * as React from "react";


const LoadingProgress = (props) => {
    const [showLoading, setShowLoading] = React.useState(props.isVisible); 
  return;
  <div className=" flex flex-col items-center loading px-25">
    {showLoading === true ? <CircularProgress /> : null}
  </div>;
};
export default LoadingProgress;
