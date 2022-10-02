import React, {useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {Row, Col} from 'react-bootstrap'
// action listProducts
import { listProducts } from '../actions/productActions'

// components ( Product, Loader & Alert)
import Product from '../components/ProductInHomeScreen'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'


const HomeScreen = () => {
  const dispatch = useDispatch()
  const { pageNumber } = useParams() || 1

  const productList = useSelector((state) => state.productList)
  const {loading, error, products, page, pages} = productList


  useEffect(()=>{
    dispatch(listProducts(pageNumber))
  }, [dispatch, pageNumber])

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate pages={pages} page={page}/>
        </>
      )}
    </>
  )
}

export default HomeScreen