import Service from './components/Service/service'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home/home'
import './index.css'
// import Aboutt from './components/About/about'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import About from './components/Aboutt/about'
// import Mid from './components/Mid/mid'
import About from './components/About/about'
import Contact from './components/Contact/contact'
// import Footer from './components/Footer/footer'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)
