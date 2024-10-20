import { useState } from 'react'

import './App.css'
import './bootstrap.min (2).css'


import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import Detail from './pages/Detail'
import { Route,Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Edit from './pages/Edit'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  

  return (
    <>
     <Header></Header>
     <Routes>
      <Route path='/' element={<Landing/>}></Route>
      <Route path='/dash' element={<Dashboard/>}></Route>
      <Route path='/detail/:id' element={<Detail/>}></Route>
      <Route path='/edit/:id' element={<Edit/>}></Route>
     </Routes>
     <ToastContainer></ToastContainer>
     <Footer></Footer>
    </>
  )
}

export default App
