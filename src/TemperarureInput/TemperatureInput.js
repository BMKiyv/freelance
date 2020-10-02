import React from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };

const TemperatureInput = (props) => { 
      return (
        <fieldset>
          <legend>Введите температуру в  {scaleNames[props.scale]}:</legend>
          <input value={props.temperature.temperature}
                 onChange={(e)=>props.onTemperatureChange(e.target.value)} />
        </fieldset>
      );
    
  }

  export default TemperatureInput;