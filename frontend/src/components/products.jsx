import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from './rating';
import { Link } from 'react-router-dom';

function Products({ products }) {
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
        <Link to={`/products/${products._id}`}>
          <Card.Img
            src={products.image}
            style={{
              height: '15rem',
              objectFit: 'cover', // Ensure image fits within its container
            }}
          />
        </Link>

        <Card.Body className="d-flex flex-column">
          <Link to={`/products/${products._id}`} className="text-decoration-none">
            <Card.Title className="mb-2">
              <strong className="text-dark">{products.name}</strong>
            </Card.Title>
          </Link>

          <Card.Text className="text-dark" style={{ flexGrow: 1, overflowY: 'auto' }}>

          <Card.Text as="div">
            <div className="my-3">
              <Rating value={products.rating} color={'#f8e825'} />
            </div>
          </Card.Text>
          
            <p>
              Price: <strong>₱{products.price}</strong>
            </p>

            <p>
              Stock: <strong>{products.stock}</strong>
            </p>

          </Card.Text>

        </Card.Body>
      </Card>
    </div>
  );
}

export default Products;
