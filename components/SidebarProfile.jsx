import { fetchOrGenerateTokens } from "@/utils/action";
import { UserButton, auth, currentUser } from "@clerk/nextjs";
import React from "react";

const SidebarProfile = async () => {
  const user = await currentUser();
  const { userId } = auth();

  await fetchOrGenerateTokens(userId);

  return (
    <div className="flex items-center gap-4 px-4">
      <UserButton afterSignOutUrl="/" />
      <p className="font-semibold capitalize">{user.username}</p>
    </div>
  );
};

export default SidebarProfile;
