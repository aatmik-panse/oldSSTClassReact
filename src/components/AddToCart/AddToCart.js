import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { action } from "../../state";

function AddToCart({ product }) {
  let cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { add_to_cart, remove_from_cart } = bindActionCreators(
    action,
    dispatch
  );

  const quantity = cart[product.id] ? cart[product.id].quantity : 0;

  // Render button to add to cart if quantity is 0, otherwise show + and - buttons for adjustment
  return (
    <div>
      {quantity === 0 ? (
        <button onClick={() => add_to_cart(product)}>Add to Cart</button>
      ) : (
        <>
          <button onClick={() => remove_from_cart(product.id)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => add_to_cart(product)}>+</button>
        </>
      )}
    </div>
  );
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
