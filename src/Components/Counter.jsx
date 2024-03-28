import React from "react";
import { useState } from "react";
import { store } from "../Redux/store";

function Counter() {
  console.log(store);
  const { getState } = store;
  console.log(getState());

  const handleInc = () => {};
  return (
    <div>
      <h3>Count:{getState().counter} </h3>
      <button onClick={handleInc}>CLick</button>
    </div>
  );
}

export default Counter;
