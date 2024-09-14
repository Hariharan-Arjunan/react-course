import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(response.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      UsersList
      {users?.map((x) => (
        <Link to={`/user/${x.id}`}>
          {" "}
          <p>{x.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default UsersList;
