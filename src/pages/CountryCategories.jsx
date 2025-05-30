import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CountryCategoriesCard from "../components/CountryCategoriesCard";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const CountryCategories = () => {
  const { countrName } = useParams();
  const [countryCategory, setCountryCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${countrName}`)
      .then((res) => {
        console.log(res.data.meals);
        setCountryCategory(res.data.meals);
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
      {countryCategory?.map((meal) => (
        <CountryCategoriesCard key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
};

export default CountryCategories;
