import React, { useEffect, useState } from "react";
import { Card } from "./ui/Card";
import { useParams } from "react-router-dom";
import axios from "axios";
import useFetchData from "../hooks/useFetchData";

const ListingDetailsCard = () => {
  const params = useParams();
  console.log(params);
  const { listingId } = params;
  const data = useFetchData(`http://localhost:5000/listing/${listingId}`);

  // const fetchListing = async () => {
  //   try {
  //     const response = await axios.get(
  // `http://localhost:5000/listing/${listingId}`
  //     );
  //     console.log(response);
  //     setData(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchListing();
  // }, []);

  if (!data) return <p>Hotel not found ....</p>;

  return (
    <div>
      <Card className="mx-auto p-4">
        <div>
          <h1>{data.name}</h1>
          <span>Price {data.price}</span>
          <p>Location {data.country}</p>
          <p>{data.maxGuests} Guests</p>
          <p>{data.description}</p>
        </div>
      </Card>
    </div>
  );
};

export default ListingDetailsCard;
