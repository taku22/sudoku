import React from 'react'
import ReactDOM from 'react-dom'
import Game from './Components/Game.jsx'
import '/src/css/style.scss'  //style.css の読み込み

const root = document.createElement('div');
root.setAttribute('id', 'root');
document.body.appendChild(root);

ReactDOM.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>,
  document.getElementById('root')
);
