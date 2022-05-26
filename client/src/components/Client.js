import { FaTimes } from "react-icons/fa";

const Client = ({ user, onDelete, getGEO, geo }) => {
  let { Name, ID, Phone, IP } = user;
  let { country, city } = geo;

  return (
    <tr>
      <td>{Name}</td>
      <td>{ID}</td>
      <td>{Phone}</td>
      <td>{IP}</td>
      <td>{country}</td>
      <td>{city}</td>
      <td>
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(user.ID)}
        />
      </td>
    </tr>
  );
};

export default Client;
