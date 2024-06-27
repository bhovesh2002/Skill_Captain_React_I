import React from "react";
import './styles.css';
import styles from './button.module.css';
import styled from 'styled-components';

function App() {

  const StyledComponent = styled.div`
    background-color: pink;
    padding: 15px;
    border-radius: 10px;
  `;

  return (
    <>
      <p
        style={{
          backgroundColor: 'lightblue',
          padding: '10px',
          borderRadius: '5px',
        }}
      >
        Inline Styling Example
      </p>
      <br />
      <p className="myClass">Styled with CSS Class </p>
      <br />
      <button className={styles.button}>Styled with CSS Module</button>
      <br />
      <br />
      <StyledComponent>Styled with CSS-in-JS</StyledComponent>
    </>
  );
}


export default App;
