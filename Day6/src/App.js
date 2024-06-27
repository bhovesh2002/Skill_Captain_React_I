import React from "react";

function App() {

  const items= ["Apple", "Mango", "Banana", "Orange"];

  return (
    <>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
