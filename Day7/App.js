import React, { useState } from "react";

function App() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if(!email.includes("@")){
      setEmailError("Invalid Email!");
      return;
    }

    console.log("Form Submitted.")
  }

  return (
    <>
      <form>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
        <input 
          type="email" 
          value={email} 
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError("");
          }} 
          placeholder="Email"   
        />

        <button type="submit" onClick={handleSubmit}>Submit</button>
        {emailError && <p style={{ color:"red"}}>{emailError}</p>}
      </form>
    </>
  );
}


export default App;
