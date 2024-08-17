import React from "react";
import { Card, CardContent } from "./ui/Card";

const ListingCard = ({ hotel }) => {
  return (
    <Card className="w-[320px]">
      <img src={require(`../assets/${hotel.images[0]}`)} alt={hotel.name} />
      <CardContent className="p-4">
        <h2 className="mb-0 text-xl font-semibold">{hotel.name}</h2>
      </CardContent>
    </Card>
  );
};

export default ListingCard;
