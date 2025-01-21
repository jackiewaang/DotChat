import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useState } from "react"
import { Login, Signup, Homepage, Forgot, NavBar } from "./components"

const App = () => {

  const [isAuth, setAuth] = useState(false);

  return (
    <BrowserRouter>
      {isAuth && <NavBar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/chat" element={isAuth ? <Homepage /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
