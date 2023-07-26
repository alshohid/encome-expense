import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Encome from './Pages/Encome'
import Expense from './Pages/Expense'
import HomePage from './Pages/HomePage'
import Footer from './Pages/Footer'
import DevelopedBy from './Components/DevelopedBy'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/income" element={<Encome />} />
        <Route path="/expense" element={<Expense />} />
      </Routes>
      <Footer />
      <DevelopedBy />
    </BrowserRouter>
  )
}

export default App
