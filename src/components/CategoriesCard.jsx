import React from "react";

const CategoriesCard = ({ category }) => {
  return (
    <div
      style={{
        width: 300,
        borderRadius: 12,
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "pointer",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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
      <img
        src={category?.strCategoryThumb}
        alt="category"
        style={{ width: "100%", height: 180, objectFit: "cover" }}
      />
      <div style={{ padding: 16, textAlign: "center" }}>
        <h3 style={{ marginBottom: 12, fontSize: 18 }}>
          {category?.strCategory}
        </h3>
        <button
          style={{
            padding: "8px 16px",
            backgroundColor: "#FFD700",
            border: "none",
            borderRadius: 6,
            color: "#000",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#e5c100")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#FFD700")
          }
        >
          Tatib ko'rish
        </button>
      </div>
    </div>
  );
};

export default CategoriesCard;
