import { LeadList, TableHead } from "../shared/table.model";
import TableRow from "./TableRow";

const PendWithoutInstall = (props: {
  headerConfig: TableHead[];
  tableList: LeadList[];
}) => {
  const { headerConfig, tableList } = props;

  return (
    <div className="container-fluid">
      <div className="row">
        <table className="table tableFixHead table-hover">
          <thead className="table-dark">
            <tr>
              {headerConfig.map((item) => (
                <th key={item.headerTitle}>{item.headerTitle}</th>
              ))}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <TableRow list={tableList} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PendWithoutInstall;
