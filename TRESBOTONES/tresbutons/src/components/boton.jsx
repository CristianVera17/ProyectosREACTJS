import React from "react";


//TENEMOS LA FUNCION BOTON
function Boton ({numero,num}) {
    return(
        <button onClick= {num}> {numero} </button>
    );
};

export default Boton;
//LO EXPORTAMOS CON DEFAULT NO HACE FALTA QUE VALLA ENTRE LLAVES
//ES MAS RECOMENDABLE EXPORTAR CON LAS LLAVES