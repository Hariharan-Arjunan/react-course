import React from "react";
import { Card, CardContent } from "./ui/Card";
import { Link } from "react-router-dom";

const ListingCard = ({ hotel }) => {
  return (
    <Link to={`/listing/${hotel.id}`}>
      <Card className="w-[320px]">
        <img
          className="h-[200px] w-full rounded-md object-cover "
          src={require(`../assets/${hotel.images[0]}`)}
          alt={hotel.name}
        />
        <CardContent className="p-4">
          <h2 className="mb-0 text-xl font-semibold">{hotel.name}</h2>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ListingCard;
