import "./App.scss";
import PendWithoutInstall from "./components/PendWithoutInstall";
import { TableHead } from "./shared/table.model";

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
  const tableList = Array.from(Array(100).keys());

  return (
    <>
      <PendWithoutInstall headerConfig={tableConfig} tableList={tableList} />
    </>
  );
}

export default App;
