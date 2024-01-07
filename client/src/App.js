import React, { useEffect } from "react";
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Main from './components/Main.jsx'
import { smooth } from "./utills/smooth.js";
import Detail1 from "./components/subpages/Detail1.jsx";




const App = () => {
  useEffect(() => {
    smooth();
  });
  return (
    <>
      <Main>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/detail1' element={<Detail1 />}></Route>
        </Routes>
      </Main>
    </>
  )
}

export default App


