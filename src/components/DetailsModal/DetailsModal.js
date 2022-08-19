import { useDispatch, useSelector } from "react-redux";
import { getPokemonColor } from "../../assets/js/pokemon-type-colours";
import { pokemonDetailsActions } from "../../store/pokedex/pokemon-details-slice";
import Abilities from "../Abilities/Abilities";
import BaseStats from "../BaseStats/BaseStats";
import classes from "./DetailsModal.module.css";

const DetailsModal = (props) => {
    const dispatch = useDispatch();
    const pokemon = useSelector((state) => state.details.pokemon);

    const modalHandler = () => {
        dispatch(pokemonDetailsActions.hideDetails());
    };

    return (
        <>
            <div className={classes.backdrop} onClick={modalHandler}></div>
            <div className={classes.container}>
                <div className={classes.modal}>
                    <div
                        className={classes.infos}
                        style={{
                            backgroundColor: getPokemonColor(
                                pokemon.types[0].type.name,
                                70
                            ),
                        }}
                    >
                        <div className={classes.data}>
                            <h2 className={classes.name}>{pokemon.name}</h2>
                            <img alt={pokemon.name} src={pokemon.image} />
                            <Abilities />
                        </div>
                    </div>
                    <BaseStats />
                </div>
            </div>
        </>
    );
};

export default DetailsModal;
