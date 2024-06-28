export const cartReducer = (state = [], action) => {
  if (action.type === "ADD_TO_CART") {
    let newState = [...state];
    let found = false;
    for (let i = 0; i < newState.length; i++) {
      if (newState[i].id === action.payload.id) {
        newState[i].quantity++;
        found = true;
        break;
      }
    }
    if (!found) {
      newState.push({ ...action.payload, quantity: 1 });
    }
    return newState;
  } else if (action.type === "REMOVE_FROM_CART") {
    let newState = [...state];
    for (let i = 0; i < newState.length; i++) {
      if (newState[i].id === action.payload.id) {
        newState[i].quantity--;
        if (newState[i].quantity === 0) {
          newState.splice(i, 1);
        }
      }
    }
    return newState;
  }
  return state;
};
export default cartReducer;
