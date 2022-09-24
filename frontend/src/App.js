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

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <main className='py-3'>
         <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} exact/>
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path='/cart/:id' element={<CartScreen />} />
          </Routes>
         </Container>
        </main>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
