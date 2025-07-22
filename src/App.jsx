import React from 'react'
import Home from './pages/Home/Home'
import {Routes,Route} from 'react-router-dom'
import Login from './pages/Login/Login'
import { ToastContainer } from 'react-toastify'





const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App