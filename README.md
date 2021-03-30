## Para começar

**Instalando as dependencias**

Apos clonar o repositório execute umas das opçoes abaixo, a que preferir, eu sugiro o yarn

```
npm install
# or
yarn
```
**Resumo**

A ideia desse exemplo é construir um componente reutizavel para gerenciar eventos onClick. 
Esse compoente vai controlar requições em um determinado periodo de tempo, evitando o acumulo de requisições


**Funcionalidades**

Ao clicar em um botão a primeira requisão será executa sem deley, (deley configuravel para cada botão), durante esse delay as requisições não devem ser feitas.
Após o delay retorna a condição inicial

**Logica Inicial**(sem ser um componente)

```
import React, { useEffect, useState } from "react";
const TWO_SECONDS = 2000;
function App() {
  const [nextClickTime, setNextClick] = useState(0);
  const [enableToClick, setEnableToClick] = useState(true);
  const fireClick = () => {
    if (enableToClick) {
      console.log("executa Function");
    }
    setNextClick(TWO_SECONDS);
    setEnableToClick(false);
  };
  useEffect(() => {
    if (nextClickTime) {
      const handler = setTimeout(() => {
        setNextClick(0);
        setEnableToClick(true);
      }, TWO_SECONDS);
      return () => clearTimeout(handler);
    }
  }, [nextClickTime]);
  console.log({ log: nextClickTime });
  console.log({ log: enableToClick });
  return (
    <button type="button" onClick={fireClick}>
      Click
    </button>
  );
}
export default App;
```
A ideia é utilizar da seguinte forma:
````
import { useThrottleButton } from "./components/exemplo2";
  return (
    <>
      <button
        onClick={() => {
          useThrottleButton(2000, () => {
            console.log("Evento 1 disparado");
          });
        }}
      >
        Evento 1
      </button>
      <button
        onClick={() => {
          useThrottleButton(3000, () => {
            console.log("Evento 2 disparado");
          });
        }}
      >
        Evento 2
      </button>
    </>
  );
}

````

