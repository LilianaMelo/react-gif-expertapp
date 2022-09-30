import React from 'react';
import ReactDOM from 'react-dom'; //se cambia por la siguiente importación debido a la nueva version.

//import { createRoot } from "react-dom/client"
import { GifExpertApp } from './GifExpertApp'; // componente padre.
import './index.css';

/*
const container = document.getElementById('04-GIF_EXPERT_APP');
const root = createRoot(container);
root.render(<GifExpertApp />);
*/


// React 17
ReactDOM.render(
  <GifExpertApp />, document.getElementById("root") 
);


 // en react 18 este archivo es main.js y no se importa react.
/* React 18

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode> // cuando cambia el estado se ejecuta dos veces. Se debe quitar <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>

  );


*/
