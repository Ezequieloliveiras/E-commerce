import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"


import Menu from "./Paginas/Menu"
import ModeloPadrão from "./templates/Padrão"

function App() {
  return (
    <ModeloPadrão>
      <Router>
        <Routes>
          <Route path="/" element={<Menu />} />
        </Routes>
      </Router>
    </ModeloPadrão>
  )
}

export default App
