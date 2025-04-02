import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      display: "flex",
      gap: "1rem",
      padding: "1rem",
      backgroundColor: "#f0f0f0",
      justifyContent: "center"
    }}>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
}

export default Navbar;