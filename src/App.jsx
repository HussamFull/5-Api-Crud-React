import React from 'react'
import NavBar from './compenents/Navbar/NavBar'
import Footer from './compenents/Footer/Footer'
import Home from './compenents/Home/Home'
import { Route, Routes } from 'react-router-dom'
import NotFound from './compenents/Notfound/NotFound'
import Users from './compenents/Users/Users'


export default function App() {
  return (
    <>

    <div className="container">
    <NavBar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

    <Footer />
    </div>
    
    </>
  )
}
