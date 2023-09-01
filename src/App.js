import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"

import Produtos from "./Paginas/Produtos"
import Menu from "./Paginas/Menu"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/menu" element={<Menu />}/>
          <Route path="/produtos" element={<Produtos />}/>
      </Routes>
    </Router>
  )
}

export default App
