const TableRow = (props: { list: number[] }) => {
  const { list } = props;
  return (
    <>
      {list.map((item, index) => (
        <tr key={index}>
          <td>Customer Name {item}</td>
          <td>Lead Agent</td>
          <td>Pend Agent</td>
          <td>ST</td>
          <td>PW</td>
          <td>Initiated date</td>
          <td>Pend Date</td>
          <td>Last IB call</td>
          <td>Last OB call</td>
          <td>OB made by</td>
          <td>OB 3 days</td>
          <td>total OB</td>
          <td>L</td>
          <td>Next contact</td>
          <td>Follow up agent</td>
          <td>Account Note</td>
          <td>Most recent disposition</td>
          <td>Action</td>
        </tr>
      ))}
    </>
  );
};

export default TableRow;
