import React, { useEffect } from "react";
import { useAuth } from "../context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const FavouriteListings = () => {
  return (
    <div>
      FavouriteListings
      <br />
      <Link to="/">Home</Link>
      <div></div>
    </div>
  );
};

export default FavouriteListings;
