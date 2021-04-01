import React, { useState } from "react";
import { ThrottleButton } from "./components/ThrottleButton";

import { Regex } from "./components/Regex";
export default function Home() {
  const { useThrottleButton: throttleBtn1 } = ThrottleButton(2000);
  const { useThrottleButton: throttleBtn2 } = ThrottleButton(7000);

  const [text, setText] = useState("");
  const regex = /[^a-zA-Z0-9 -]/g;

  function matchText() {
    console.log("Match", text.match(regex));
  }

  return (
    <>
      <label>Botão 1 com delay de 2s</label>
      <button
        onClick={() => {
          throttleBtn1(() => {
            window.alert(`Evento 1 disparado`);
          });
        }}
      >
        Evento 1
      </button>
      <label>Botão 2 com delay de 7s</label>
      <button
        onClick={() => {
          throttleBtn2(() => {
            window.alert(`Evento 2 disparado`);
          });
        }}
      >
        Evento 2
      </button>

      <input
        neme={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
      />
      <button onClick={matchText}>test</button>
      <Regex />
    </>
  );
}
