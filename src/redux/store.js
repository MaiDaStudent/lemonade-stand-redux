import { configureStore } from "@reduxjs/toolkit";
import profitReducer from "./profitSlice"; // Sørg for at denne sti er korrekt!

const store = configureStore({
  reducer: {
    profit: profitReducer, // Sørg for at reduceren hedder det samme som i useSelector
  },
});

export default store;