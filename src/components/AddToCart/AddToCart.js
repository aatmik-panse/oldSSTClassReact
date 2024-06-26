import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { action } from "../../state";

function AddToCart({ product }) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { add_to_cart, remove_from_cart } = bindActionCreators(
    action,
    dispatch
  );

  const quantity = cart[product.id] ? cart[product.id].quantity : 0;
  if (quantity === 0) {
    return (
      <div>
        <button onClick={() => add_to_cart(product)}>AddToCart</button>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={() => add_to_cart(product)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => remove_from_cart(product)}>+</button>
      </div>
    );
  }
}

export default AddToCart;

// array of object
// object of object

//[{id: 1, quantity: 10}, {id: 2, quantity: 10}, {id: 3, quantity: 10}, {id: 4, quantity: 10}]
// cart =
// {id:{id: 1, quantity: 10}, id:{id: 2, quantity: 10}, id:{id: 3, quantity: 10}, id:{id: 4, quantity: 10}}
//cart["3"]

// Object.value(obj);
// Object.keys(obj);
