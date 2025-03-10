import { useSelector, useDispatch } from "react-redux";
import { sellLemonade, buyLemons } from "./redux/profitSlice";

function LemonadeStand() {
  // Hent profit fra Redux store
  const profit = useSelector((state) => state.profit.value);
  
  // Hent dispatch-funktionen for at sende actions
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Lemonade Stand 🍋</h1>
      <h2>Profit: ${profit}</h2>
      <button onClick={() => dispatch(sellLemonade())} style={{ margin: "10px", padding: "10px" }}>
        Sell Lemonade (+$5)
      </button>
      <button onClick={() => dispatch(buyLemons())} style={{ margin: "10px", padding: "10px" }}>
        Buy Lemons (-$2)
      </button>
    </div>
  );
}

export default LemonadeStand;