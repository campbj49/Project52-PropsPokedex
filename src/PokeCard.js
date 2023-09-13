const PokeCard = (props)=>{
    let imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`
    return(
        <div id={props.id} className="card">
            <h3>{props.name}</h3>
            <img src={imgSrc}/>
            <p>Type: {props.type}</p>
            <p>EXP: {props.base_experience}</p>
        </div>
    )
}

export default PokeCard;