import React from "react";
import './PokeItem.css'

function PokeItem ({todo, index}){
    return (
        <div className="poke-cell">
<img className="img-pokemones" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} />    
{todo.name}    
</div>
    )
}

export default PokeItem;