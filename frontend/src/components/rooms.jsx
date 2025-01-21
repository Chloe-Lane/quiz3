import React from 'react';
import { Card } from 'react-bootstrap';

function Rooms({ rooms }) {
  return (
    <div className="d-flex justify-content-center my-3">
      <Card
        className="mx-3 my-3 p-4 rounded shadow"
        style={{
          width: '25rem',
          height: '35rem',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden', // Prevent content from overflowing
        }}
      >
        <a href={`/rooms/${rooms._id}`}>
          <Card.Img
            src={rooms.image}
            style={{
              height: '15rem',
              objectFit: 'cover', // Ensure image fits within its container
            }}
          />
        </a>

        <Card.Body className="d-flex flex-column">
          <a href={`/rooms/${rooms._id}`} className="text-decoration-none">
            <Card.Title className="mb-2">
              <strong className="text-dark">{rooms.name}</strong>
            </Card.Title>
          </a>

          <Card.Text className="text-dark" style={{ flexGrow: 1, overflowY: 'auto' }}>
            <p>
              Price: <strong>₱{rooms.price}</strong>
            </p>
            <p>
              <i className="fas fa-location-arrow"></i> Location:{' '}
              <strong>{rooms.location}</strong>
            </p>
            <p>
              Description: <strong>{rooms.description}</strong>
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Rooms;
