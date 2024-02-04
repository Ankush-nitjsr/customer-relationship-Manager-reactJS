import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import Button from "../components/Common/Button";
import Input from "../components/Common/Input";
import Table from "../components/Common/Table";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function CustomerListPage() {
  const { token } = useAuth();

  axios.defaults.headers.common = {
    Authorization: `Bearer ${token}`,
  };

  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [customersData, setCustomersData] = useState([]);
  const navigate = useNavigate();

  const handleSync = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/auth/get-all-customers-details"
      );
      const data = response.data;
      setCustomersData(data);
      console.log(data);
      console.log(typeof data);
    } catch (error) {
      console.error(error);
    }
  };
  // unable to use navigate function in useEffect
  // useEffect(() => {
  //   NavigateToCustomerDetailsPage();
  // }, []);

  const NavigateToCustomerDetailsPage = () => {
    navigate("/customer-details");
  };
  return (
    <>
      <Header />
      <div className="input-wrapper" style={{ marginTop: "1rem" }}>
        <h1>Customer List</h1>
        <div className="command-line">
          <Button
            text={loading ? "Loading..." : "Add Customer"}
            disabled={loading}
            onClick={NavigateToCustomerDetailsPage}
          />
          <Button text={"Search"} />
          <input
            name="search"
            state={search}
            type="text"
            placeholder="Search"
            className="search-input"
          />
          <button onClick={handleSync} className="sync-btn">
            Sync
          </button>
        </div>
        <div style={{ borderTop: "2px solid var(--white)", width: "100%" }}>
          <Table data={customersData} />
        </div>
      </div>
    </>
  );
}

export default CustomerListPage;
