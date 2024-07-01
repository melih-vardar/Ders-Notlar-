//1. useReducer'ı import et
import { useReducer } from "react";

//2. başlangıç state'i tanımla
const initialState = 0;

//3. reducer'ı tanımla
const reducer = (state, action) => {
  switch (action.type) {
    case "artır":
      return state + action.payload;
    default:
      return state;
  }
};

//4. useReducer'ı kullan

const [balance, dispatch] = useReducer(reducer, initialState);

//5. dispatch action

dispatch({ type: "artır", payload: 100 });
