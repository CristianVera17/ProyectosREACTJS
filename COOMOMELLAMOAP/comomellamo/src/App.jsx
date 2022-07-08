import React, { useState } from 'react';
import './App.css';


//LA FUNCION AP ES LA QUE IMPRIME EN PANTALLA LO QUE LE VAMOS A RETORNAR
function App() {
//LAS CONSTANTES ESTAS CONTIENEN EL USE STATE

  const [text,setText] = useState("a")
  const [textdos,setTextdos] = useState("b")
  const [texttres,setTexttres] = useState()
  const [user,setUser] = useState()

  const escribi = (event) => { setText(event.target.value)}
  const escribidos = (event) => { setTextdos(event.target.value)}
  const escribitres = (event) => { setTexttres(event.target.value)}



return (
  <div className="App">
  
  <div className='divimputs'>

       <input autoFocus className='campos'  maxlength="14" placeholder='Nombre' onChange={ escribi }/>
    
       <input className='campos' maxlength="14" placeholder='Apellido materno' onChange={ escribidos }/>
    
       <input className='campos' maxlength="14" placeholder='Apellido paterno' onChange={ escribitres }/>
      
  </div>
    
<div className='minombre'>
  <p onClick={() => { setUser(user) }}>  <span className='span'> Mi nombre es: { text } {textdos} {texttres} </span> </p>
</div>    

</div>
  );
}

export default App;
