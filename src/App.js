import React, { useState } from 'react'
import './App.css';

import Button from './components/Button/Button.jsx'

const App = () => {

  const [value, setValue] = useState("0");
  const [memory, setMemory] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleButton = (content) => () => {
    const num = parseFloat(value);

    if(content === "C") {
      setValue("0")
      setMemory(null);
      setOperator(null);
      return;
    }

    if(content === "±") {
      setValue((num * -1).toString());
      return;
    }

    if(content === "%") {
      setValue((num / 100).toString());
      setMemory(null);
      setOperator(null);
      return;
    }

    if(content === "+") {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(memory + parseFloat(value));
        } else if (operator === "−") {
          setMemory(memory - parseFloat(value));
        } else if (operator === "×") {
          setMemory(memory * parseFloat(value));
        } else if (operator === "÷") {
          setMemory(memory / parseFloat(value));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setValue("0");
      setOperator("+");
      return;
    }

    if(content === "−") {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(memory + parseFloat(value));
        } else if (operator === "−") {
          setMemory(memory - parseFloat(value));
        } else if (operator === "×") {
          setMemory(memory * parseFloat(value));
        } else if (operator === "÷") {
          setMemory(memory / parseFloat(value));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setValue("0");
      setOperator("−");
      return;
    }

    if(content === "×") {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(memory + parseFloat(value));
        } else if (operator === "−") {
          setMemory(memory - parseFloat(value));
        } else if (operator === "×") {
          setMemory(memory * parseFloat(value));
        } else if (operator === "÷") {
          setMemory(memory / parseFloat(value));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setValue("0");
      setOperator("×");
      return;
    }

    if(content === "÷") {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(memory + parseFloat(value));
        } else if (operator === "−") {
          setMemory(memory - parseFloat(value));
        } else if (operator === "×") {
          setMemory(memory * parseFloat(value));
        } else if (operator === "÷") {
          setMemory(memory / parseFloat(value));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setValue("0");
      setOperator("÷");
      return;
    }

    if(content === "=") {
      if (!operator) return;

      if (operator === "+") {
        setValue((memory + parseFloat(value)).toString());
      } else if (operator === "−") {
        setValue((memory - parseFloat(value)).toString());
      } else if (operator === "×") {
        setValue((memory * parseFloat(value)).toString());
      } else if (operator === "÷") {
        setValue((memory / parseFloat(value)).toString());
      }
      setMemory(null);
      setOperator(null);
      return;
    }

    if (content === ".") {
      if (value.includes(".")) return;

      setValue(value + ".");
      return;
    }
    
    if (value[value.length - 1] === ".") {
      setValue(value + content);
    } else {
      setValue(parseFloat(num + content).toString());
    }
    
  }

  return (
    <div className="App">
      <div className="display">{value}</div>
      <div className="buttons">
        <Button onButtonClick={handleButton} content="C" type="function"/>
        <Button onButtonClick={handleButton} content="±" type="function"/>
        <Button onButtonClick={handleButton} content="%" type="function"/>
        <Button onButtonClick={handleButton} content="÷" type="operator"/>
        <Button onButtonClick={handleButton} content="7"/>
        <Button onButtonClick={handleButton} content="8"/>
        <Button onButtonClick={handleButton} content="9"/>
        <Button onButtonClick={handleButton} content="×" type="operator"/>
        <Button onButtonClick={handleButton} content="4"/>
        <Button onButtonClick={handleButton} content="5"/>
        <Button onButtonClick={handleButton} content="6"/>
        <Button onButtonClick={handleButton} content="−" type="operator"/>
        <Button onButtonClick={handleButton} content="1"/>
        <Button onButtonClick={handleButton} content="2"/>
        <Button onButtonClick={handleButton} content="3"/>
        <Button onButtonClick={handleButton} content="+" type="operator"/>
        <Button onButtonClick={handleButton} content="0"/>
        <Button onButtonClick={handleButton} content="."/>
        <Button onButtonClick={handleButton} content="=" type="operator"/>
      </div>
    </div>
  );
}

export default App;
