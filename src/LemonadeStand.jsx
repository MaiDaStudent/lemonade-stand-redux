import { useState } from "react";

function LemonadeStand() {
  // Opret en state til profit
  const [profit, setProfit] = useState(0);

  // Funktion til at sælge lemonade (+5$)
  const sellLemonade = () => {
    setProfit(profit + 5);
  };

  // Funktion til at købe citroner (-2$)
  const buyLemons = () => {
    setProfit(profit - 2);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Lemonade Stand 🍋</h1>
      <h2>Profit: ${profit}</h2>
      <button onClick={sellLemonade} style={{ margin: "10px", padding: "10px" }}>
        Sell Lemonade (+$5)
      </button>
      <button onClick={buyLemons} style={{ margin: "10px", padding: "10px" }}>
        Buy Lemons (-$2)
      </button>
    </div>
  );
}

export default LemonadeStand;