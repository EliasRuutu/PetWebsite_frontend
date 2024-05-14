import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import "./css/datepicker.css";
import TextField from "@mui/material/TextField";
export default function BasicDatePicker(props) {
  const smallInputStyle = {
    fontSize: "0.375rem", // Adjust this value to your preference for a "smaller" appearance
    padding: "8px", // Adjust padding as needed for the smaller size
  };

  const [selectedDate, setSelectedDate] = React.useState(null);
  const handleDateChange = (newDate) => {
    const formattedDate = newDate ? newDate.format("MM/DD/YYYY") : "";
    console.log(formattedDate);
    props.onChange(formattedDate);
  };

  return (
    <div
      className="datepicker-container"
      style={{ transformOrigin: "top left" }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer
          components={["DatePicker"]}
          style={{ paddingTop: "0px" }}
        >
          <DatePicker
            value={props.selectedDate ? dayjs(props.selectedDate) : null}
            onChange={handleDateChange}
            renderInput={(params) => (
              <TextField
                {...params}
                required
                helperText={params.error ? "This field is required." : null}
              />
            )}
          />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
}
