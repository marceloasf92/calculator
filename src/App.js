import "./App.css";
import Visor from "./components/Visor";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [displayValue, setDisplayValue] = useState(0);
  const [data, setData] = useState("");
  const [counterError, setCounterError] = useState(0);

  const receberValorDigitado = (e) => {
    const value = e.target.value;

    value === "AC"
      ? resetarCalculadora()
      : value === "="
      ? calcularValor()
      : receberValores(value);
  };

  const calcularValor = () => {
    if (counterError === 0) {
      const result = eval(data);
      if (result === Number(result)) {
        if (parseInt(result) == result) {
          setData(result);
          setCounterError(0);
        } else {
          setData(parseFloat(result.toFixed(8)));
          setCounterError(0);
        }
      } else {
        setData("ERROR...");
        setCounterError(1);
      }
    }
  };

  const resetarCalculadora = () => {
    setData("");
    setDisplayValue(0);
    setCounterError(0);
  };

  const receberValores = (value) => {
    switch (value) {
      case value:
        setData(`${data}${value}`);
        break;
    }
    setDisplayValue(data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container-Principal">
          <div className="modelo">
            <h1>Casio</h1>
            <span>fx-82ms</span>
          </div>
          <Visor data={data} displayValue={displayValue} />
          <div className="container-Buttons">
            <Button value="AC" onClick={(e) => receberValorDigitado(e)}>
              AC
            </Button>
            <Button value="/" onClick={(e) => receberValorDigitado(e)}>
              /
            </Button>
            <Button value="7" onClick={(e) => receberValorDigitado(e)}>
              7
            </Button>
            <Button value="8" onClick={(e) => receberValorDigitado(e)}>
              8
            </Button>
            <Button value="9" onClick={(e) => receberValorDigitado(e)}>
              9
            </Button>
            <Button value="*" onClick={(e) => receberValorDigitado(e)}>
              *
            </Button>
            <Button value="4" onClick={(e) => receberValorDigitado(e)}>
              4
            </Button>
            <Button value="5" onClick={(e) => receberValorDigitado(e)}>
              5
            </Button>
            <Button value="6" onClick={(e) => receberValorDigitado(e)}>
              6
            </Button>
            <Button value="-" onClick={(e) => receberValorDigitado(e)}>
              -
            </Button>
            <Button value="1" onClick={(e) => receberValorDigitado(e)}>
              1
            </Button>
            <Button value="2" onClick={(e) => receberValorDigitado(e)}>
              2
            </Button>
            <Button value="3" onClick={(e) => receberValorDigitado(e)}>
              3
            </Button>
            <Button value="+" onClick={(e) => receberValorDigitado(e)}>
              +
            </Button>
            <Button value="0" onClick={(e) => receberValorDigitado(e)}>
              0
            </Button>
            <Button value="." onClick={(e) => receberValorDigitado(e)}>
              ,
            </Button>
            <Button value="=" onClick={(e) => receberValorDigitado(e)}>
              =
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
