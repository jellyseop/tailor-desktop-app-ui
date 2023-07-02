import { useEffect, useState } from "react";
import "./app.css";
import { DataGrid, koKR } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { findByDate } from "./data";
import { tableColumns } from "./config";
import DateInput from "./components/date-picker";
import ToggleCondition from "./components/toggle-condition";
import ButtonGroup from "./components/button-group";
import RegisterForm from "./components/register-form";
import dayjs from "dayjs";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [date, setDate] = useState(dayjs());
  const [filter, setFilter] = useState(null);
  const [selected, setSelected] = useState([]);

  const [fetchedData, setFetchedData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const initApp = () => {
    //Fetch data from DB
    setFetchedData(findByDate(date));
    setFilter("unused");
    setIsLoading(false);
  };
  useEffect(() => {
    initApp();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setFetchedData(findByDate(date));
  }, [date]);

  useEffect(() => {
    if (filter === "all") {
      return setFilteredData(fetchedData);
    }
    if (filter === "used") {
      return setFilteredData(fetchedData.filter((data) => !data.isValid));
    }
    if (filter === "unused") {
      return setFilteredData(fetchedData.filter((data) => data.isValid));
    }
  }, [filter, fetchedData]);

  const onRowClick = (rowSelected) => {
    setSelected(rowSelected);
  };
  return (
    <div className="App">
      <div className="app-container">
        <div className="app-controller">
          <div>
            <DateInput date={date} setDate={setDate} />
            <div className="divider" />
            <ToggleCondition filter={filter} setFilter={setFilter} />
            <div className="divider" />
            <ButtonGroup
              selected={selected}
              setFetchedData={setFetchedData}
              filter={filter}
              date={date}
            />
            <div className="divider" />
            <RegisterForm setFetchedData={setFetchedData} date={date} />
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
          {isLoading ? (
            "Loading..."
          ) : (
            <DataGrid
              rows={filter === "all" ? fetchedData : filteredData}
              columns={tableColumns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 9 },
                },
              }}
              localeText={koKR.components.MuiDataGrid.defaultProps.localeText}
              onCellClick={() => {
                /*복사구현*/
              }}
              onRowSelectionModelChange={onRowClick}
              autoPageSize
              checkboxSelection
              disableColumnFilter
              disableColumnMenu
            />
          )}
        </Box>
      </div>
    </div>
  );
}

export default App;
