import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"

import Home from "./pages/Home"
import Eletronic from './pages/Electronics'
import Jewelry from './pages/Jewelry'
import ClothesMan from './pages/ClothesMan'
import ClothesWomen from './pages/ClothesWomen'
import Cart from './car/Cart'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/electronics" element={<Eletronic />} />
        <Route path="/jewelry" element={<Jewelry />} />
        <Route path="/clothesMan" element={<ClothesMan />} />
        <Route path="/clothesWomen" element={<ClothesWomen />} />
        <Route path="/car" element={<Cart />} />
      </Routes>
    </Router>
  )
}

export default App
