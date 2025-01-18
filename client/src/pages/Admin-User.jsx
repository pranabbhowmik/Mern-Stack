import React, { useEffect } from "react";
import { useAuth } from "../store/auth";

const URL = "http://localhost:3000/api/admin/users";

export const AdminUser = () => {
  const { authorizationToken } = useAuth();

  const getAllUsersData = async () => {
    console.log("Authorization Token:", authorizationToken); // Debugging

    try {
      const res = await fetch(URL, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      console.log("Response Status:", res.status); // Debugging

      if (!res.ok) {
        console.error("Error Response:", res.status, await res.text());
        return; // Stop further execution
      }

      const data = await res.json();
      console.log("User Data:", data); // Debugging
    } catch (error) {
      console.error("Error Fetching Users Data:", error); // Debugging
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, []);

  return <div>AdminUser</div>;
};
