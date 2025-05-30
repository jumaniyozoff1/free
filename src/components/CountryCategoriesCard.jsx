import React from "react";
import { useNavigate } from "react-router-dom";

const CountryCategoriesCard = ({ meal }) => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: 280,
        borderRadius: 12,
        overflow: "hidden",
        backgroundColor: "#fff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        margin: "12px",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.3s ease",
      }}
    >
      <img
        src={meal?.strMealThumb}
        alt={meal?.strMeal}
        style={{
          width: "100%",
          height: 180,
          objectFit: "cover",
        }}
      />
      <div style={{ padding: "16px", textAlign: "center" }}>
        <h3 style={{ fontSize: 20, marginBottom: 12 }}>{meal?.strMeal}</h3>
        <button
          style={{
            padding: "8px 16px",
            backgroundColor: "#FFD700",
            border: "none",
            borderRadius: 8,
            fontWeight: "bold",
            color: "#000",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#e5c100")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#FFD700")
          }
          onClick={() => navigate(`/recipe/${meal.strMeal}`)}
        >
          Batafsil ko'rish
        </button>
      </div>
    </div>
  );
};

export default CountryCategoriesCard;
