import Client from "./Client";
import Table from "react-bootstrap/Table";

const Clients = ({ users ,onDelete, getGEO,geo}) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Phone</th>
            <th>IP</th>
            <th>country</th>
            <th>city</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return <Client key={user._id} user={user} onDelete={onDelete} getGEO ={getGEO} geo={geo}/>;
          })}
        </tbody>
      </Table>
    </div>
  );
};
export default Clients;
