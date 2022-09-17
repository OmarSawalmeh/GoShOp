import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import {Container} from 'react-bootstrap'

// components
import Header from './components/Header'
import Footer from './components/Footer'

// screen
import HomeScreen from './screen/HomeScreen'
import ProductScreen from './screen/ProductScreen'

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
          </Routes>
         </Container>
        </main>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
