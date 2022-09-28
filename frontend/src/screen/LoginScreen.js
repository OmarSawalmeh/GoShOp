import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {Form, Button, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'

// components 
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'

// actions
import { login } from '../actions/userActions'


const LoginScreen = () => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const history = useNavigate()
   const dispatch = useDispatch()
   const userLogin = useSelector(state => state.userLogin)
   const { loading, error, userInfo } = userLogin

   const redirect = window.location.search? window.location.search.split('=')[1] : '/'

   const submitHandler = (e) => {
       e.preventDefault()
      // DISPATCH LOGIN
      dispatch(login(email, password))
   }

   useEffect(()=>{
      if(userInfo){
         history(redirect)
      }
   }, [history, userInfo, redirect])

  return (
    <FormContainer>
      <h1>Sign In</h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader></Loader>}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
          <Form.Label style={{ color: 'black', fontSize: '1rem' }}>
            Email Address
          </Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='password'>
          <Form.Label style={{ color: 'black', fontSize: '1rem' }}>
            Password
          </Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <br />
        <Button type='submit' variant='primary'>
          Sign In
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          New Customer?{' '}
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
            <strong style={{ color: 'black', fontSize: '1.1rem' }}>
              Register
            </strong>
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default LoginScreen