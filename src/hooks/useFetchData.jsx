import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetchData = (url) => {
  const [data, setData] = useState([]);

  const fetchListings = async () => {
    try {
      const response = await axios.get(url);
      console.log(response);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchListings();
  }, []);

  return data;
};

export default useFetchData;
