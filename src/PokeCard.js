const PokeCard = (props)=>{
    return(
        <div id={props.id}>
            <p>The name of the pokemon is {props.name}</p>
        </div>
    )
}

export default PokeCard;