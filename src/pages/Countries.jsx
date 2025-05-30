import React, { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";
import axios from "axios";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
      .then((res) => {
        setCountries(res.data.meals);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const loadingIcon = (
    <LoadingOutlined style={{ fontSize: 36, color: "#FFD700" }} spin />
  );
  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
        <Spin indicator={loadingIcon} />
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "20px",
        gap: "40px",
      }}
    >
      {countries?.map((country) => (
        <CountryCard key={country.id} country={country} />
      ))}
    </div>
  );
};

export default Countries;
