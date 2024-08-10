import React from "react";

const JavaScript = () => {
  // Varaibles var, let, const
  // let ---> mutable
  // const ---> immutable
  // always starts in alphabets, can have numbers at end or middele
  // Primitive Data types
  let num = 3;
  num = 5;

  const num1 = 10;
  const num2 = 20;

  const dataTypes = "My Name is Hari";

  let name = null;
  console.log(name);

  let isTrue = true;
  console.log(typeof isTrue);

  const sum = num1 + num2;

  // Non Primitive data types

  const arrayOne = [1, 2, 3, 4, 5];
  arrayOne.push(10);
  console.log(arrayOne);

  const objOne = {
    name: "hari",
    age: "27",
    email: "hari@gmail.com",
  };

  function addNumbers(a, b) {
    if (a > 50) {
      return 0;
    }

    return a + b;
  }

  const dataOne = addNumbers(50, num2);
  const dataTwo = addNumbers(125, 5000);

  // Operators
  // +,-,/,*

  return (
    <div>
      {dataOne}
      <br></br>
      {dataTwo}
    </div>
  );
};

export default JavaScript;
