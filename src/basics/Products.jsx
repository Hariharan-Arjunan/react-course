import React from "react";

const Products = React.memo(({ name, addToCart }) => {
  console.log(`${name} running`);
  return (
    <div className="border bg-red-800 ">
      <h1>{name}</h1>
      <button onClick={addToCart}>Add +</button>
    </div>
  );
});

export default Products;
