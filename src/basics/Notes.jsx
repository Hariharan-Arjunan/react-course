import React from "react";

const Notes = () => {
  //   const [users, setUsers] = useState([{ name: "hari" }, { name: "Yogesh" }]);
  //   const url = "https://jsonplaceholder.typicode.com/users";

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

  // const fetchData = async () => {
  //   const response = await axios.get(
  //     "url"
  //   );
  //   setUsers(response.data);
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const UsersPage = () => {
  //   const [count, setCount] = useState(0);
  //   const [products, setProducts] = useState(["iPhone", "Android"]);
  //   const [cart, setCart] = useState(0);

  //   const handleCart = useCallback(() => {
  //     console.log("cart running");
  //     setCart(cart + 1);
  //   }, [cart]);

  //   return (
  //     <div>
  //       <h1>Hooks</h1>
  //       <p>Count : {count}</p>
  //       <p>Cart : {cart}</p>
  //       <button
  //         onClick={() => {
  //           setCount(count + 1);
  //         }}
  //       >
  //         Increase
  //       </button>

  //       <p>----------------------------</p>
  //       {products.map((x) => {
  //         return <Products name={x} addToCart={handleCart} />;
  //       })}
  //       {/* <UsersList /> */}
  //     </div>
  //   );
  // };

  // const Products = React.memo(({ name, addToCart }) => {
  //   console.log(`${name} running`);
  //   return (
  //     <div className="border bg-red-800 ">
  //       <h1>{name}</h1>
  //       <button onClick={addToCart}>Add +</button>
  //     </div>
  //   );
  // });

  return <div>Notes</div>;
};

export default Notes;
