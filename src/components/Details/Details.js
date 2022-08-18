const Details = (props) => {
    const { pokemon } = props;

    return (
        <div>
            <p>{pokemon.name}</p>
        </div>
    );
};

export default Details;
