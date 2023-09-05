import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
getServerSession;

import React from "react";

const ProtectedRoute = async () => {
  const session = await getServerSession();
  if (!session || !session.user) {
    redirect("/api/auth/signin");
  }
  return (
    <div>
      This is a protected route
      <br />
      You will only see this if you are authenticated
    </div>
  );
};

export default ProtectedRoute;
