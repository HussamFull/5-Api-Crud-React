import React from 'react'
import NavBar from './compenents/Navbar/NavBar'
import Footer from './compenents/Footer/Footer'
import Home from './compenents/Home/Home'
import { Route, Routes } from 'react-router-dom'
import NotFound from './compenents/Notfound/NotFound'
import Users from './compenents/Users/Users'
import Create from './compenents/Users/Create'
import Details from './compenents/Users/Details'


export default function App() {
  return (
    <>

    <div className="container">
    <NavBar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/create" element={<Create />} />
      <Route path="/users/:id" element={<Details />} />

      <Route path="*" element={<NotFound />} />
    </Routes>

    <Footer />
    </div>
    
    </>
  )
}
