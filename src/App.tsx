/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./App.scss";
import PendWithoutInstall from "./components/PendWithoutInstall";
import { LeadList, TableFilter, TableHead } from "./shared/table.model";
import tablesService from "./shared/table.service";

function App() {
  //Pending witout istall
  const tableConfig: TableHead[] = [
    { headerTitle: "Customer Name", isSorting: false, fieldName: "name" },
    { headerTitle: "Lead Agent", isSorting: false, fieldName: "generalName" },
    { headerTitle: "Pend Agent", isSorting: false, fieldName: "pendAgentName" },
    { headerTitle: "ST", isSorting: false, fieldName: "leaseState" },
    {
      headerTitle: "PW",
      isSorting: false,
      fieldName: "haveAllRequiredPaperwork",
    },
    {
      headerTitle: "Initiated date",
      isSorting: false,
      fieldName: "initiatedDate",
    },
    { headerTitle: "Pend Date", isSorting: false, fieldName: "pendDate" },
    {
      headerTitle: "Last IB call",
      isSorting: false,
      fieldName: "dateOfLastInBoundCall",
    },
    {
      headerTitle: "Last OB call",
      isSorting: false,
      fieldName: "dateOfLastInBoundCall",
    },
    {
      headerTitle: "OB made by",
      isSorting: false,
      fieldName: "outBoundCallMadeBy",
    },
    {
      headerTitle: "OB 3 days",
      isSorting: false,
      fieldName: "outBoundCallInLast3Days",
    },
    {
      headerTitle: "total OB",
      isSorting: false,
      fieldName: "totalOutBoundCalls",
    },
    { headerTitle: "L", isSorting: false, fieldName: "languageCode" },
    {
      headerTitle: "Next contact",
      isSorting: false,
      fieldName: "nextContactDate",
    },
    {
      headerTitle: "Follow up agent",
      isSorting: false,
      fieldName: "followUpAgent",
    },
    { headerTitle: "Account Note", isSorting: false, fieldName: "accountNote" },
    {
      headerTitle: "Most recent disposition",
      isSorting: false,
      fieldName: "mostRecentDisposition",
    },
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
