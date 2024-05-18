import QRCode from "react-qr-code";
import * as React from "react";
import axios from "axios";

import QR from "../assets/images/QR.svg";
import LeftSidePanel from "../Layout/LeftSidePanel";
import TagInfoCard from "../components/tagInfoCard";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "@mui/material";
import { useSnackbar } from "notistack";
import LoadingProgress from "../components/LoadingProgress";

const IdTags = () => {
  const [allTagsInfo, setAllTagsInfo] = React.useState([]);
  const [newTagNumber, setNewTagNumber] = React.useState();
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalTagsNumber, setTotalTagsNumber] = React.useState(0);
  const [searchIndex, setSearchIndex] = React.useState('');
  const [showLoading, setShowLoading] = React.useState(false);

  const itemsPerPage = 8;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const lastIndex = Math.min(startIndex + itemsPerPage, totalTagsNumber);
  const totalPages = Math.ceil(totalTagsNumber / itemsPerPage);

  const filteredItems = allTagsInfo.filter(tag =>
    tag.Tag_ID.toLowerCase().includes(searchIndex.toLowerCase())
  );
  const currentItems = filteredItems.slice(startIndex, lastIndex);

  const dispatch = useDispatch();
  const enqueueSnackbar = useSnackbar();

  React.useEffect(() => {
    setShowLoading(true);
    axios
      .get(`${process.env.REACT_APP_Pet_Backend_Url}/getAllIdTags/`)
      .then((response) => {
        if(response.status === 200) {
          setAllTagsInfo(response.data);
          setShowLoading(false);
        } else {
          enqueueSnackbar("Unexpected response status", {
            variant: "error",
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "right",
            },
          });
        }
      })
      .catch((error) => {
        
      });
  }, []);

  React.useEffect(() => {
     let newPetNumber;
    if (allTagsInfo.length > 0) {

      setTotalTagsNumber(allTagsInfo.length);
      
      newPetNumber = allTagsInfo[allTagsInfo.length-1].Tag_NO + 1;
    
    } else newPetNumber = 1;
    let tagNumber = newPetNumber.toString().padStart(7, "0");
    setNewTagNumber(`PT${tagNumber}`);
  }, [allTagsInfo]);

  React.useEffect(() => {
    // set
  }, [filteredItems])

  const addTag = () => {
    const body = { Tag_ID: newTagNumber, Tag_NO: totalTagsNumber + 1 };
    axios
      .post(`${process.env.REACT_APP_Pet_Backend_Url}/add_tagid/`, body)
      .then((response) => {
        if (response.status == 200) {
          setAllTagsInfo([...allTagsInfo, response.data.tagInfo]);
        }
      });
    let page = Math.ceil(allTagsInfo.length/itemsPerPage);  
    setCurrentPage(page);
  };

  const handleSearch = (event) => {
    setSearchIndex(event.target.value)
  }
  const selectPage = (event, page) => {
    setCurrentPage(page);
  };

  return (
    // <div className="w-full flex top-10">
    //   <LeftSidePanel />
      <div className="flex w-5/6 h-[4/5]  flex-col border-t-2 px-7 mb-3">
        <div className="flex flex-row">
          <h1 className="font-['Poppins'] py-7 text-[#155263] text-2xl font-bold w-1/2">
            ID Tags
          </h1>
          <div className="w-1/2 flex flex-row justify-end">
            <label
              for="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative flex flex-row py-7 w-5/6 justify-between">
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
                className="block w-full px-4 py-2 ps-10 text-sm text-gray-900 rounded-l-lg bg-gray-50 focus:ring-blue-500 dark:bg-[#F8F8F8] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 "
                placeholder="Buscar..."
                value={searchIndex}
                onChange={handleSearch}
              />
            </div>
            <div className="flex flex-row py-7 w-1/6 justify-end">
              <button
                type="submit"
                className="flex text-sm items-center text-white bottom-2.5 font-['Poppins'] bg-[#F1B21B] rounded-md px-2 hover:bg-white hover:text-[#F1B21B] hover:border hover:border-[#F1B21B]"
                onClick={addTag}
              >
                ADD ID TAGS
              </button>
            </div>
          </div>
        </div>
        {currentItems && currentItems?.length > 0
          ? currentItems.map((tag) => {
              return (
                <TagInfoCard
                  tagNumber={tag.Tag_ID}
                  assigned_Client={tag.Assigned_Client}
                  isAssigned={tag.IsAssigned}
                />
              );
            })
          : null}
        <LoadingProgress isVisible={showLoading}/>
        <div className="flex items-end justify-end">
          {totalPages > 1 && (
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={selectPage}
              shape="rounded"
              sx={{
                '& .Mui-selected': {
                  color: 'white',
                  backgroundColor: '#3d9fad',
                },
              }}
            />
          )}
        </div>
      </div>
    // </div>
  );
};

export default IdTags;
