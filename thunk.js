//1. projeye install et
//npm i redux-thunk

//2. store'da createStore'a 2. argüman olarak applyMiddleware metodunu verelim.
//birden fazla middleware ekleyebiliriz: sırayla çalışırlar
export const myStore = createStore(reducers, applyMiddleware(logger, thunk));

/*
dispatch(action) -> reducer -> yeniState
dispatch(action) -> thunk -> actions -> dispatch(action) -> reducer -> yeniState
*/

//3. gerekli action type constant'ları tanımla
export const GET_CAR_SUCCESS = "araba isteğini yaptım. ve sonuçları aldım";
export const GET_CAR_ERROR = "araba isteğini yaptım. ve HATA aldım";
export const GET_CAR_LOADING = "araba isteğini işleniyor";

//4. action^da thunk fonskiyonu yazdım
export const getCars = () => (dispatch) => {
  //loading
  dispatch({
    type: GET_CAR_LOADING,
  });
  //axios
  axios
    .get("https://reqres.in/api/users")
    .then((response) => {
      dispatch({
        type: GET_CAR_SUCCESS,
        payload: response.data.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_CAR_ERROR,
        payload: error.message,
      });
    });
};

//5. reducer'da 2 yeni state tanımladım: error, loading
const initialState = {
  cars: [],
  loading: true,
  error: null,
};

//6. reducer'da yeni actionlar için case'ler ekledim.

export function carReducer(state = initialState, action) {
  switch (action.type) {
    case CAR_RESET:
      return initialState;
    case CAR_CIKAR:
      return {
        ...state,
        cars: state.cars.filter((car) => car.id !== action.payload),
      };

    // yeniler burada...
    case GET_CAR_SUCCESS:
      return {
        ...state,
        cars: action.payload,
        error: null,
        loading: false,
      };
    case GET_CAR_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case GET_CAR_LOADING:
      return {
        loading: true,
        error: null,
      };
    //...

    default:
      return state;
  }
}

//7. getCars'ı istediğin yerde kullandım
useEffect(() => {
  dispatch(getCars());
}, [dispatch]); //didMount
