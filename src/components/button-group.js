import React from "react";
import Button from "@mui/material/Button";
import { deleteById, findByDate, toggleValidById } from "../data";

const ButtonGroup = ({ selected, setFetchedData, filter, date }) => {
  const codeOnclick = () => {
    selected.forEach((id) => {
      toggleValidById(id);
    });
    setFetchedData(findByDate(date));
  };

  const deleteOnclick = () => {
    selected.forEach((id) => {
      deleteById(id);
    });
    setFetchedData(findByDate(date));
  };
  return (
    <>
      <Button
        size="large"
        sx={{
          width: "100%",
          paddingY: "13px",
          fontSize: "17px",
          fontWeight: "bold",
          letterSpacing: "0.05em",
        }}
        variant="contained"
        color="primary"
        onClick={codeOnclick}
        disabled={filter === "all"}
      >
        {filter === "used" && "인증번호 사용 취소"}
        {filter === "unused" && "인증번호 사용 "}
        {filter === "all" && "🚫"}
      </Button>
      <div className="button-divider" />
      <Button
        size="large"
        sx={{
          width: "100%",
          paddingY: "13px",
          fontSize: "17px",
          fontWeight: "bold",
          letterSpacing: "0.05em",
        }}
        variant="contained"
        color="error"
        onClick={deleteOnclick}
        disabled={filter === "all" || filter === "used"}
      >
        {filter === "used" && "🚫"}
        {filter === "unused" && "방문자 삭제"}
        {filter === "all" && "🚫"}
      </Button>
    </>
  );
};

export default ButtonGroup;
