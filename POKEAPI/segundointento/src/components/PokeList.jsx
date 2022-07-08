import React from "react";
import PokeItem from './PokeItem/PokeItem'

import './PokeList.css'

 export function PokeList ({ todos }){
    return(
        <section className="poke-list">
            {
            !todos ? 'Cargando...' : todos.map( (todo, index) => {
                return (//NOS VA A RETORNAR LOS POKE ITEMS
                    <PokeItem key = {`id-${index}`} todo = {todo} index = {index}/>
                    );
            })//EL KEY TIENE QUE SER UN VALOR UNICO POR ACA COMPONENTE QUE SE RENDERIZA
            }
           </section>
    )
}

