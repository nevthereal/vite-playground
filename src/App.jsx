import React from "react"
import { Routes, Route } from "react-router"
import Home from "./components/Home"
import Nav from "./components/Nav"
import Type from "./components/Type"

function App() {

  return (
    <>
    <Nav />
    <Routes>
      <Route index element={<Home />} />
      <Route path="/lol" element={<Type />} />
    </Routes>
    </>
  )
}

export default App