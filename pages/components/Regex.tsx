import React, { useState } from "react";

export const Regex = () => {
  const [text, setText] = useState("");
  const regexcharacters = /[^a-zA-Z0-9-]/g;
  // const regexspace = /[ˆa-zA-Z0-9\S]/g;

  function matchText() {
    console.log("Text", text);
    console.log("Match Characters", text.match(regexcharacters));
    // console.log("Match Space", text.match(regexspace));
  }

  const validateText = () => {
    text.match(regexcharacters)
      ? false
      : text.indexOf(" ") === -1
      ? false
      : true;
    return;
  };

  return (
    <>
      <input
        name={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
      />
      <button onClick={matchText}>test</button>
    </>
  );
};
