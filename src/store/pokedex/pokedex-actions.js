import { pokedexActions } from "./pokedex-slice";

export const fetchPokemonData = (url) => {
    return async (dispatch) => {
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
                    next: pokemonData.next,
                    previous: pokemonData.previous,
                    results: pokemonData.results || [],
                })
            );
        } catch (error) {
            console.log(error.message);
        }
    };
};
