import React, { useState, useEffect } from 'react'
import { Row, Col, Image, ListGroup, Button, Card, ListGroupItem } from 'react-bootstrap'
import Rating from '../components/rating'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

function ProductScreen() {

    const { id } = useParams()
    
    const [product, setProduct] = useState([])

    useEffect(() => {
        async function fetchProduct() {
            const {data} = await axios.get(`/product/${id}`)
            setProduct(data)
        }
        fetchProduct()
    }, [])
  return (
    <Row>
        <Col md={6}>
            <Image src={product.image} alt={product.name} fluid></Image>
        </Col>
        <Col md={3}>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                </ListGroup.Item>
                <ListGroup.Item>
                    Price: <strong>${product.price}</strong>
                </ListGroup.Item>
                <ListGroup.Item>
                    Stock: {product.stock}
                </ListGroup.Item>
            </ListGroup>
        </Col>
        <Link to="/" className="btn btn-light my-3">
            Return
        </Link>
    </Row>
  )
}

export default ProductScreen
