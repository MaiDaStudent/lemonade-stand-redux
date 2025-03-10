import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store"; // Sørg for at denne sti er korrekt!
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}> {/* 🟢 Sørg for, at Redux Provider er her */}
      <App />
    </Provider>
  </StrictMode>
);