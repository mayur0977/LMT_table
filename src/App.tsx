/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./App.scss";
import PendWithoutInstall from "./components/PendWithoutInstall";
import { LeadList, TableFilter, TableHead } from "./shared/table.model";
import tablesService from "./shared/table.service";

function App() {
  const tableConfig: TableHead[] = [
    { headerTitle: "Customer Name", isSorting: false },
    { headerTitle: "Lead Agent", isSorting: false },
    { headerTitle: "Pend Agent", isSorting: false },
    { headerTitle: "ST", isSorting: false },
    { headerTitle: "PW", isSorting: false },
    { headerTitle: "Initiated date", isSorting: false },
    { headerTitle: "Pend Date", isSorting: false },
    { headerTitle: "Last IB call", isSorting: false },
    { headerTitle: "Last OB call", isSorting: false },
    { headerTitle: "OB made by", isSorting: false },
    { headerTitle: "OB 3 days", isSorting: false },
    { headerTitle: "total OB", isSorting: false },
    { headerTitle: "L", isSorting: false },
    { headerTitle: "Next contact", isSorting: false },
    { headerTitle: "Follow up agent", isSorting: false },
    { headerTitle: "Account Note", isSorting: false },
    { headerTitle: "Most recent disposition", isSorting: false },
  ];

  const [pendWithoutInstallList, setPendWithoutInstallList] = useState<
    LeadList[]
  >([]);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pagePerSize, setPagePerSize] = useState<number>(25);

  const filterData: TableFilter = {
    State: "",
    Disposition: "",
    AssignedToMe: "",
    InitiatedDateFrom: "1900-01-01T00:00:00",
    InitiatedDateTo: "1900-01-01T00:00:00",
    LastInBoundCallToDate: "1900-01-01T00:00:00",
    LastInBoundCallFromDate: "1900-01-01T00:00:00",
    LastOutBoundCallToDate: "1900-01-01T00:00:00",
    LastOutBoundCallFromDate: "1900-01-01T00:00:00",
    TotalOutBounds: 0,
    TotalOutBoundsMin: 0,
    TotalOutBoundsMax: 0,
    OutBoundLastThreeDays: 0,
    OutBoundLastThreeDaysMin: 0,
    OutBoundLastThreeDaysMax: 0,
    NextContactTo: "1900-01-01T00:00:00",
    NextContactFrom: "1900-01-01T00:00:00",
    PendToDate: "1900-01-01T00:00:00",
    PendFromDate: "1900-01-01T00:00:00",
    InstallToDate: "1900-01-01T00:00:00",
    InstallFromDate: "1900-01-01T00:00:00",
    isNextContactDateRange: false,
    isNoContactDate: false,
    isDoNotFollowUp: false,
    LanguageCode: "",
    PW: "",
    SearchText: "",
  };

  const getData = (currentPage: number, pagePerSize: number) => {
    setPendWithoutInstallList([]);
    tablesService
      .getPendWithoutInstallDataList(currentPage, pagePerSize, filterData)
      .then((res) => {
        console.log("RES", res);
        setPendWithoutInstallList(res.data.leadList);
      });
  };
  const pageSizeSelect = (e: any) => {
    setPagePerSize(+e);
    getData(currentPage, e);
  };
  // const nextPage = (e: any) => {
  //   setCurrentPage(e);
  //   getData(e, pagePerSize);
  // };

  useEffect(() => {
    getData(currentPage, pagePerSize);
  }, []);

  return (
    <>
      <div className="container">
        <div className="d-flex align-items-center p-3">
          <label htmlFor="selectPageSize">Records per page </label>
          {"    "}
          <select
            className="p-1"
            id="selectPageSize"
            value={pagePerSize}
            onChange={(e) => {
              pageSizeSelect(e.target.value);
            }}
          >
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="-1">All</option>
          </select>

          {/* <button
            onClick={() => {
              setCurrentPage(currentPage + 1);
              nextPage(currentPage + 1);
            }}
          >
            Next Page {currentPage}
          </button> */}
        </div>
      </div>
      <PendWithoutInstall
        headerConfig={tableConfig}
        tableList={pendWithoutInstallList}
      />
    </>
  );
}

export default App;
