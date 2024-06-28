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
export const add_category = (category) => {
  return (dispatch) => {
    dispatch({
      type: "ADD_CATEGORY",
      payload: category,
    });
  };
};
export const remove_category = (category) => {
  return (dispatch) => {
    dispatch({
      type: "REMOVE_CATEGORY",
      payload: category,
    });
  };
};
export const load_categories = (categories) => {
  return (dispatch) => {
    dispatch({
      type: "LOAD_CATEGORIES",
      payload: categories,
    });
  };
};
