import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./components/Login"
import { useState } from "react"
import Signup from "./components/Signup"
import Homepage from "./components/Homepage"

const App = () => {

  const [isAuth, setAuth] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Homepage />} />
      
        <Route path="/chat" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
