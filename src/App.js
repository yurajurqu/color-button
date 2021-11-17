import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g,' $1')
}

function App() {
  const [ buttonColor, setButtonColor ] = useState('red');
  const [ disabled, setDisabled ] = useState(false);
  const newColor = (buttonColor === 'red' ? 'blue' : 'red');

  return (
    <div>
      <button disabled={ disabled } style={{ backgroundColor: (disabled ? 'gray': buttonColor), color: 'white' }} onClick={() => { setButtonColor(newColor) }}>{'Change to ' + newColor}</button>
      <input id="disable-button-id" type="checkbox" aria-checked={disabled} defaultChecked={disabled} onChange={(e) => { setDisabled(e.target.checked) }}></input>
      <label htmlFor="disable-button-id">Disable button</label>
    </div> 
  );
}

export default App;
