import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    results: [],
};

const pokedexSlice = createSlice({
    name: "pokedex",
    initialState,
    reducers: {
        updatePokedex(state, action) {
            state.count = action.payload.count;
            state.results = action.payload.results;
        },
    },
});

export const pokedexActions = pokedexSlice.actions;

export default pokedexSlice;
