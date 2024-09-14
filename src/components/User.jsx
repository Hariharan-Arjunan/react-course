import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();

  const [user, setUser] = useState([]);

  const fetchUsers = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    setUser(response.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      User
      <h1>{user?.name}</h1>
      <h1>{user?.phone}</h1>
      <h1>{user?.email}</h1>
    </div>
  );
};

export default User;
