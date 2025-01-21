import React from 'react'
import Rooms from '../components/rooms'
import rooms from '../rooms.js'
import {Row, Col} from 'react-bootstrap'


function HomeScreen() {
  return (
    <div>
        <h1 className="text-center py-3"> </h1>
        <h1 className="text-center py-3">Hotels</h1>
        <h5 className="text-center py-3">"Your perfect getaway awaits – where comfort, style, and unforgettable experiences come together."</h5>
        <Row>
            {rooms.map(rooms => (
                <Col key={[rooms._id]} sm={12} md={6} lg={4} xl={3}>
                    <Rooms rooms={rooms} />
                </Col>
            ))} 
        </Row>

    </div>
  )
}

export default HomeScreen
