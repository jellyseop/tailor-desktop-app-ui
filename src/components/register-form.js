import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { create } from "../data";
import dayjs from "dayjs";
import { findByDate } from "../data";

const RegisterForm = ({ setFetchedData, date }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [memo, setMemo] = useState("");

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "name") {
      setName(value);
    }
    if (name === "phone") {
      setPhone(value);
    }
    if (name === "code") {
      setCode(value);
    }
    if (name === "memo") {
      setMemo(value);
    }
  };

  const onSubmit = () => {
    const now = dayjs();
    create({
      name,
      phone,
      code,
      memo,
      isValid: true,
      date: now.format("YYYY-MM-DD"),
      visitedAt: now.format("HH:mm"),
    });
    setFetchedData(findByDate(date));
    setName("");
    setPhone("");
    setCode("");
    setMemo("");
  };

  return (
    <Box
      component="form"
      sx={{
        border: "1px solid lightgray",
        borderRadius: "5px",
        py: "30px",
        px: "20px",
        width: "280px",
      }}
      noValidate
      autoComplete="off"
    >
      <div className="form-title">방문자 등록</div>
      <div className="form-divider" />
      <TextField
        id="outlined-basic"
        name="name"
        fullWidth
        label="성함"
        variant="outlined"
        onChange={onChange}
        value={name}
      />
      <div className="form-divider" />
      <TextField
        id="outlined-basic"
        name="phone"
        fullWidth
        label="연락처"
        variant="outlined"
        onChange={onChange}
        value={phone}
      />
      <div className="form-divider" />
      <TextField
        id="outlined-basic"
        name="code"
        fullWidth
        label="인증코드"
        variant="outlined"
        onChange={onChange}
        value={code}
      />

      <div className="form-divider" />
      <TextField
        id="outlined-multiline-flexible"
        name="memo"
        fullWidth
        label="특이사항"
        multiline
        maxRows={2}
        onChange={onChange}
        value={memo}
      />
      <div className="form-divider" />

      <Button
        size="large"
        sx={{
          width: "100%",
          paddingY: "13px",
          fontSize: "17px",
          marginY: "10px",
          fontWeight: "semibold",
          letterSpacing: "0.05em",
        }}
        variant="contained"
        onClick={onSubmit}
      >
        등 록
      </Button>
    </Box>
  );
};

export default RegisterForm;
