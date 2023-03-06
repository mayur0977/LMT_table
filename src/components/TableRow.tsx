import { LeadList } from "../shared/table.model";

const TableRow = (props: { list: LeadList[] }) => {
  const { list } = props;
  return (
    <>
      {list.map((item) => (
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
            {item.outBoundCallInLast3Days ? item.outBoundCallInLast3Days : "-"}
          </td>
          <td>{item.totalOutBoundCalls}</td>
          <td>{item.languageCode}</td>
          <td>{item.nextContactDate}</td>
          <td>{item.followUpAgent}</td>
          <td>{item.accountNote}</td>
          <td>{item.mostRecentDisposition}</td>
          <td>Action</td>
        </tr>
      ))}
    </>
  );
};

export default TableRow;
