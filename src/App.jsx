import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import LoginSection from './components/LoginSection/LoginSection'
import Navbar from './components/Navbar/Navbar'
import RegisterSection from './components/RegisterSection/RegisterSection'

function LoginPage() {
  return (
    <main className="login-page-main">
      <LoginSection />
    </main>
  )
}

function RegisterPage() {
  return (
    <main className="register-page-main">
      <RegisterSection />
    </main>
  )
}

function App() {
  return (
    <div className="page">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
