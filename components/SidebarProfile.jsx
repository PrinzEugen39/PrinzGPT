import { UserButton, auth, currentUser } from "@clerk/nextjs";
import React from "react";

const SidebarProfile = async () => {
  const user = await currentUser();
  // const { userId } = auth();

  return (
    <div className="flex items-center gap-2 px-4">
      <UserButton afterSignOutUrl="/" />
      <p>{user.emailAddresses[0]?.emailAddress}</p>
    </div>
  );
};

export default SidebarProfile;
