import { configureStore } from "@reduxjs/toolkit";
import pokedexSlice from "./pokedex/pokedex-slice";
import pokemonDetails from "./pokedex/pokemon-details-slice";

const store = configureStore({
    reducer: { pokedex: pokedexSlice.reducer, details: pokemonDetails.reducer },
});

export default store;
