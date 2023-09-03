import {
  Container,
  styled,
  Grid
} from '@mui/material'

import axios from 'axios'
import { useState, useEffect } from 'react'

import Header from "../partials/Header"
import CustomersCard from '../components/CustomersCard'
import Footer from '../bottomfooter/Footer'

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: 0,
}))

const Padrão = ({ children }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const category = "women's clothing"


  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/category/${category}`)
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
            <Grid item xs={12} md={4} key={item.id}>
              <CustomersCard
                category={item.category}
                title={item.title}
                price={item.price}
                description={item.description}
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

export default Padrão
