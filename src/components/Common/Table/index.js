import React from "react";
import "./styles.css";

function Table({ data }) {
  // const data = [
  //   {
  //     first_name: "Ankush",
  //     last_name: "kumar",
  //     address: "Hno 1",
  //     city: "Delhi",
  //     state: "Delhi",
  //     email: "ank@gmail.com",
  //     phone: "123456",
  //     action: "D/E",
  //   },
  // ];
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        {
          <tbody>
            {data.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.first_name}</td>
                  <td>{val.last_name}</td>
                  <td>{val.address}</td>
                  <td>{val.city}</td>
                  <td>{val.state}</td>
                  <td>{val.email}</td>
                  <td>{val.phone}</td>
                  <td>{"⛔️/🖊️"}</td>
                </tr>
              );
            })}
          </tbody>
        }
      </table>
    </div>
  );
}

export default Table;
