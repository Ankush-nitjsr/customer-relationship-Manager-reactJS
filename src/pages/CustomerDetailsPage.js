import React, { useState } from "react";
import Header from "../components/Common/Header";
import Input from "../components/Common/Input";
import Button from "../components/Common/Button";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

function CustomerDetailsPage() {
  const { token } = useAuth();

  axios.defaults.headers.common = {
    Authorization: `Bearer ${token}`,
  };

  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [street, setStreet] = useState("");
  // const [address, setAddress] = useState("");
  // const [city, setCity] = useState("");
  // const [state, setState] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  // Using one useState to manage all the details of a customer
  const [newCustomer, setNewCustomer] = useState({
    first_name: "",
    last_name: "",
    street: "",
    address: "",
    city: "",
    state: "",
    email: "",
    phone: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // using axios library for calling server side URL
    try {
      const response = await axios.post(
        "http://localhost:8080/auth/create",
        newCustomer
      );
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <>
      <Header />
      <div className="input-wrapper" style={{ marginTop: "1rem" }}>
        <h1>Customer Details</h1>
        <form onSubmit={handleSubmit}>
          <div className="details-input">
            <input
              name="first_name"
              state={newCustomer.first_name}
              onChange={handleChange}
              type="text"
              placeholder="First Name"
            />
            <input
              name="last_name"
              state={newCustomer.last_name}
              onChange={handleChange}
              type="text"
              placeholder="Last Name"
            />
            <input
              name="street"
              state={newCustomer.street}
              onChange={handleChange}
              type="text"
              placeholder="Street"
            />
            <input
              name="address"
              state={newCustomer.address}
              onChange={handleChange}
              type="text"
              placeholder="Address"
            />
            <input
              name="city"
              state={newCustomer.city}
              onChange={handleChange}
              type="text"
              placeholder="City"
            />
            <input
              name="state"
              state={newCustomer.state}
              onChange={handleChange}
              type="text"
              placeholder="State"
            />
            <input
              name="email"
              state={newCustomer.email}
              onChange={handleChange}
              type="email"
              placeholder="Email"
            />
            <input
              name="phone"
              state={newCustomer.phone}
              onChange={handleChange}
              type="text"
              placeholder="Phone"
            />
          </div>
          <div>
            <button type="submit" className="details-submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CustomerDetailsPage;
