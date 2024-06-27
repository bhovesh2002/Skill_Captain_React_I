import React, { useState, useEffect } from "react";

function App() {

  const [count, setCount] = useState(0);

  useEffect(() =>{
    const timer = setInterval(() => {
      setCount(prevCount=> prevCount + 1);
    },1000)

    return () => clearInterval(timer);
  }, [])

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Increment
      </button>
    </>
  );
}

export default App;
