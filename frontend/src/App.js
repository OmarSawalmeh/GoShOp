import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Container} from 'react-bootstrap'

// components
import Header from './components/Header'
import Footer from './components/Footer'

// screen // pages
import HomeScreen from './screen/HomeScreen'
import ProductScreen from './screen/ProductScreen'
import CartScreen from './screen/CartScreen'
import LoginScreen from './screen/LoginScreen'
import RegisterScreen from './screen/RegisterScreen'
import ProfileScreen from './screen/ProfileScreen'
import ShippingScreen from './screen/ShippingScreen'

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <main className='py-3'>
          <Container>
            <Routes>
              <Route path='/login' element={<LoginScreen />} />
              <Route path='/register' element={<RegisterScreen />} />
              <Route path='/profile' element={<ProfileScreen />} />
              <Route path='/shipping' element={<ShippingScreen />} />
              <Route path='/product/:id' element={<ProductScreen />} />
              <Route path='/cart/:id' element={<CartScreen />} />
              <Route path='/' element={<HomeScreen />} exact />
            </Routes>
          </Container>
        </main>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
