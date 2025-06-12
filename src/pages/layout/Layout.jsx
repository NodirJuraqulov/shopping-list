import React from "react";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div>
        <Header />
        <div className="flex gap-20 mt-16">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Layout);
