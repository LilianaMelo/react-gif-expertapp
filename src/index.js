import React from 'react';
import ReactDOM from 'react-dom'; //se cambia por la siguiente importación debido a la nueva version.
//import { createRoot } from "react-dom/client"
import { GifExpertApp } from './GifExpertApp';
import './index.css';

/*
const container = document.getElementById('04-GIF_EXPERT_APP');
const root = createRoot(container);
root.render(<GifExpertApp />);
*/

ReactDOM.render(
  <GifExpertApp />, document.getElementById("root") 
);

// Tarea:
// GifExpertApp
// <h2>GifExpertApp</h2>
// <hr /> esta es una linea en la página de forma horizontal.

