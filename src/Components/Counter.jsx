import React from "react";
import { useState } from "react";
import { addAction, reduceAction } from "../Redux/action";
import { store } from "../Redux/store";

function Counter() {
  //hack
  const [render, setRender] = useState(323);

  const { getState, dispatch, subscribe } = store;
  console.log(getState());
  console.log(store);

  //subscriibe
  subscribe(() => {
    // console.log(getState());
    // console.log("Notification Received");
    setRender((prev) => prev + 1);
  });

  const handleInc = () => {
    dispatch(addAction());
    console.log(getState());
  };

  const handleDec = () => {
    dispatch(reduceAction());
    console.log(getState());
  };
  return (
    <div>
      <h3>Count:{getState().counter} </h3>
      <button onClick={handleInc}>ADD</button>
      <button onClick={handleDec}>REDUCE</button>
    </div>
  );
}

export default Counter;

//setCount:- Controller
//count :- state(Model)
//Button :View
//here setRender have Ract.Dispatch method