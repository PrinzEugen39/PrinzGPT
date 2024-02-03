import React from "react";
import SidebarHeader from "./SidebarHeader";
import SidebarLinks from "./SidebarLinks";
import SidebarProfile from "./SidebarProfile";

const Sidebar = () => {
  return (
    <div className="grid min-h-full grid-rows-[auto,1fr,auto] px-4 py-12 w-80 bg-base-300">
      <SidebarHeader />
      <SidebarLinks />
      <SidebarProfile />
    </div>
  );
};

export default Sidebar;
