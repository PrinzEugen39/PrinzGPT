import Sidebar from "@/components/Sidebar";
import React from "react";
import { FaBarsStaggered } from "react-icons/fa6";

const DahsboardLayout = ({ children }) => {
  return (
    <div className="drawer md:drawer-open">
      <input type="checkbox" id="my-drawer-2" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer-2"
          className="fixed drawer-button md:hidden top-6 right-6"
        >
          <FaBarsStaggered className="w-8 h-8 text-primary" />
        </label>
        <div className="min-h-screen px-8 py-12 bg-base-200">{children}</div>
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <Sidebar />
      </div>
    </div>
  );
};

export default DahsboardLayout;
