import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

const Layout = () => {
  return (
    <div className="w-screen font-mono  min-h-screen overflow-hidden bg-cover ">
    <Navbar/>
  <Header/>
  <Sidebar/>
  <Outlet/>
  
  </div>
  )
}

export default Layout