//1. action type constant yaratılır
export const artir = "artır";

//2. action creator function yaratılır
export const artirFunc = (value) => {
  return {
    type: artir,
    payload: value,
  };
};
