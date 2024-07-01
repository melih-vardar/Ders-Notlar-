//1. useReducer'ı import et
import { useReducer } from "react";

//2. action creater fonksiyonu import et
import { artirFunc } from "./actions/movieActions";

//3. reducer'ı import et
import { reducer } from "./reducers/movieReducer";

//4. useReducer ve dispatch'i kullan
export default function OrnekComponent() {
  const [balance, dispatch] = useReducer(reducer, initialState);

  function artırHandler() {
    dispatch(artirFunc(100));
  }

  return (
    <div>
      <div>{balance}</div>
      <button onClick={artırHandler}>Artır</button>
    </div>
  );
}
