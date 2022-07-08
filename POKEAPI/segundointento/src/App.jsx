import React, { useState, useEffect } from "react";
import { PokeList } from './components/PokeList'
import './App.css';

function App () {
// ALMACENAMOS LA URL DE LA API EN UNA CONSTANTE
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=20';
//VAMOS A OBTENER LOS DATOS DE LA RESPUES Y ALMACENARLOS EN EL ESTADO DE LA APLICACION CON EL HOOK NOMBRE TODOS
    const [todos, setTodos] = useState();
//DEFINIMOS UNA FUNCION Y VA A INCLUIR RESPUESTAS ASYNCRONAS CON LA PALABRA CLAVE ASYNC - LUEGO DENTRO DEL CUERPO DE ESA FUNCION AGREGAMOS LA RESPUESTA DE LA FUNCION FETCH

//---FUNCION QUE PIDE POR LOS TODOS---//
    const fetchApi = async () => {
//RESPUESTA FUNCION FECHT LR AGREGAMOS LA URL DE LA CONSTANTE DE ARRIBA - TAMBIEN TIENE UN AWAIT AI QUE ESPERAR POR ESE RESULTADO
        const response = await fetch(url); 
// UNA VES QUE SE RECIBE LA RESPUESTA IMPRIMIMOS POR TERMINA EL ESTADO DE LA RESPUESTA CON EL CONSOLE.LOG
        console.log(response.status);
//ESTO RETORNA UNA PROMESA TAMBIEN LLEVA UN AWAIT
        const responseJSON = await response.json();
        setTodos(responseJSON.results);
    }
//---FUNCION QUE PIDE POR LOS TODOS---//
   
//USE EFEC ES UNA FUNCION QUE NOS PERMITE ENGANCHARNOS DEL CICLO DE VIDA DE UN COMPONENTE DE LA APLICACION DE REACT CON EL CORCHETE VACIO LE DECIMOS QUE NO TENGA DEPENDENCIAS



//---HOOK USE EFEC SE ENGANCHA DEL ---//

useEffect(() => {
    fetchApi(); //
},[]); //EL CORCHETE VACIO LE DECIMOS QUE NO TENGA DEPENDENCIAS

//AHORA NOS VAMOS A POKELIST A HACE REL RENDERIZADO


return (
<div>
    <div className="headeruno">
    <header>
    <img className="pokeapiimg" src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="" srcset="" />
</header>
</div>
    <div className="App">
       
        <main>
            <PokeList  todos = {todos} />
        </main>
    </div>
</div>
);

}

export default App;