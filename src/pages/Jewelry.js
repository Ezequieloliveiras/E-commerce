import axios from 'axios'
import { useState, useEffect } from 'react'

import {
  Container,
  styled,
  Grid
} from '@mui/material'

import Header from '../Partials/HeaderGeneral'
import CustomersCard from '../cards/CustomersCard'
import Footer from '../bottomfooter/Footer'
import Title from '../templates/JewelryText'

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: 0,
}))

const Jewelry = ({ children }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/category/jewelery')
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
        {!loading && <Title />}
        {children}
        <Grid container>
          {products.map(item => (
            <Grid item xs={12} md={4} key={item.id} >
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

export default Jewelry
