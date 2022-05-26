// Get and add User
//  and Validation

import React from "react";
import { useState } from "react";

const AddUser = ({ onAdd }) => {
  const [Name, setName] = useState("");
  const [ID, setID] = useState("");
  const [number, setNumber] = useState("");
  const [IP, setIP] = useState("");
  let error_check = true;

  const onSubmit = (e) => {
    e.preventDefault();

    // Name validation
    if (!/^[a-zA-Z ]{2,30}$/.test(Name)) {
      alert("Please add a Valid Name");
      error_check = false;
    }

    // ID validation
    if (!/^[0-9]{8,9}$/.test(ID)) {
      alert("Please add a Valid ID");
      error_check = false;
    }

    // Number validation
    if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(number)) {
      alert("Please add a Valid number");
      error_check = false;
    }

    // IP validation
    if (
      !/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
        IP
      )
    ) {
      alert("Please add a Valid IP");
      error_check = false;
    }
    // Add User to db
    if (error_check) {
      onAdd(Name, ID, number, IP);
    }
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Name</label>
        <input
          type="text"
          required
          placeholder="Add Task"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>ID</label>
        <input
          type="text"
          required
          maxLength={9}
          placeholder="ID"
          onChange={(e) => setID(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Phone number</label>
        <input
          type="text"
          required
          maxLength={12}
          placeholder="Phone number"
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label>IP</label>
        <input
          type="text"
          required
          maxLength={15}
          placeholder="IP"
          onChange={(e) => setIP(e.target.value)}
        />
      </div>
      <input type="submit" value="Save User" className="btn btn-block" />
    </form>
  );
};

export default AddUser;
