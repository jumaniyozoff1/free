import React from "react";
import { useNavigate } from "react-router-dom";

const CountryCard = ({ country }) => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: 260,
        borderRadius: 12,
        overflow: "hidden",
        backgroundColor: "#fff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        margin: "12px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transition: "all 0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
      }}
    >
      <div style={{ padding: 20, textAlign: "center" }}>
        <h2 style={{ fontSize: 20, marginBottom: 16 }}>{country?.strArea}</h2>
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
          onClick={() => navigate(`/countriesFood/${country.strArea}/foods`)}
        >
          Tatib ko'rish
        </button>
      </div>
    </div>
  );
};

export default CountryCard;
