import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Group1 from "./pages/groups/Group-1";
import Group2 from "./pages/groups/Group-2";
import Layout from "./pages/layout/Layout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/group1" element={<Group1 />} />
          <Route path="/group2" element={<Group2 />} />
          <Route path="*" element={<h1>404 not found</h1>} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
