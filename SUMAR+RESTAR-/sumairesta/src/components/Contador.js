import React, { useState } from "react";
import './Contador.css' //IMPORTAMOS EL CSS


//CREAMOS UNA FUNCION Y LA EXPORTAMOS 
//SOLO CON EXPORT CUANDO IMPORTAMOS ASI NECESITAMOS USAR LAS LLAVES
//EN EL DOCUMENTO DONDE VAMOS A IMPORTAR NUESTRO COMPONENTE
export function Contador () {
//Creamos la constante contador y su estado inicial es el cero
   const [Contador, setContador] = useState(0);
//Creamos la constante sumar y le pasamos una funcion 
//la de sumar cuando clickeamos el boton queremos que incremente uno
   const sumar = () => setContador(Contador + 1)
//la de restar cuando clickeamos el boton queremos que decremente menos uno
const restar = () => setContador(Contador - 1)

return(
<div className="divcontador">
<h1>Contador</h1>
<div>
{/* TENEMOS UN BOTON CON EL EVENTO ONCLICK Y LE PASAMOS LA CONSTANTE
SUMAR ENTONCES CUANDO HACE CLICK SE INCREMENTA MAS UNO DEL ESTADO ACTUAL QUE ES 0 */}
    <button className="botones" onClick={sumar}> Sumar + </button>
            <div className="numero"> { Contador }</div>
    <button  className="botones" onClick={restar}> Restar - </button>
</div>
</div>
);
}