import React from 'react'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  )
}

export default App
