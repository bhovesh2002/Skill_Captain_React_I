import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoApp from "./components/ToDoApp";
import Nav from "./components/Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/todo" Component={TodoApp} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;