export const categoryLoader = () => {
  return (dispatch) => {
    fetch("https://run.mocky.io/v3/dc25e1aa-3ae4-4c41-8626-b2529c231bcd")
      .then((response) => response.json())
      .then((data) => {
        console.log("data from reducer");
        console.log(data);
        dispatch({
          type: "LOAD_CATEGORIES",
          payload: data,
        });
      });
  };
};

export const categoryReducer = (
  state = {
    categories: [],
  },
  action
) => {
  if (action.type === "ADD_CATEGORY") {
    let newState = [...state];
    newState.push(action.payload);
    return newState;
  }
  if (action.type === "LOAD_CATEGORIES") {
    return {
      ...state,
      categories: action.payload,
    };
  }
  return state;
};
