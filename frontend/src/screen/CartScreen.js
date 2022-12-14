import React, {useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  Row,
  Col,
  ListGroup,
  Image,
  Button,
  Card,
  FormControl,
} from 'react-bootstrap'
import Message from '../components/Message'
import {addToCart, removeFromCart} from '../actions/cartActions'

const CartScreen = ({location}) => {
  const {id} = useParams()
  // Get assign value in URL
  const qty = window.location.search ? Number(window.location.search.split('=')[1]) : 1

  const dispatch = useDispatch()
  const history = useNavigate()

  const cart = useSelector((state) => state.cart)
  const {cartItems} = cart

  useEffect(()=>{
    if(id){
      dispatch(addToCart(id, qty))
    }
  }, [dispatch, id, qty])

  const removeFromCartHandler =  (id) => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = (id) => {
   //history('/login?redirect=shipping')
    history('/shipping')

  }

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length == 0 ? (
          <Message>
            Your cart is empty
            <Link to='/'>
              <strong> Go Back</strong>
            </Link>
          </Message>
        ) : (
          <ListGroup variant='flush'>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Link to={`/product/${item.product}`}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Link>
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>${item.price}</Col>
                  <Col md={2}>
                    <FormControl
                      style={{ backgroundColor: 'gray', color: 'white' }}
                      as='select'
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </FormControl>
                  </Col>
                  <Col md={2}>
                    <Button
                      type='button'
                      variant='light'
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <i
                        className='fas fa-trash'
                        style={{ color: 'black' }}
                      ></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>
                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                items
              </h2>
              ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type='button'
                className='btn-block'
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Proceed To Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  )
}

export default CartScreen