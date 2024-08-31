import React, { useEffect, useState } from "react";
import ListingCard from "../components/ListingCard";
import ListingList from "../components/ListingList";
import { listings } from "../data/listings";
import { Button } from "../components/ui/Button";
import axios from "axios";
import ListingDetailsCard from "../components/ListingDetailsCard";

const HomePage = () => {
  const [staticListing, setStaticListing] = useState(listings);
  const [users, setUsers] = useState([{ name: "hari" }, { name: "Yogesh" }]);
  console.log(staticListing);
  const url = "https://jsonplaceholder.typicode.com/users";

  // function data() {
  //   return [1, 2, 3, 4, 5];
  // }
  // const [a, b, c, d, e] = data();
  // console.log(a, b, c, d, e);

  // state- holds the data that directly influence the rendering of the component, it is used for
  // user intractions and change of data and other events
  // In react the ui is the function of state

  // event handlers - identify the user intraction like clicking, changing

  // mount updates unmount

  // URL ===> endpoint google.com
  // GET
  // POST
  // DELETE
  // PUT

  // useEffect(() => {}, []);

  const fetchData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  function handleClick() {
    const filteredHotels = staticListing.filter((x) => x.country === "london");
    console.log(filteredHotels);
    setStaticListing(filteredHotels);
  }

  return (
    <div>
      HomePage
      <Button onClick={handleClick}>Search</Button>
      {/* <div>
        {users.map((x) => (
          <h1>{x.name}</h1>
        ))}
      </div> */}
      <div>
        <ListingList listings={staticListing} />
      </div>
    </div>
  );
};

export default HomePage;
