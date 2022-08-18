import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pokemon: {
        id: null,
        name: null,
        abilities: [],
        types: [],
        stats: [],
        image: null
    },
    showModal: false,
};

const pokemonDetails = createSlice({
    name: "details",
    initialState,
    reducers: {
        showDetails(state, action) {
            state.pokemon.id = action.payload.id;
            state.pokemon.name = action.payload.name;
            state.pokemon.abilities = action.payload.abilities;
            state.pokemon.types = action.payload.types;
            state.pokemon.stats = action.payload.stats;
            state.pokemon.image = action.payload.sprites.front_default;
            state.showModal = true;
        },
        hideDetails(state) {
            state.showModal = false;
        },
    },
});

export const pokemonDetailsActions = pokemonDetails.actions;

export default pokemonDetails;
