import { LeadList } from "../shared/table.model";

const TableRow = (props: { list: LeadList[] }) => {
  const { list } = props;
  return (
    <>
      {list.length === 0 && (
        <tr className="d-flex align-items-center justify-content-center">
          <td colSpan={4} className="fs-1 text-bold">
            Loading
          </td>
        </tr>
      )}
      {list &&
        list.map((item) => (
          <tr key={item.customerID}>
            <td>
              {item.name}
              <br /> {item.customerID}
            </td>
            <td>{item.generalName}</td>
            <td>{item.pendAgentName}</td>
            <td>{item.leaseState}</td>
            <td>{item.haveAllRequiredPaperwork ? "YES" : "NO"}</td>
            <td>{item.initiatedDate}</td>
            <td>{item.pendDate}</td>
            <td>
              {item.dateOfLastInBoundCall ? item.dateOfLastInBoundCall : "-"}
            </td>
            <td>
              {item.dateOfLastInBoundCall ? item.dateOfLastInBoundCall : "-"}
            </td>
            <td>{item.outBoundCallMadeBy ? item.outBoundCallMadeBy : "-"}</td>
            <td>
              {item.outBoundCallInLast3Days
                ? item.outBoundCallInLast3Days
                : "-"}
            </td>
            <td>{item.totalOutBoundCalls}</td>
            <td>{item.languageCode}</td>
            <td>{item.nextContactDate}</td>
            <td>{item.followUpAgent}</td>
            <td
              title={item.accountNote ? item.accountNote : ""}
              className="text-truncate"
              style={{ maxWidth: "200px" }}
            >
              {item.accountNote}
            </td>
            <td className="text-truncate">{item.mostRecentDisposition}</td>
            <td>Action</td>
          </tr>
        ))}
    </>
  );
};

export default TableRow;
