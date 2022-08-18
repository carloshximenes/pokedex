import classes from "./Type.module.css";
import { pokemonColours } from "../../assets/js/pokemon-type-colours";

const Type = (props) => {
    const { name } = props;
    return <div className={classes.type} style={{backgroundColor: pokemonColours[name] || pokemonColours.default}}>{name}</div>;
};

export default Type;
