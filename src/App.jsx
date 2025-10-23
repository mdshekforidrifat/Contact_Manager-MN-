import React from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App