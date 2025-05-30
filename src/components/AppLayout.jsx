import React from "react";
import AppHeader from "./Header";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";

const { Content } = Layout;

const AppLayout = () => {
  return (
    <Layout style={{ marginTop: 64, background: "#ffffff" }}>
      <AppHeader />
      <Content
        style={{ marginTop: 64, padding: "16px", background: "#ffffff" }}
      >
        <Outlet />
      </Content>
    </Layout>
  );
};

export default AppLayout;
