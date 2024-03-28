import { createStore, legacy_createStore } from "redux";
import { reducer } from "./reducer";

const initialState = {
  counter: 5,
  todo: [],
};

//whole state tree of our application
// can be stored , inside an object inside
// redux, known as store

// const store=createStore()
export const store = legacy_createStore(reducer, initialState);
