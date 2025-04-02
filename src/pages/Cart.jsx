import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // ➕ NYT: Beregn total antal produkter
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Din Kurv 🛒</h1>

      {/* ➕ NYT: Vis totalen */}
      <p style={{ fontWeight: "bold" }}>
        Total antal produkter: {totalItems}
      </p>

      {cartItems.length === 0 ? (
        <p>Kurven er tom...</p>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {cartItems.map((item) => (
            <div
              key={item.idDrink}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                border: "1px solid #ccc",
                padding: "1rem",
                borderRadius: "8px",
              }}
            >
              <img
                src={item.strDrinkThumb}
                alt={item.strDrink}
                style={{ width: "80px", borderRadius: "5px" }}
              />
              <div style={{ flex: 1 }}>
                <h3>{item.strDrink}</h3>
                <p>Antal: {item.quantity}</p>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <button
                    onClick={() => dispatch(increaseQuantity(item.idDrink))}
                  >
                    ➕
                  </button>
                  <button
                    onClick={() => dispatch(decreaseQuantity(item.idDrink))}
                  >
                    ➖
                  </button>
                  <button
                    onClick={() => dispatch(removeFromCart(item.idDrink))}
                  >
                    ❌ Fjern
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;