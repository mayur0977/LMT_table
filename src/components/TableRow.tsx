import { LeadList, TableHead } from "../shared/table.model";

const TableRow = (props: { list: LeadList[]; columConfig: TableHead[] }) => {
  const { list, columConfig } = props;
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
        list.map((item: any) => (
          <tr key={item.customerID}>
            {columConfig.map((columnItem) => (
              <td>{item[columnItem.fieldName]}</td>
            ))}
            <td>Action</td>
          </tr>
        ))}
    </>
  );
};

export default TableRow;
