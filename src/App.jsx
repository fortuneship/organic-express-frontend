import { Route, Routes } from "react-router-dom"
import Header from "./components/layout/Header"
import Home from "./components/pages/Home"
import Footer from "./components/layout/Footer"
import Login from "./components/pages/Login"
import Signup from "./components/pages/Signup"
import Account from "./components/pages/Account"


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/account' element={<Account />} />
      </Routes>
      <Footer />
      </>

  )
}

export default App
