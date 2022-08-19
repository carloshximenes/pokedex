import Pagination from "rc-pagination";
import "./App.css";
import "./assets/css/pagination.css";
import Card from "./components/Card/Card";
import Page from "./components/Page/Page";
import Details from "./components/UI/DetailModal";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonData } from "./store/pokedex/pokedex-actions";

function App() {
    const dispatch = useDispatch();
    const totalPages = useSelector((state) => state.pokedex.count);
    const pokedex = useSelector((state) => state.pokedex.results);
    const showModal = useSelector((state) => state.details.showModal);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch(fetchPokemonData(currentPage));
    }, [dispatch, currentPage]);

    const itemRender = (current, type, element) => {
        if (type === "page") {
            return <span>{current}</span>;
        }
        return element;
    };

    const updatePage = (event) => {
        setCurrentPage(event);
    };

    return (
        <>
            <Page>
                {pokedex.map((item, index) => (
                    <Card key={index} url={item.url} />
                ))}
            </Page>
            <Pagination
                pageSize={20}
                total={totalPages}
                itemRender={itemRender}
                onChange={updatePage}
                current={currentPage}
            />
            {showModal && <Details />}
        </>
    );
}

export default App;
