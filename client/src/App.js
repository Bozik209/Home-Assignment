import { useState, useEffect } from "react";
import "./App.css";
import Clients from "./components/Clients";
import Button from "./components/Button";
import AddUser from "./components/AddUser";
import Filter from "./components/Filter";

function App() {
  // -------useState-------
  const [showAddUser, setShowAddUSer] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  const [users, setUsers] = useState([]);
  const [geo, setgeo] = useState([]);

  // -------API-------
  const getApi = async () => {
    // GET request using fetch inside useEffect React hook
    await fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  };
  const getGEO = async (query) => {
    // GET request ip-api
    await fetch(`http://ip-api.com/json/`)
      .then((res) => res.json())
      .then((data) => {
        setgeo(data);
      });
  };
  // -------useEffect-------
  useEffect(() => {
    getApi();
    getGEO();
  }, []);

  // -------Add user-------
  const addUser = async (name, id, number, ip) => {
    const tempUser = {
      Name: name,
      ID: id,
      Phone: "+972" + number.slice(1),
      IP: ip,
    };

    const res = await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(tempUser),
    });

    const data = await res.json();
    setUsers([data, ...users]);
  };

  // -------Delete user-------
  const onDelete = async (id) => {
    await fetch(`http://localhost:5000/users/${id}`, { method: "DELETE" });
    setUsers(users.filter((user) => user.ID !== id));
  };

  // -------Filter user-------
  const FilterUser = (user_filter) => {
    if (user_filter === "") getApi();

    setUsers(
      users.filter(
        (user) =>
          user.Name.toLowerCase().includes(user_filter) ||
          user.ID.includes(user_filter) ||
          user.Phone.includes(user_filter) ||
          user.IP.includes(user_filter)
      )
    );
  };

  return (
    <div className="container">
      <Button
        onAdd={() => {
          setShowAddUSer(!showAddUser);
          setShowFilter(false);
        }}
      />
      <Button
        text={"Filter"}
        color={"green"}
        onAdd={() => {
          setShowFilter(!showFilter);
          setShowAddUSer(false);
        }}
      />

      {showAddUser && <AddUser onAdd={addUser} />}
      {showFilter && <Filter onFilter={FilterUser} />}

      <Clients users={users} onDelete={onDelete} getGEO={getGEO} geo={geo} />
    </div>
  );
}

export default App;
