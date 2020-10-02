import React, { useState } from "react";
import TemperatureInput from '../TemperarureInput/TemperatureInput';
import BoilingVerdict from '../BoilingVerdict/BoilingVerdict';

 const toCelsius = (fahrenheit) => {
  return (fahrenheit - 32) * 5 / 9;
}

const toFahrenheit = (celsius) => {
  return (celsius * 9 / 5) + 32;
}

const tryConvert = (temperature, convert) => {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

const Hoisting = () => {

   const [temperature, setTemperature] = useState({temperature:'', scale: 'c'})


   const handleCelsiusChange = (temperature) => {
    setTemperature({scale: 'c', temperature});
  }

  const handleFahrenheitChange = (temperature) => {
    setTemperature({scale: 'f', temperature});
  }

  
    const scale = temperature.scale;
    const temp = temperature.temperature;
    console.log(scale,temp)
    const celsius = scale === 'f' ? tryConvert(temp, toCelsius) : temperature.temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temp, toFahrenheit) : temperature.temperature;
    console.log(celsius,fahrenheit)

    return (
      <div>
        <p>Температура в противоположных еденицах измерения:{scale==='c'? `${fahrenheit} f`: `${celsius} c`}</p>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={handleCelsiusChange} />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={handleFahrenheitChange} />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    );
  }

  export default Hoisting;