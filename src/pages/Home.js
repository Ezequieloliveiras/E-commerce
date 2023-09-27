import axios from 'axios';
import { useState, useEffect } from 'react';

import {
  Container,
  styled,
  Grid
} from '@mui/material';

import Header from '../Partials/HeaderGeneral'
import CustomersCard from '../cards/CustomersCard';
import Footer from '../bottomfooter/Footer';
import Title from '../templates/Text';

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: 0,
  minHeight: 'calc(100vh - 64px)', // 64px é a altura do cabeçalho (Header)
  position: 'relative',
}));

const Home = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        const data = response.data;
        setProducts(data);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ background: '#e0e0e0', position: 'relative' }}>
      <Header setSearchTerm={setSearchTerm} />

      {!loading && <Title />}

      <StyledContainer>
        {children}
        <Grid container>
          {products
            .filter((item) =>
              item.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((item) => (
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

      {!loading && <Footer style={{ position: 'absolute', bottom: 0 }} />}
    </div>
  );
};

export default Home;
