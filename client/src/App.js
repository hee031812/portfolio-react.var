import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Project from './pages/Project'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Main from './components/Main'
import Stacks from './pages/Stacks'

const App = () => {
  return (
    <>
    <Main>
      <Routes>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/project' element={<Project />}></Route>
        <Route path='/stacks' element={<Stacks />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
  </Main>
    </>
  )
}

export default App


