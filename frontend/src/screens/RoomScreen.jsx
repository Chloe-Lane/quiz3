import React from 'react'

import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
import Rating from '../components/rating'
import rooms from '../rooms'
import { Link, useParams } from 'react-router-dom'

function RoomScreen() {
    const { id } = useParams()
    const room = rooms.find((p) => p._id === id)
  return (
    <Row>
        <Col md={6}>
            <Image src={room.image} alt={room.name} fluid></Image>
        </Col>
        <Col md={3}>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h3>{room.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Rating value={room.rating} text={`${room.numReviews} reviews`} />
                </ListGroup.Item>
                <ListGroup.Item>
                    Price: <strong>${room.price}</strong>
                </ListGroup.Item>
                <ListGroup.Item>
                    Description: {room.description}
                </ListGroup.Item>
            </ListGroup>
        </Col>
        <Link to="/" className="btn btn-light my-3">
            Return
        </Link>
    </Row>
  )
}

export default RoomScreen
