import { PokeApi } from "../../enviroments";
import { pokedexActions } from "./pokedex-slice";

export const fetchPokemonData = (page) => {
    return async (dispatch) => {
        let url = PokeApi + "pokemon?offset=" + (page - 1) * 20 + "&limit=20";
        const fetchData = async () => {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("Error loading json");
            }

            const data = await response.json();

            return data;
        };

        try {
            const pokemonData = await fetchData();
            dispatch(
                pokedexActions.updatePokedex({
                    count: pokemonData.count,
                    results: pokemonData.results || [],
                })
            );
        } catch (error) {
            console.log(error.message);
        }
    };
};
