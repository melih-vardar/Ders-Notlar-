/*
    + sırayla çalışırlar
*/

//Custom Middleware yazımı
export const customMiddleware = (store) => (next) => (action) => {
  console.log(
    `%cBen custom Middleware. My action ${action.type}`,
    "color: green; font-size: 20px"
  );
  next(action);
};
