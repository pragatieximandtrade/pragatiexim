import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import ProductPreview from './pages/ProductPreview'
// import MyAppointments from './pages/MyAppointments'
import MyProfile from './pages/MyProfile'
import Footer from './components/Footer'

const App = () => {
  
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:category' element={<Products />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:productId' element={<ProductPreview />} />
        {/* <Route path='/my-appointments' element={<MyAppointments />} /> */}
        <Route path='/my-profile' element={<MyProfile />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App