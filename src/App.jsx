import React from "react"
import { Routes, Route } from "react-router"
import Home from "./components/Home"
import Nav from "./components/Nav"
import Type from "./components/Type"
import NotFound from "./components/NotFound"

function App() {

  return (
    <>
    <Nav />
    <Routes>
      <Route index element={<Home />} />
      <Route path="/typed" element={<Type />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}

export default App