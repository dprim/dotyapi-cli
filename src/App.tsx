import React, { useState, useEffect } from "react";
import { setAccessToken } from "./getAccessToken";
import { Routes } from "./Routes";

interface Props {}

export const App: React.FC<Props> = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      fetch("http://localhost:8000/refresh_token", {
          method: "POST",
          credentials: "include"
      }).then(async x => {
          const {accessToken} = await x.json();
          setAccessToken(accessToken);
          setLoading(false);
      });
  }, []);

  if (loading) {
      return <div>Loading...</div>
  }

  return <Routes />;
};
