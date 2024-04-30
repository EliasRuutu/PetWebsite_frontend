import QRCode from "react-qr-code";
import * as React from "react";
import axios from "axios";

import QR from "../assets/images/QR.svg";
import LeftSidePanel from "../components/LeftSidePanel1";
import TagInfoCard from "../components/tagInfoCard";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "@mui/material";

const IdTags = () => {
  const dispatch = useDispatch();
  const [allTagsInfo, setAllTagsInfo] = React.useState([]);
  const [newTagNumber, setNewTagNumber] = React.useState();
  const [isAdded, setAddState] = React.useState(false);

  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalItems, setTotalItems] = React.useState();

  const itemsPerPage = 8;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const lastIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const currentItems = allTagsInfo.slice(startIndex, lastIndex);

  React.useEffect(() => {
    axios
      .get("http://localhost:5000/getAllIdTags/")
      .then((response) => {
        setAllTagsInfo(response.data);
      })
      .catch((error) => {});
  }, []);

  React.useEffect(() => {
    if (allTagsInfo.length > 0) {
      setTotalItems(allTagsInfo.length);

      let petNumber = (allTagsInfo.length + 1).toString().padStart(7, "0");

      setNewTagNumber(`PT${petNumber}`);
    } else {
      setNewTagNumber("PT0000001");
    }
  }, [allTagsInfo]);

  const addTag = () => {
    const body = { Tag_ID: newTagNumber };

    // for(var i=0; i < 10; i++ ) {
    const response = axios
      .post("http://localhost:5000/add_tagid/", body)
      .then((response) => {
        if (response.status == 200) {
          console.log("response.data", response.data.tagInfo);
          setAllTagsInfo([...allTagsInfo, response.data.tagInfo]);
          console.log("allTagsInfo", allTagsInfo);
        }
      });
    // }
  };

  const selectPage = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full flex top-10">
      <LeftSidePanel />
      <div className="flex w-5/6 h-screen  flex-col border-t-2 px-7 mb-3">
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
                required
              />
            </div>
            <div className="flex flex-row py-7 w-1/6 justify-end">
              <button
                type="submit"
                class="flex text-sm items-center text-white bottom-2.5 font-['Poppins'] bg-[#F1B21B] rounded-md px-2 hover:bg-white hover:text-[#F1B21B] hover:border hover:border-[#F1B21B]"
                onClick={addTag}
              >
                ADD ID TAGS
              </button>
            </div>
          </div>
        </div>
        {currentItems && currentItems.length > 0
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
                  backgroundColor: '#3D9FAD',
                },
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default IdTags;
