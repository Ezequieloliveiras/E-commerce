import { styled } from '@mui/material'
import Typography from '@mui/material/Typography'

const Container = styled('h1')({
  padding: '30px 0 0 115px',
})

const Title = () => {
  return (
    <Container>
      <Typography variant='h4' >
        All products
      </Typography>
    </Container>
  )
}

export default Title
