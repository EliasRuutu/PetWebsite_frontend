import * as React from "react";
import { Pagination } from "@mui/material";

const PaginationCmp = (props) => {
    const [currentPage, setCurrentPage] = React.useState(props.page)
    const selectPage = (event, page) => {
        setCurrentPage(page)
        props.onChange(page);
    }

    return (
        <div className="flex items-end justify-end">
          {props.count > 1 && (
            <Pagination
              count={props.count}
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
    )
}

 export default PaginationCmp;