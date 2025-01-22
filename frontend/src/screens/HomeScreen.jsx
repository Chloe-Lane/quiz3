import React , {useState, useEffect} from 'react'
import Rooms from '../components/rooms'
import {Row, Col} from 'react-bootstrap'
import axios from 'axios'



function HomeScreen() {
  
  const [rooms, setRooms] = useState([])

  useEffect(() => {
     async function fetchRooms() {
        const { data } = await axios.get('http://127.0.0.1:8000/rooms/')
        setRooms(data)
     }
     fetchRooms()
  }, [])

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

