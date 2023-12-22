import React, { useEffect } from "react";
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Main from './components/Main.jsx'
import { smooth } from "./utills/smooth.js";


const App = () => {
  useEffect(() => {
    smooth();
  });
  return (
    <>
      <Main>
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </Main>
    </>
  )
}

export default App


