import React , {useState, useEffect} from 'react'
import Products from '../components/products'
import {Row, Col} from 'react-bootstrap'
import axios from 'axios'



function HomeScreen() {
  
  const [products, setProducts] = useState([])

  useEffect(() => {
     async function fetchProducts() {
        const { data } = await axios.get('/products/')
        setProducts(data)
     }
     fetchProducts()
  }, [])

  return (
    <div>
        <h1 className="text-center py-3"> </h1>
        <h1 className="text-center py-3">Cosmetics</h1>
        <Row>
            {products.map(products => (
                <Col key={[products._id]} sm={12} md={6} lg={4} xl={3}>
                    <Products products={products} />
                </Col>
            ))} 
        </Row>

    </div>
  )
}

export default HomeScreen

