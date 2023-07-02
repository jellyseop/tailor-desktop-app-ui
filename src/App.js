import * as React from "react";
import "./app.css";
import { DataGrid } from "@mui/x-data-grid";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const columns = [
  { field: "code", headerName: "인증번호", width: 100 },
  { field: "name", headerName: "성함", width: 100 },
  { field: "phone", headerName: "연락처", width: 150 },

  {
    field: "memo",
    headerName: "특이사항",
    width: 300,
  },
];

const rows = [
  {
    id: 1,
    name: "김대욱",
    phone: "010-3445-1161",
    code: 355412,
    memo: "배가 많이 고픔. 좀 졸리네 이거 과연 끄타지 갈까? 제발....",
  },
];

function App() {
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <div className="App">
      <div className="app-container">
        <div className="Config">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker className="toogle" label="날짜 선택" />
          </LocalizationProvider>
          <div className="divider" />
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            size="large"
            fullWidth
            exclusive
            onChange={handleChange}
            aria-label="Platform"
            className="toggle"
          >
            <ToggleButton value="used">사용</ToggleButton>
            <ToggleButton value="unused">미사용</ToggleButton>
            <ToggleButton value="all">전체</ToggleButton>
          </ToggleButtonGroup>
          <div className="divider" />
          <Box
            component="form"
            sx={{
              border: "1px solid lightgray",
              borderRadius: "5px",
              p: "10px",
              width: "278px",
              rowGap: "2px",
            }}
            noValidate
            autoComplete="off"
          >
            <div className="divider" />
            <TextField
              id="outlined-basic"
              fullWidth
              label="성함"
              variant="outlined"
            />
            <div className="divider" />
            <TextField
              id="outlined-basic"
              fullWidth
              label="연락처"
              variant="outlined"
            />
            <div className="divider" />
            <TextField
              id="outlined-basic"
              fullWidth
              label="인증코드"
              variant="outlined"
            />

            <div className="divider" />
            <TextField
              id="outlined-multiline-flexible"
              fullWidth
              label="특이사항"
              multiline
              maxRows={2}
            />
            <div className="divider" />

            <Button size="large" fullWidth variant="contained">
              등 록
            </Button>
            <div className="divider" />
          </Box>
          <div className="divider" />
          <Button size="large" fullWidth variant="outlined" color="error">
            초기화
          </Button>
        </div>
        <div style={{ height: 600, width: 700 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
}

export default App;
