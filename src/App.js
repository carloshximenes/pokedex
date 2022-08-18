import "./App.css";
import Card from "./components/Card/Card";
import Page from "./components/Page/Page";
import Details from "./components/UI/DetailModal";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonData } from "./store/pokedex/pokedex-actions";

function App() {
    const dispatch = useDispatch();
    const pokedex = useSelector((state) => state.pokedex.results);
    const showModal = useSelector(state => state.details.showModal);

    useEffect(() => {
        dispatch(fetchPokemonData("https://pokeapi.co/api/v2/pokemon"));
    }, [dispatch]);

    return (
        <>
            <Page>
                {pokedex.map((item, index) => (
                    <Card key={index} url={item.url} />
                ))}
            </Page>
            {showModal && <Details />}
        </>
    );
}

export default App;
