"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
export const useRefreshToken = () => {
  const { data: session } = useSession();

  const refreshToken = async () => {
    const res = await axios.post("http://localhost:4000/api/token", {
      refreshtoken: session?.user.refreshToken,
    });

    if (session) session.user.accessToken = res.data.data.accessToken;
  };
  return refreshToken;
};
