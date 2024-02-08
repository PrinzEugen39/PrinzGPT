import { UserProfile } from "@clerk/nextjs";
import React from "react";

const ProfilePage = () => {
  return (
    <div className="flex items-center justify-center py-12">
      <UserProfile />
    </div>
  );
};

export default ProfilePage;
