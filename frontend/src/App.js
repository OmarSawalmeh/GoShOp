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
import PaymentScreen from './screen/PaymentScreen'
import PlaceorderSecreen from './screen/PlaceorderSecreen'
import OrderSecreen from './screen/OrderScreen'
import UserListScreen from './screen/UserListScreen'
import UserEditScreen from './screen/UserEditScreen'
import ProductListScreen from './screen/ProductListScreen'
import ProductEditScreen from './screen/ProductEditScreen'

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <main className='py-3'>
          <Container>
            <Routes>
              {/* Signup && Login */}
              <Route path='/login' element={<LoginScreen />} />
              <Route path='/register' element={<RegisterScreen />} />
              {/* User Profile, Product, Cart, Order, Shipping && Payment  */}
              <Route path='/profile' element={<ProfileScreen />} />
              <Route path='/shipping' element={<ShippingScreen />} />
              <Route path='/payment' element={<PaymentScreen />} />
              <Route path='/placeorder' element={<PlaceorderSecreen />} />
              <Route path='/order/:id' element={<OrderSecreen />} />
              <Route path='/product/:id' element={<ProductScreen />} />
              <Route path='/cart/:id' element={<CartScreen />} />
              {/* Admin pages to control Users, Products */}
              <Route path='/admin/userlist' element={<UserListScreen />} />
              <Route path='/admin/user/:id/edit' element={<UserEditScreen />} />
              <Route path='/admin/productlist' element={<ProductListScreen />} />
              <Route path='/admin/product/:id/edit' element={<ProductEditScreen />} />

              {/* Home Page */}
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
