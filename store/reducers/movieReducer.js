//1. action type constant'ları import et
import { artir } from "../actions/movieActions";

//2. reducer fonksiyonunu yaz
export const reducer = (state, action) => {
  switch (action.type) {
    case artir:
      return state + action.payload;
    default:
      return state;
  }
};
