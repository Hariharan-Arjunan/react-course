import React, { useEffect, useState } from "react";
import { Card } from "./ui/Card";
import { useParams } from "react-router-dom";
import axios from "axios";
import useFetchData from "../hooks/useFetchData";
import { useSelector } from "react-redux";
import { Button } from "./ui/Button";
import { Heart } from "lucide-react";
import { cn } from "../lib/utils/cn";

const ListingDetailsCard = () => {
  const { listings, status, error, favouriteListingIds } = useSelector(
    (state) => state.listings
  );
  const [data, setData] = useState({});
  const isFavorite = favouriteListingIds.includes(data?.id);
  console.log(listings);
  const params = useParams();
  console.log(params);
  const { listingId } = params;

  useEffect(() => {
    if (listings.length === 0) {
      return <p>Please go back to home page</p>;
    } else {
      const hotel = listings.find((x) => x.id === parseInt(listingId));
      if (hotel) {
        setData(hotel);
      } else {
        setData(null);
      }
    }
  }, []);
  // const data = useFetchData(`http://localhost:5000/listing/${listingId}`);

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
          <Button>
            <Heart
              className={cn("h-4 w-4", {
                "fill-primary text-primary": isFavorite,
              })}
            />
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ListingDetailsCard;
