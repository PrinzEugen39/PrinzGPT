import { fetchUserTokenById } from "@/utils/action";
import { UserProfile, auth } from "@clerk/nextjs";
import React from "react";

const ProfilePage = async () => {
  const { userId } = auth();
  const currTokens = await fetchUserTokenById(userId);
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <h2 className="mb-8 text-xl font-semibold">
        Remaining user token amounts: {currTokens}
      </h2>
      <UserProfile />
    </div>
  );
};

export default ProfilePage;
