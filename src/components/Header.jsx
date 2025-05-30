import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Layout, Menu, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation();

  const updateWindowSize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowSize);
    return () => window.removeEventListener("resize", updateWindowSize);
  }, []);

  const items = [
    {
      key: "/",
      label: (
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "#FFD700" : "gold",
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Categories
        </NavLink>
      ),
    },
    {
      key: "/contries",
      label: (
        <NavLink
          to="/countries"
          style={({ isActive }) => ({
            color: isActive ? "#FFD700" : "gold",
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Countries
        </NavLink>
      ),
    },
  ];

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          zIndex: 1000,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 16px",
          backgroundColor: "#ffffff",
        }}
      >
        {isMobile ? (
          <>
            <div
              style={{
                color: "#000",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Ovqatlar
            </div>
            <Button
              icon={<MenuOutlined />}
              onClick={() => setOpen(true)}
              style={{
                border: "1px solid #FFD700",
                color: "#FFD700",
              }}
            />
          </>
        ) : (
          <>
            <Menu
              mode="horizontal"
              selectedKeys={
                location.pathname.startsWith("/countries")
                  ? ["/contries"]
                  : location.pathname === "/"
                  ? ["/"]
                  : []
              }
              items={items}
              style={{
                backgroundColor: "transparent",
                flex: 1,
              }}
            />

            <div
              style={{
                color: "#000",
                fontSize: 20,
                fontWeight: "bold",
                marginLeft: "auto",
              }}
            >
              Ovqatlar
            </div>
          </>
        )}
      </div>

      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
      >
        <Menu
          mode="vertical"
          selectedKeys={[location.pathname]}
          items={items}
          onClick={() => setOpen(false)}
        />
      </Drawer>
    </>
  );
};

export default Header;
