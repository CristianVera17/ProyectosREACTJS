import './App.css';
import Boton from './components/boton';
import {useState} from 'react';

function App() {

//CREAMOS LA CONSTANTE NUM CON EL VALOR INICIAL EN CERO
const [num,setnum]=useState('0-Cero');

//TENEMOS LA CONSTANTE UNO CON LA FUNCION QUE NOS RETORNA
//EL ESTADO DE SETNUM PERO CON EL VALOR DE UNO
//CREAMOS DOS MAS CON DOS VALORES DIFERENTES 2 Y 3
const uno = () =>  { setnum ('1-Uno');}
const dos = () =>  { setnum ('2-Dos');}
const tres = () => { setnum ('3-Tres');}

  return (
    <div className="App">
      <div className='texto'>{num}</div>
      <div className='tresbotones'>
        {/* CREAMOS TRES BOTONES DEL MISMO COMPONENTE QUE HACEN EL LLAMADO
        A DIFERENTES CONSTANTES  */}
        <Boton numero='1' num={uno}/>
        <Boton numero='2' num={dos}/>
        <Boton numero='3' num={tres}/>
      </div>
    </div>
  );
};

export default App;
