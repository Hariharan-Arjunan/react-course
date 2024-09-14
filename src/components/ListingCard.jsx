import React from "react";
import { Card, CardContent } from "./ui/Card";
import { Link } from "react-router-dom";
import { Button } from "./ui/Button";
import { Heart } from "lucide-react";
import { cn } from "../lib/utils/cn";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavouriteListing,
  removeFavouriteListing,
} from "../state/listings/listingsSlice";

const ListingCard = ({ hotel }) => {
  const { favouriteListingIds } = useSelector((state) => state.listings);
  const dispatch = useDispatch();

  const isFavorite = favouriteListingIds.includes(hotel.id);
  return (
    <>
      <Card className="w-[320px]">
        <Link to={`/listing/${hotel.id}`}>
          <img
            className="h-[200px] w-full rounded-md object-cover "
            src={require(`../assets/${hotel.images[0]}`)}
            alt={hotel.name}
          />
          <CardContent className="p-4">
            <h2 className="mb-0 text-xl font-semibold">{hotel.name}</h2>
          </CardContent>
        </Link>
        <Button
          onClick={() => {
            if (isFavorite) {
              dispatch(removeFavouriteListing(hotel.id));
            } else {
              dispatch(addFavouriteListing(hotel.id));
            }
          }}
        >
          <Heart
            className={cn("h-4 w-4", {
              "fill-primary text-primary": isFavorite,
            })}
          />
        </Button>
      </Card>
    </>
  );
};

export default ListingCard;
