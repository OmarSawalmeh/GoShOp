import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

// actions
import { logout } from '../actions/userActions'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin


  const logoutHandler = ()=>{
    dispatch(logout())
  }

  return (
    <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
      <Container>
        <Navbar.Brand href='/'>Go ShOp</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link href='/cart/:id'>
              <i className='fas fa-shopping-cart' />
              Cart
            </Nav.Link>
            {userInfo ? (
              <NavDropdown title={userInfo.name} id='username'>
                <NavDropdown.Item href='/profile'>Profile</NavDropdown.Item>
                <NavDropdown.Item href='/login' onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link href='/login'>
                <i className='fas fa-user' />
                Sign In
              </Nav.Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <NavDropdown title='Admin' id='adminmenue'>
                <NavDropdown.Item href='/admin/userlist'>
                  Users
                </NavDropdown.Item>
                <NavDropdown.Item href='/admin/productlist'>
                  Products
                </NavDropdown.Item>
                <NavDropdown.Item href='/admin/orderlist'>
                  Orders
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header