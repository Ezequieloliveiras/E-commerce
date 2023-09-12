import {
  Container,
  styled,
  Grid
} from '@mui/material'

import axios from 'axios'
import { useState, useEffect } from 'react'
import Footer from '../bottomfooter/Footer'

import Header from "../partials/Header"
import CustomersCard from '../cards/CustomersCar'


const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: 0,
}))

const Cart = ({ children }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('https://fakestoreapi.com/carts')
      .then(response => {
        const data = response.data
        setProducts(data)
        setLoading(false)
      })
  }, [])

  return (
    <div style={{ background: '#e0e0e0' }}>
      <Header />
      <StyledContainer>
        {children}
        <Grid container>
          {products.map(item => (
            <Grid item xs={12} md={4} key={item.id} style={{ marginTop: '60px' }}>
              <CustomersCard
                id={item.id}
                userId={item.userId}
                date={item.date}
                products={item.products}
                image={item.image}
              />
            </Grid>
          ))}
        </Grid>
      </StyledContainer>
      {!loading && <Footer />}
    </div>
  )
}

export default Cart
