import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home"
import { Questions } from "../pages/Questions"


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/questions/:id" element={<Questions />} />
    </Routes>
  )
}