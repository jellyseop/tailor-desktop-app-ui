import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { koKR } from "@mui/x-date-pickers/locales";
import "dayjs/locale/ko";

const DateInput = ({ date, setDate }) => {
  const onChange = (value) => {
    setDate(value);
  };

  return (
    <>
      {date ? (
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          adapterLocale="ko"
          localeText={koKR}
        >
          <DatePicker
            className="toogle"
            label="날짜 선택"
            format="YYYY-M-D"
            value={date}
            onChange={onChange}
            disableFuture
          />
        </LocalizationProvider>
      ) : (
        "Loading,,,"
      )}
    </>
  );
};

export default DateInput;
