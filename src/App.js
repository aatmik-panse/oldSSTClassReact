import "./App.css";
import { a, b } from "./components/Products/Products";
import Products from "./components/Products/Products";
import { useState } from "react";
import CartContext from "./context/CartContext";
import { Provider } from "react-redux";
import { store } from "./state/store";
import Cart from "./components/Cart/Cart";
function App() {
  // state variable
  // inc
  // dec
  let [cart, setCart] = useState({});
  function increaseQuantity(product) {
    const newCart = { ...cart };
    // if(cart[product.id])
    if (!newCart[product.id]) {
      newCart[product.id] = {
        ...product,
        quantity: 0,
      };
    }
    newCart[product.id].quantity += 1;
    console.log(newCart);
    setCart(newCart);
  }

  function decreaseQuantity(product) {
    const newCart = { ...cart };
    if (!newCart[product.id]) return;
    newCart[product.id].quantity -= 1;
    if (newCart[product.id].quantity <= 0) {
      delete newCart[product.id];
    }
    setCart(newCart);
  }

  console.log(a, b);
  return (
    <Provider store={store}>
      <div className="App">
        <Cart />
        <Products
          cart={cart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />
      </div>
    </Provider>
  );
}

export default App;
