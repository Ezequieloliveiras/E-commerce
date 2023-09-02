import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"

import Home from "./paginas/Home"
import Eletronic from './paginas/Electronics'
import Jewelry from './paginas/Jewelry'
import ClothesMan from './paginas/ClothesMan'
import ClothesWomen from './paginas/ClothesWomen'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/electronics" element={<Eletronic />} />
        <Route path="/jewelry" element={<Jewelry />} />
        <Route path="/clothesMan" element={<ClothesMan />} />
        <Route path="/clothesWomen" element={<ClothesWomen />} />
      </Routes>
    </Router>
  )
}

export default App
