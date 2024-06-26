export const add_to_cart = (product) => {
  return (dispatch) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };
};
export const remove_from_cart = (product) => {
  return (dispatch) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });
  };
};
