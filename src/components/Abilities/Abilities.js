import { useSelector } from "react-redux";
import { getPokemonColor } from "../../assets/js/pokemon-type-colours";
import classes from "./Abilities.module.css";

const Abilities = (props) => {
    const pokemon = useSelector((state) => state.details.pokemon);

    return (
        <>
            <h3 className={classes.abilities}>Abilities</h3>
            <ul className={classes.listAbilities}>
                {pokemon.abilities.map((a) => (
                    <li
                        className={classes.ability}
                        style={{
                            backgroundColor: getPokemonColor(
                                pokemon.types[0].type.name
                            ),
                        }}
                    >
                        {a.ability.name}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Abilities;
