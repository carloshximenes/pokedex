import { configureStore } from "@reduxjs/toolkit";
import pokedexSlice from "./pokedex/pokedex-slice";

const store = configureStore({ reducer: { pokedex: pokedexSlice.reducer } });

export default store;
