import React from "react";

const JavaScript = () => {
  // Varaibles var, let, const
  // let ---> mutable
  // const ---> immutable
  // always starts in alphabets, can have numbers at end or middele
  // Primitive Data types
  let num = 10;
  num += 3;
  // console.log(num);

  const num1 = 20;
  const num2 = "20";

  // console.log(num1 !== num2);

  // A       B      Operator     Output
  // T       T        ||(or)       T
  // T       F        ||           T
  // F       T        ||           T
  // F       F        ||           F
  // ----------------------------------
  // T       T        &&(and)      T
  // F       T        &&           F
  // T       F        &&           F
  // F       F        &&           F

  const dataTypes = "My Name is Hari";

  let name = null;
  // console.log(name);

  let isTrue = !true;
  // console.log(isTrue);

  // const sum = num1 + num2;

  // Non Primitive data types

  const arrayOne = [1, 2, 3, 4, 5];
  arrayOne.push(10);
  // console.log(arrayOne);

  // const objOne = {
  //   name: "hari",
  //   age: "27",
  //   email: "hari@gmail.com",
  // };
  // objOne["phone"] = "123";
  // objOne.email = "hari123@gmail.com";
  // console.log(objOne);

  function addNumbers(a, b) {
    // if (a && b) {
    //   console.log(a, b);
    // }
    // return a + b;
    return a > 50 ? 0 : a + b;
  }

  const arrwoFun = () => {};

  function displayMonth(num) {
    // if (num > 12 && num < 0) {
    //   return "You have given invalid number";
    // }
    // if (num === 1) {
    //   return "Jan";
    // }
    // if (num === 2) {
    //   return "Feb";
    // }
    // if (num === 3) {
    //   return "Mar";
    // }

    switch (num) {
      case 1:
        return "Jan";
      case 2:
        return "Feb";
      default:
        return "You have entered invalid num";
    }
  }
  const pass = "Pas123";
  // console.log(pass.length);
  // console.log(pass.concat("abc"));
  const dataOne = addNumbers(7, 25);
  const dataTwo = addNumbers(125, 5000);

  // Operators
  // +,-,/,*

  // const array1 = ["a", "b", "c"];
  // const array2 = ["d", "e", "f"];
  // const array3 = array1.concat(array2);
  // console.log(array3);

  // const isBelowThreshold = (currentValue) => currentValue < 40;
  // const array1 = [10, 30, 9, 8, 7, 3];
  // console.log(array1.every((ele) => ele > 10));
  // console.log(array1.some((ele) => ele > 10));

  // const stocks = [
  //   { name: "TV", brand: "MI" },
  //   { name: "iPhone", brand: "Apple" },
  //   { name: "Android", brand: "Google" },
  //   { name: "Redmi", brand: "MI" },
  // ];
  // const result = stocks.filter((product) => product.brand === "MI");
  // console.log(result);

  // const studentList = [
  //   { name: "Tilak", phone: "123" },
  //   { name: "Yogesh", phone: "123" },
  //   { name: "Deepika", phone: "123" },
  //   { name: "Shafreen", phone: "123" },
  //   { name: "Hari", phone: "123" },
  // ];
  // const found = studentList.find((element) => element.name === "Tilak");
  // console.log(found);

  // const array1 = ["a", "b", "c"];
  // for (let i = 0; i < array1.length; i++) {
  //   console.log(array1[i]);
  // }
  // array1.forEach((element) => console.log(element));

  // const array1 = ["Tilak", "Yogesh", "Deepika", "Shafreen"];
  // console.log(array1.includes("Yogesh"));

  // const array1 = [1, 4, 9, 16];
  // const data = [
  //   { firstName: "Hariharan", lastName: "A" },
  //   { firstName: "Tilak", lastName: "M" },
  // ];
  // const map1 = data.map((x) => x.firstName + " " + x.lastName);
  // console.log(map1);

  // const array1 = [1, 2, 3, 4];
  // // let sum = 0;
  // // array1.forEach((x) => (sum += x));
  // // console.log(sum);
  // const initialValue = 0;
  // const sumWithInitial = array1.reduce((acc, x) => acc + x, 0);
  // console.log(sumWithInitial);

  // const array = [1, 2, 3, 4, 5];
  // const even = (element) => element % 2 === 0;
  // console.log(array.some(even));

  // const months = ["March", "Jan", "Feb", "Dec"];
  // months.sort();
  // console.log(months);

  // const arr = [8, 6, 3];
  // arr.sort();
  // console.log(arr);
  //push and pop

  // const object1 = {
  //   a: "somestring",
  //   b: 42,
  //   c: false,
  // };
  // console.log(Object.keys(object1));

  // const array1 = [1, 2, 3, 4];
  // const array2 = [5, 6, ...array1];
  // console.log(array2);
  // const [firstValue, ...rest] = array1;
  // console.log(rest);

  // const object1 = {
  //   a: "somestring",
  //   b: 42,
  //   c: false,
  // };
  // console.log(Object.values(object1));

  return (
    <div>
      {dataOne}
      <input type="password" name="password" minLength={5} />
      <br></br>
      {dataTwo}
    </div>
  );
};

export default JavaScript;
