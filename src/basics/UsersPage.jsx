import React, { useCallback, useState } from "react";
import UsersList from "../components/UsersList";
import Products from "./Products";

const UsersPage = () => {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState(["iPhone", "Android"]);
  const [cart, setCart] = useState(0);

  const handleCart = useCallback(() => {
    console.log("cart running");
    setCart(cart + 1);
  }, [cart]);

  return (
    <div>
      <h1>Hooks</h1>
      <p>Count : {count}</p>
      <p>Cart : {cart}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>

      <p>----------------------------</p>
      {products.map((x) => {
        return <Products name={x} addToCart={handleCart} />;
      })}
      {/* <UsersList /> */}
    </div>
  );
};

export default UsersPage;
