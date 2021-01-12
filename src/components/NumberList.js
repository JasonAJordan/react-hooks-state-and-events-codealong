import React, { useState } from "react";
import { randomNumber } from "../utils";

function Numbers() {

  const [numbers, setNumbers] = useState([1, 2, 3]);

  function handleAddNumber() {
    const newNumber = randomNumber();
    const newNumberArray = [...numbers, newNumber];
    setNumbers(newNumberArray);
  }

  function handleLiClick(numberToUpdate) {
    const newNumberArray = numbers.map((number) =>
      number === numberToUpdate ? numberToUpdate + 100 : number
    );
    setNumbers(newNumberArray);
  } 


  const numberList = numbers.map((num) => (
    <li key={num} onClick={() => handleLiClick(num)}>
      {num}
    </li>
  )); 


  return (
    <div>
      <button onClick={handleAddNumber}>Add Number</button>
      <ul>{numberList}</ul>
    </div>
  );
}

export default Numbers;
