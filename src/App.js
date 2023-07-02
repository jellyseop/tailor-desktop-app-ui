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
  {
    field: "code",
    headerClassName: "super-app-theme--header",
    cellClassName: "super-app-theme--cell",
    headerName: "인증 번호",
    width: 100,
  },
  {
    field: "visitedAt",
    headerClassName: "super-app-theme--header",
    cellClassName: "super-app-theme--cell",
    headerName: "방문 시간",
    width: 100,
  },
  {
    field: "name",
    headerClassName: "super-app-theme--header",
    cellClassName: "super-app-theme--cell",
    headerName: "성함",
    width: 100,
  },
  {
    field: "phone",
    headerClassName: "super-app-theme--header",
    cellClassName: "super-app-theme--cell",
    headerName: "연락처",
    width: 150,
  },

  {
    field: "memo",
    headerClassName: "super-app-theme--header",
    cellClassName: "super-app-theme--cell",
    headerName: "특이사항",
    width: 597,
  },
];

const rows = [
  {
    id: 1,
    visitedAt: "13:10",
    name: "김대욱",
    phone: "010-3445-1161",
    code: 355412,
    memo: "배가 많이 고픔. 좀 졸리네 이거 과연 끄타지 갈까? 제발....",
  },
  {
    id: 2,
    visitedAt: "13:12",
    name: "박민경",
    phone: "010-1234-5678",
    code: 277481,
    memo: "오늘이 마지막",
  },
  {
    id: 3,
    visitedAt: "13:14",
    name: "이준섭",
    phone: "010-9876-5432",
    code: 138721,
    memo: "디자인 끝",
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
        <div className="app-controller">
          <div>
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
              <ToggleButton value="all">전체</ToggleButton>
              <ToggleButton value="used">사용</ToggleButton>
              <ToggleButton value="unused">미사용</ToggleButton>
            </ToggleButtonGroup>
            <div className="divider" />
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
            >
              인증번호 사용
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
            >
              방문자 삭제
            </Button>
            <div className="divider" />
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
                fullWidth
                label="성함"
                variant="outlined"
              />
              <div className="form-divider" />
              <TextField
                id="outlined-basic"
                fullWidth
                label="연락처"
                variant="outlined"
              />
              <div className="form-divider" />
              <TextField
                id="outlined-basic"
                fullWidth
                label="인증코드"
                variant="outlined"
              />

              <div className="form-divider" />
              <TextField
                id="outlined-multiline-flexible"
                fullWidth
                label="특이사항"
                multiline
                maxRows={2}
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
              >
                등 록
              </Button>
            </Box>
          </div>
          <div className="divider" />
          <div className="footer">version 1.1</div>
        </div>
        <Box
          sx={{
            "& .super-app-theme--header": {
              fontSize: "18px",
              color: "#374151",
            },
            "& .super-app-theme--cell": {
              fontSize: "16px",
              color: "#374151",
            },
          }}
          className="app-viewer"
        >
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
        </Box>
      </div>
    </div>
  );
}

export default App;
