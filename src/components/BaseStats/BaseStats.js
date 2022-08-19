import { useSelector } from "react-redux";
import { getPokemonColor } from "../../assets/js/pokemon-type-colours";
import classes from "./BaseStats.module.css";

const BaseStats = (props) => {
    const pokemon = useSelector((state) => state.details.pokemon);

    const getWidthBaseStats = (value) => {
        let maxBaseStat = 255;
        let maxWidth = 200;

        return (value * maxWidth) / maxBaseStat;
    };

    return (
        <div className={classes.baseStats}>
            <h3
                style={{
                    color: getPokemonColor(pokemon.types[0].type.name),
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
                                width: getWidthBaseStats(s.base_stat),
                                background: getPokemonColor(
                                    pokemon.types[0].type.name,
                                    70
                                ),
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
    );
};

export default BaseStats;
