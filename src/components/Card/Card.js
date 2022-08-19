import hexToRgba from "hex-rgba";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { pokemonColours } from "../../assets/js/pokemon-type-colours";
import { pokemonDetailsActions } from "../../store/pokedex/pokemon-details-slice";
import Type from "../Type/Type";
import classes from "./Card.module.css";

const Card = (props) => {
    const dispatch = useDispatch();
    const { url } = props;
    const [pokemon, setPokemon] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Error loading json");
            }
            const data = await response.json();

            return data;
        };

        try {
            fetchData().then((data) => setPokemon(data));
        } catch (error) {
            console.log(error.message);
        }
    }, [url]);

    const showLeadingZeros = (number) => {
        return ("000" + number).slice(-3);
    };

    const getPokemonBackground = (type) => {
        let hexColor = pokemonColours[type] || pokemonColours.default;
        return hexToRgba(hexColor, 70);
    };

    const detailsHandler = () => {
        dispatch(pokemonDetailsActions.showDetails(pokemon));
    };

    return (
        <>
            {pokemon && (
                <div
                    onClick={detailsHandler}
                    className={classes.card}
                    style={{
                        backgroundColor: getPokemonBackground(
                            pokemon.types[0].type.name
                        ),
                    }}
                >
                    <div className={classes.data}>
                        <div className={classes.number}>
                            # {showLeadingZeros(pokemon.id)}
                        </div>
                        <div className={classes.name}>{pokemon.name}</div>
                        <div className={classes.types}>
                            {pokemon.types.map((type) => (
                                <Type key={type.slot} name={type.type.name} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <img
                            alt={pokemon.name}
                            src={pokemon.sprites.front_default}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default Card;
