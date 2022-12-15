import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  const navigation = useNavigation();

  return (
    <div>
      <Navbar />
      {navigation.state === "loading" && (
        <h1 className="text-success mt-4 text-center">Loading...</h1>
      )}
      <Outlet />
    </div>
  );
};

export default Layout;
