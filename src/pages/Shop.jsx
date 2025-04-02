import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function Shop() {
  const [drinks, setDrinks] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=lemon")
      .then((response) => response.json())
      .then((data) => {
        setDrinks(data.drinks || []);
      })
      .catch((error) => {
        console.error("Fejl ved hentning af API:", error);
      });
  }, []);

  const handleAddToCart = (drink) => {
    // Vi sender kun de nødvendige felter
    const drinkItem = {
      idDrink: drink.idDrink,
      strDrink: drink.strDrink,
      strDrinkThumb: drink.strDrinkThumb,
    };

    dispatch(addToCart(drinkItem));
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Citron Drinks 🍋</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {drinks.map((drink) => (
          <div key={drink.idDrink} style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "1rem",
            width: "200px",
            textAlign: "center"
          }}>
            <img src={drink.strDrinkThumb} alt={drink.strDrink} style={{ width: "100%", borderRadius: "8px" }} />
            <h3>{drink.strDrink}</h3>
            <button
              onClick={() => handleAddToCart(drink)}
              style={{ marginTop: "0.5rem" }}
            >
              Tilføj til kurv
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;