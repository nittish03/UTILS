import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Qrcode from './components/Qrcode'
import Navbar from './components/Navbar'
import ImageGenerator from './components/ImageGenerator'


function App() {

  return (
    <>
    <Navbar/>
<Routes>
<Route path='/' element={<Qrcode/>}/>
<Route path='/image' element={<ImageGenerator/>}/>
</Routes>
    </>
  )
}

export default App
