import hexToRgba from "hex-rgba";
import { useDispatch, useSelector } from "react-redux";
import { pokemonColours } from "../../assets/js/pokemon-type-colours";
import { pokemonDetailsActions } from "../../store/pokedex/pokemon-details-slice";
import classes from "./DetailModal.module.css";

const DetailModal = (props) => {
    const dispatch = useDispatch();
    const pokemon = useSelector((state) => state.details.pokemon);

    const modalHandler = () => {
        dispatch(pokemonDetailsActions.hideDetails());
    };

    const getPokemonBackground = (type) => {
        let hexColor = pokemonColours[type] || pokemonColours.default;
        return hexToRgba(hexColor, 70);
    };

    const getWidthBaseStats = (value) => {
        let maxBaseStat = 255;
        let maxWidth = 200;

        return (value * maxWidth) / maxBaseStat;
    };

    return (
        <>
            <div className={classes.backdrop} onClick={modalHandler}></div>
            <div className={classes.container}>
                <div className={classes.modal}>
                    <div
                        className={classes.infos}
                        style={{
                            backgroundColor: getPokemonBackground(
                                pokemon.types[0].type.name
                            ),
                        }}
                    >
                        <div className={classes.data}>
                            <h2 className={classes.name}>{pokemon.name}</h2>
                            <img alt={pokemon.name} src={pokemon.image} />
                            <h3 className={classes.abilities}>Abilities</h3>
                            <ul className={classes.listAbilities}>
                                {pokemon.abilities.map((a) => (
                                    <li
                                        className={classes.ability}
                                        style={{
                                            backgroundColor:
                                                pokemonColours[
                                                    pokemon.types[0].type.name
                                                ] || pokemonColours.default,
                                        }}
                                    >
                                        {a.ability.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className={classes.baseStats}>
                        <h3
                            style={{
                                color:
                                    pokemonColours[
                                        pokemon.types[0].type.name
                                    ] || pokemonColours.default,
                            }}
                        >
                            Base Stats
                        </h3>
                        <ul>
                            {pokemon.stats.map((s) => (
                                <li style={{ padding: `10px 0px` }}>
                                    <div className={classes.statDescription}>
                                        <span>{s.stat.name}</span>
                                        <span>{s.base_stat}</span>
                                    </div>
                                    <div
                                        className={classes.statBar}
                                        style={{
                                            width: getWidthBaseStats(
                                                s.base_stat
                                            ),
                                            background:
                                                pokemonColours[
                                                    pokemon.types[0].type.name
                                                ] || pokemonColours.default,
                                        }}
                                    ></div>
                                </li>
                            ))}
                        </ul>
                        <div className={classes.total}>
                            <strong>Total:</strong>
                            <span>
                                {" "}
                                {pokemon.stats.reduce((acc, prev) => {
                                    return acc + +prev.base_stat;
                                }, 0)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailModal;
