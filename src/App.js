import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g,' $1')
}

function App() {
  const [ buttonColor, setButtonColor ] = useState('mediumvioletred');
  const [ disabled, setDisabled ] = useState(false);
  const newColor = (buttonColor === 'mediumvioletred' ? 'midnightblue' : 'mediumvioletred');

  return (
    <div>
      <button disabled={ disabled } style={{ backgroundColor: (disabled ? 'gray': buttonColor), color: 'white' }} onClick={() => { setButtonColor(newColor) }}>{'Change to ' + newColor}</button>
      <input id="disable-button-id" type="checkbox" aria-checked={disabled} defaultChecked={disabled} onChange={(e) => { setDisabled(e.target.checked) }}></input>
      <label htmlFor="disable-button-id">Disable button</label>
    </div> 
  );
}

export default App;
