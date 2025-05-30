import React, { useEffect, useState } from "react";
import CategoriesCard from "../components/CategoriesCard";
import axios from "axios";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Categories = () => {
  const [category, setCategory] = useState([]);
  const [loading, setloading] = useState(true);

  const loadingIcon = (
    <LoadingOutlined style={{ fontSize: 36, color: "#FFD700" }} spin />
  );
  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((res) => {
        setCategory(res.data.categories);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
        setloading(false);
      });
  }, []);
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
      {category?.map((cat) => (
        <CategoriesCard key={cat.idCategory} category={cat} />
      ))}
    </div>
  );
};

export default Categories;
